/**
 * Moteur de calcul du calculateur BatiPro Afrique.
 *
 * Enchaînement : description du projet → volumes → quantités de matériaux
 * → prix. Le prix arrive en dernier, jamais en premier.
 *
 * Chaque quantité produite porte le détail de son calcul et, quand elle
 * mérite une explication, un texte pédagogique. Un professionnel vérifie
 * le raisonnement, un particulier apprend en le lisant.
 */

import {
  COMPOSITION_BETON_350,
  BETON,
  ACIER_KG_PAR_M3,
  TAUX_CHUTE_ACIER,
  MACONNERIE,
  MAIN_DOEUVRE,
  HAUTEUR_SOUS_PLAFOND,
  EPAISSEUR_DALLE,
  EPAISSEUR_DALLAGE,
} from "./hypotheses";
import {
  PRIX_MATERIAUX,
  COEFFICIENT_ZONE,
  COUT_M2_MARCHE,
  SOURCE_COUT_M2,
  REPARTITION_BUDGET,
  type PrixMateriau,
} from "./donnees";
import type {
  ProjetSaisi,
  ResultatCalcul,
  Quantite,
  LignePrix,
  Surfaces,
  Alerte,
  Budget,
} from "./types";

const arrondi = (valeur: number, decimales = 2) =>
  Math.round(valeur * 10 ** decimales) / 10 ** decimales;

function calculerSurfaces(projet: ProjetSaisi): Surfaces {
  const surfaceBatie = projet.empriseAuSol * projet.niveaux;
  const surfaceLibre = Math.max(0, projet.terrain - projet.empriseAuSol);
  const ces = projet.terrain > 0 ? (projet.empriseAuSol / projet.terrain) * 100 : 0;

  return {
    terrain: projet.terrain,
    empriseAuSol: projet.empriseAuSol,
    surfaceBatie,
    surfaceLibre,
    coefficientEmpriseAuSol: arrondi(ces, 1),
  };
}

/**
 * Périmètre estimé à partir de l'emprise.
 * On ne connaît pas la forme du plan : on part du carré équivalent, majoré
 * du facteur de forme pour tenir compte des décrochements réels.
 */
function estimerPerimetre(emprise: number): number {
  return 4 * Math.sqrt(emprise) * MACONNERIE.facteurForme;
}

function calculerVolumesBeton(projet: ProjetSaisi, s: Surfaces) {
  const fondations = s.empriseAuSol * BETON.fondationsParM2Emprise;
  const longrines = s.empriseAuSol * BETON.longrinesParM2Emprise;
  const poteaux = s.surfaceBatie * BETON.poteauxParM2Batie;
  const poutres = s.surfaceBatie * BETON.poutresParM2Batie;
  const dallage = s.empriseAuSol * EPAISSEUR_DALLAGE;

  // Une dalle par niveau franchi. En toiture-terrasse, le dernier plancher
  // est également une dalle ; en tôle ou en tuile, il n'y en a pas.
  const nbDalles =
    projet.typeToiture === "dalle" ? projet.niveaux : Math.max(0, projet.niveaux - 1);
  const dalles = s.empriseAuSol * nbDalles * EPAISSEUR_DALLE;

  return { fondations, longrines, poteaux, poutres, dallage, dalles, nbDalles };
}

function calculerAcier(v: ReturnType<typeof calculerVolumesBeton>): number {
  const brut =
    v.fondations * ACIER_KG_PAR_M3.fondations +
    v.longrines * ACIER_KG_PAR_M3.longrines +
    v.poteaux * ACIER_KG_PAR_M3.poteaux +
    v.poutres * ACIER_KG_PAR_M3.poutres +
    v.dalles * ACIER_KG_PAR_M3.dalle +
    v.dallage * ACIER_KG_PAR_M3.dallage;

  return brut * (1 + TAUX_CHUTE_ACIER);
}

function calculerSurfaceMurs(projet: ProjetSaisi, s: Surfaces): number {
  const perimetre = estimerPerimetre(s.empriseAuSol);
  const mursExterieurs = perimetre * HAUTEUR_SOUS_PLAFOND * projet.niveaux;
  const mursInterieurs = mursExterieurs * MACONNERIE.ratioMursInterieurs;
  const total = mursExterieurs + mursInterieurs;

  return total * (1 - MACONNERIE.tauxOuvertures);
}

function ligne(
  materiau: PrixMateriau,
  quantite: number,
  coefZone: number
): LignePrix {
  const prixUnitaire = Math.round(materiau.prix * coefZone);
  return {
    libelle: materiau.libelle,
    quantite: arrondi(quantite),
    unite: materiau.unite,
    prixUnitaire,
    total: Math.round(quantite * prixUnitaire),
    source: materiau.source,
    dateReleve: materiau.dateReleve,
    estEstimation: materiau.estEstimation,
  };
}

export function calculer(projet: ProjetSaisi): ResultatCalcul {
  const surfaces = calculerSurfaces(projet);
  const coefZone = COEFFICIENT_ZONE[projet.zone];

  const v = calculerVolumesBeton(projet, surfaces);
  const betonTotal =
    v.fondations + v.longrines + v.poteaux + v.poutres + v.dallage + v.dalles;

  const acierKg = calculerAcier(v);
  const surfaceMurs = calculerSurfaceMurs(projet, surfaces);

  // Ciment : celui du béton, plus celui du mortier de pose
  const mortierM3 = surfaceMurs * MACONNERIE.mortierM3ParM2;
  const cimentKg =
    betonTotal * COMPOSITION_BETON_350.cimentKg +
    mortierM3 * MACONNERIE.dosageMortierKgParM3;

  const sableM3 = betonTotal * COMPOSITION_BETON_350.sableM3 + mortierM3 * 1.05;
  const gravierM3 = betonTotal * COMPOSITION_BETON_350.gravierM3;

  const nbBlocs =
    surfaceMurs *
    (projet.typeMur === "btc" ? MACONNERIE.btcParM2 : MACONNERIE.agglosParM2);

  // Attention : ces heures ne couvrent que la mise en œuvre du béton et de
  // la maçonnerie. Le ferraillage, le coffrage, les enduits et tous les
  // corps d'état suivants n'y sont pas. Le chiffre est donc un plancher.
  const heures =
    betonTotal * MAIN_DOEUVRE.heuresParM3Beton +
    surfaceMurs * MAIN_DOEUVRE.heuresParM2Maconnerie;

  const quantites: Quantite[] = [
    {
      libelle: "Béton",
      valeur: arrondi(betonTotal, 1),
      unite: "m³",
      detailCalcul: `Fondations ${arrondi(v.fondations, 1)} + longrines ${arrondi(v.longrines, 1)} + poteaux ${arrondi(v.poteaux, 1)} + poutres ${arrondi(v.poutres, 1)} + dallage ${arrondi(v.dallage, 1)} + ${v.nbDalles} dalle(s) ${arrondi(v.dalles, 1)} m³`,
      pedagogie:
        "Le béton est un mélange de ciment, de sable, de gravier et d'eau. Pour 1 m³ dosé à 350 kg, il faut 7 sacs de ciment, 0,40 m³ de sable, 0,80 m³ de gravier et environ 175 litres d'eau. C'est le dosage courant du béton armé de bâtiment.",
    },
    {
      libelle: "Acier",
      valeur: arrondi(acierKg / 1000, 2),
      unite: "tonnes",
      detailCalcul: `Ratios par élément (${ACIER_KG_PAR_M3.poteaux} kg/m³ pour les poteaux, ${ACIER_KG_PAR_M3.poutres} pour les poutres, ${ACIER_KG_PAR_M3.dalle} pour les dalles), majorés de ${TAUX_CHUTE_ACIER * 100} % de chutes de découpe`,
      pedagogie:
        "Le béton résiste très bien à la compression mais mal à la traction : c'est l'acier qui reprend ces efforts. On exprime la quantité nécessaire en kilos d'acier par mètre cube de béton. Ce ratio est aussi le meilleur moyen de repérer un devis gonflé : au-delà de 180 kg/m³ sur une villa courante, il faut demander des explications.",
    },
    {
      libelle: "Ciment",
      valeur: arrondi(cimentKg / 1000, 2),
      unite: "tonnes",
      detailCalcul: `${arrondi(betonTotal, 1)} m³ de béton × 350 kg/m³, plus ${arrondi(mortierM3, 1)} m³ de mortier de pose × ${MACONNERIE.dosageMortierKgParM3} kg/m³`,
      pedagogie:
        "Une tonne de ciment représente 20 sacs de 50 kg. Acheter à la tonne coûte nettement moins cher qu'au sac. Le CEM II 32.5 convient à la maçonnerie et aux enduits, le 42.5 est réservé au béton armé structurel.",
    },
    {
      libelle: "Sable",
      valeur: arrondi(sableM3, 1),
      unite: "m³",
      detailCalcul: `${arrondi(betonTotal, 1)} m³ de béton × 0,40 m³, plus le sable du mortier de pose`,
      pedagogie:
        "Attention au sable de mer non lavé : il contient des chlorures qui corrodent les armatures de l'intérieur. Le bâtiment paraît sain pendant des années, puis les aciers gonflent et font éclater le béton. Le dommage est irréparable. Exigez du sable lavé ou du sable de carrière.",
    },
    {
      libelle: "Gravier",
      valeur: arrondi(gravierM3, 1),
      unite: "m³",
      detailCalcul: `${arrondi(betonTotal, 1)} m³ de béton × 0,80 m³, soit ${arrondi(gravierM3 / 20, 1)} camion(s) de 20 m³`,
      pedagogie:
        "Le gravier se vend au camion et non au mètre cube. La benne standard fait 20 m³ au Sénégal, mais vérifiez toujours le volume annoncé : une benne plus petite au même prix double le coût réel du mètre cube.",
    },
    {
      libelle: projet.typeMur === "btc" ? "Briques de terre comprimée" : "Agglos",
      valeur: Math.ceil(nbBlocs),
      unite: "unités",
      detailCalcul: `${arrondi(surfaceMurs, 0)} m² de murs × ${projet.typeMur === "btc" ? MACONNERIE.btcParM2 : MACONNERIE.agglosParM2} blocs/m², ouvertures déduites à hauteur de ${MACONNERIE.tauxOuvertures * 100} %`,
      pedagogie:
        "Au Sénégal les agglos font 50 cm de long, contre 40 cm dans les tableaux européens. Cela donne 10 blocs au m² et non 12,5 : reprendre un métré européen fausse la commande de 25 %.",
    },
    {
      libelle: "Main d'œuvre (béton et maçonnerie)",
      valeur: Math.round(heures),
      unite: "heures",
      detailCalcul: `${arrondi(betonTotal, 1)} m³ de béton × ${MAIN_DOEUVRE.heuresParM3Beton} h, plus ${arrondi(surfaceMurs, 0)} m² de maçonnerie × ${MAIN_DOEUVRE.heuresParM2Maconnerie} h`,
      pedagogie:
        "Ce chiffre ne couvre que la mise en œuvre du béton et de la maçonnerie. Le ferraillage, le coffrage, les enduits et tous les corps d'état suivants viennent s'y ajouter : considérez-le comme un plancher, pas comme le total du chantier.",
    },
  ];

  const blocMateriau =
    projet.typeMur === "btc"
      ? PRIX_MATERIAUX.btcUnite
      : projet.typeMur === "parpaing15"
        ? PRIX_MATERIAUX.parpaing15Unite
        : PRIX_MATERIAUX.parpaing20Unite;

  const prix: LignePrix[] = [
    ligne(PRIX_MATERIAUX.cimentTonne, cimentKg / 1000, coefZone),
    ligne(PRIX_MATERIAUX.acierTonne, acierKg / 1000, coefZone),
    ligne(PRIX_MATERIAUX.sableM3, sableM3, coefZone),
    ligne(PRIX_MATERIAUX.gravierM3, gravierM3, coefZone),
    ligne(blocMateriau, nbBlocs, coefZone),
  ];

  const totalMateriauxStructure = prix.reduce((somme, l) => somme + l.total, 0);

  // Le budget n'est pas déduit des quantités : il est observé sur le marché.
  // Mélanger les deux méthodes donnerait une fausse précision.
  const fourchette = COUT_M2_MARCHE[projet.finition];
  const budgetMin = Math.round(fourchette.min * surfaces.surfaceBatie * coefZone);
  const budgetMax = Math.round(fourchette.max * surfaces.surfaceBatie * coefZone);

  const budget: Budget = {
    min: budgetMin,
    max: budgetMax,
    grosOeuvreMin: Math.round(budgetMin * REPARTITION_BUDGET.grosOeuvre),
    grosOeuvreMax: Math.round(budgetMax * REPARTITION_BUDGET.grosOeuvre),
    secondOeuvreMin: Math.round(budgetMin * REPARTITION_BUDGET.secondOeuvre),
    secondOeuvreMax: Math.round(budgetMax * REPARTITION_BUDGET.secondOeuvre),
    finitionsMin: Math.round(budgetMin * REPARTITION_BUDGET.finitions),
    finitionsMax: Math.round(budgetMax * REPARTITION_BUDGET.finitions),
    source: SOURCE_COUT_M2,
  };

  return {
    surfaces,
    quantites,
    prix,
    totalMateriauxStructure,
    budget,
    partStructureDansBudget: {
      min: arrondi((totalMateriauxStructure / budgetMax) * 100, 1),
      max: arrondi((totalMateriauxStructure / budgetMin) * 100, 1),
    },
    alertes: construireAlertes(projet, surfaces),
  };
}

function construireAlertes(projet: ProjetSaisi, s: Surfaces): Alerte[] {
  const alertes: Alerte[] = [];

  if (s.coefficientEmpriseAuSol > 0) {
    alertes.push({
      niveau: s.coefficientEmpriseAuSol > 70 ? "attention" : "info",
      titre: `Vous couvrez ${s.coefficientEmpriseAuSol} % de votre terrain`,
      message:
        "Le coefficient d'emprise au sol autorisé est fixé par le plan d'urbanisme de votre commune, et non par une règle nationale. Le Code de l'urbanisme (loi n° 2023-20 du 29 décembre 2023) en fait une norme de densité dont le non-respect constitue une infraction. Renseignez-vous auprès de votre mairie avant de finaliser vos plans.",
    });
  }

  if (s.surfaceLibre > 0) {
    alertes.push({
      niveau: "info",
      titre: `${Math.round(s.surfaceLibre)} m² de terrain non bâti`,
      message:
        "Cette surface n'est pas perdue. Une cour plantée fait baisser la température intérieure de plusieurs degrés : un arbre qui ombrage un mur exposé, un patio qui crée un tirage d'air, un sol végétal qui reste frais. La maison sahélienne traditionnelle s'organise autour d'une cour depuis toujours, et ce n'est pas une question d'esthétique. Bétonnée, la même surface accumule la chaleur le jour et la restitue vers vos murs la nuit.",
    });
  }

  if (projet.typeMur === "btc") {
    alertes.push({
      niveau: "info",
      titre: "Vous avez choisi la brique de terre comprimée",
      message:
        "La BTC coûte moins cher que le parpaing et isole nettement mieux, ce qui réduit la facture de climatisation sur toute la durée de vie du bâtiment. Vérifiez le taux de stabilisation au ciment, généralement compris entre 5 et 10 %, et la résistance à la compression annoncée par le producteur.",
    });
  }

  return alertes;
}
