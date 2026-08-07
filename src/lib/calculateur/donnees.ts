/**
 * Données de prix du calculateur.
 *
 * Séparées volontairement du moteur : ajouter un matériau ou actualiser un
 * prix ne doit jamais demander de toucher au code de calcul. C'est ce qui
 * permettra d'étendre à la BTC importée, au travertin ou aux matériaux
 * turcs et chinois sans rien réécrire.
 *
 * Règle non négociable : aucun prix sans source ni date. Si l'origine d'un
 * chiffre est inconnue, il n'entre pas ici.
 */

export interface PrixMateriau {
  libelle: string;
  prix: number;
  unite: string;
  source: string;
  dateReleve: string;
  /** Vrai quand le chiffre est un ordre de grandeur de marché */
  estEstimation: boolean;
  note?: string;
}

export const DATE_DERNIERE_MISE_A_JOUR = "2026-08-03";

/**
 * Prix des matériaux, zone de Dakar.
 *
 * Pour le ciment et le fer, on retient le prix réellement pratiqué et non le
 * prix homologué : l'homologation n'est pas appliquée sur le marché, et un
 * budget bâti sur le tarif officiel manque à l'arrivée.
 */
export const PRIX_MATERIAUX = {
  cimentTonne: {
    libelle: "Ciment CEM II",
    prix: 73000,
    unite: "tonne",
    source: "Marché constaté à Dakar. Prix homologué : 67 500 FCFA/t (décision gouvernementale, décembre 2025)",
    dateReleve: "2026-08-03",
    estEstimation: false,
    note: "Le prix homologué n'est pas appliqué. Fourchette constatée : 69 750 à 80 000 FCFA/t.",
  },

  acierTonne: {
    libelle: "Fer à béton",
    prix: 620000,
    unite: "tonne",
    source: "Relevés de prix à la barre, Dakar, janvier 2026, convertis à la tonne. Prix homologué : 520 000 FCFA/t importé",
    dateReleve: "2026-01-15",
    estEstimation: false,
    note: "Fourchette constatée : 580 000 à 700 000 FCFA/t. Le fer local, issu du recyclage, coûte 10 à 15 % de moins.",
  },

  sableM3: {
    libelle: "Sable de carrière",
    prix: 1750,
    unite: "m³",
    source: "35 000 FCFA le camion de 20 m³ (benne standard au Sénégal)",
    dateReleve: "2026-08-03",
    estEstimation: false,
    note: "Le sable de dune revient à 2 200 à 2 500 FCFA/m³ et se raréfie sous l'effet de la réglementation du littoral.",
  },

  gravierM3: {
    libelle: "Gravier",
    prix: 6500,
    unite: "m³",
    source: "130 000 FCFA le camion de 20 m³ à Dakar (110 000 à Thiès)",
    dateReleve: "2026-08-03",
    estEstimation: false,
  },

  parpaing15Unite: {
    libelle: "Agglo creux 15×20×50",
    prix: 470,
    unite: "unité",
    source: "Relevés fournisseurs Dakar. Interpolé entre le creux 10×20×50 à 377 FCFA et le creux 20×20×50 à 565 FCFA",
    dateReleve: "2026-08-03",
    estEstimation: true,
  },

  parpaing20Unite: {
    libelle: "Agglo creux 20×20×50",
    prix: 565,
    unite: "unité",
    source: "Relevés fournisseurs, zone Parcelles Assainies, Dakar",
    dateReleve: "2026-08-03",
    estEstimation: false,
  },

  btcUnite: {
    libelle: "Brique de terre comprimée",
    prix: 225,
    unite: "unité",
    source: "Fourchette filière BTC Sénégal : 200 à 250 FCFA l'unité",
    dateReleve: "2026-08-03",
    estEstimation: true,
  },
} as const satisfies Record<string, PrixMateriau>;

/**
 * Taux horaires de main d'œuvre.
 *
 * Ces valeurs proviennent du générateur de prix CYPE localisé pour le
 * Sénégal. Ce sont des références de calcul, pas un relevé de marché, et
 * l'éditeur n'affiche aucune date de mise à jour. Elles sont utilisées
 * faute de source publique sénégalaise, et signalées comme telles.
 */
export const PRIX_MAIN_DOEUVRE = {
  compagnonHeure: {
    libelle: "Compagnon poseur",
    prix: 925,
    unite: "heure",
    source: "Générateur de prix CYPE Ingenieros, version Sénégal",
    dateReleve: "sans date affichée par l'éditeur",
    estEstimation: true,
  },
  ouvrierHeure: {
    libelle: "Ouvrier poseur",
    prix: 575,
    unite: "heure",
    source: "Générateur de prix CYPE Ingenieros, version Sénégal",
    dateReleve: "sans date affichée par l'éditeur",
    estEstimation: true,
  },
} as const satisfies Record<string, PrixMateriau>;

/**
 * Écarts de prix par zone, rapportés à Dakar.
 * Les matériaux sont vendus 20 à 30 % plus cher dans la capitale que dans
 * les régions, essentiellement à cause du transport.
 */
export const COEFFICIENT_ZONE = {
  dakar: 1.0,
  thiesMbour: 0.88,
  regions: 0.8,
} as const;

/**
 * Fourchettes de coût au m² bâti, tous corps d'état confondus.
 *
 * Ces valeurs ne sont pas calculées : elles sont observées sur le marché.
 *
 * Pourquoi ne pas tout calculer ? Parce qu'un budget complet suppose un
 * devis quantitatif de tous les lots : terrassement, coffrage, enduits,
 * charpente, couverture, plomberie, électricité, menuiseries, peinture.
 * Nous savons calculer la structure avec rigueur ; nous n'avons pas encore
 * de données fiables pour le reste. Plutôt que d'inventer une précision que
 * nous n'avons pas, nous affichons une fourchette de marché honnête.
 *
 * Chaque poste que nous saurons calculer sortira progressivement de cette
 * fourchette pour rejoindre le détail vérifiable.
 *
 * Aucune source publique officielle n'établit de coût au m² au Sénégal.
 * Ces fourchettes proviennent de devis observés et recoupés entre plusieurs
 * professionnels du secteur.
 */
export const COUT_M2_MARCHE = {
  economique: { min: 180000, max: 250000 },
  standard: { min: 250000, max: 400000 },
  hautDeGamme: { min: 400000, max: 550000 },
} as const;

export const SOURCE_COUT_M2 =
  "Fourchettes de marché recoupées entre plusieurs professionnels du secteur. Aucune source publique officielle n'existe au Sénégal.";

/**
 * Répartition indicative du budget par grande phase.
 * Le gros œuvre absorbe toujours la majorité, quel que soit le projet.
 */
export const REPARTITION_BUDGET = {
  grosOeuvre: 0.6,
  secondOeuvre: 0.25,
  finitions: 0.15,
} as const;
