/**
 * Hypothèses de calcul du moteur.
 *
 * ⚠️ CE FICHIER DOIT ÊTRE VALIDÉ PAR UN INGÉNIEUR AVANT MISE EN LIGNE.
 *
 * Toutes les valeurs qui relèvent du jugement d'ingénieur sont regroupées
 * ici plutôt que dispersées dans le code, pour trois raisons :
 *
 * 1. Elles sont vérifiables d'un coup d'œil par un professionnel
 * 2. Elles seront exposées à l'utilisateur, qui pourra les ajuster
 * 3. Les corriger ne demande jamais de toucher au moteur
 *
 * Les ordres de grandeur retenus sont ceux couramment admis pour une villa
 * courante. Ils ne remplacent pas une note de calcul : un ouvrage réel se
 * dimensionne, il ne s'estime pas.
 */

/** Hauteur libre entre plancher fini et sous-face de dalle, en mètres. */
export const HAUTEUR_SOUS_PLAFOND = 3.0;

/** Épaisseur de la dalle de plancher, en mètres. */
export const EPAISSEUR_DALLE = 0.15;

/** Épaisseur du dallage sur terre-plein au rez-de-chaussée, en mètres. */
export const EPAISSEUR_DALLAGE = 0.12;

/**
 * Volumes de béton, exprimés par m² de surface concernée.
 * Ces ratios condensent un prédimensionnement courant de villa.
 */
export const BETON = {
  /** Semelles isolées et filantes, par m² d'emprise au sol */
  fondationsParM2Emprise: 0.055,
  /** Longrines et chaînage bas, par m² d'emprise au sol */
  longrinesParM2Emprise: 0.035,
  /** Poteaux, par m² de surface bâtie */
  poteauxParM2Batie: 0.025,
  /** Poutres et chaînages hauts, par m² de surface bâtie */
  poutresParM2Batie: 0.03,
} as const;

/**
 * Ratios d'acier, en kg par m³ de béton.
 *
 * Ce sont les valeurs les plus sensibles du moteur. Elles servent aussi de
 * repère pour détecter un devis surfacturé : un ratio très supérieur à ces
 * fourchettes signale soit une erreur, soit une facturation abusive.
 */
export const ACIER_KG_PAR_M3 = {
  fondations: 75,
  longrines: 100,
  poteaux: 120,
  poutres: 140,
  dalle: 95,
  dallage: 40,
} as const;

/** Chutes de découpe sur les aciers, en proportion. */
export const TAUX_CHUTE_ACIER = 0.07;

/**
 * Composition du béton, pour 1 m³ dosé à 350 kg de ciment.
 * C'est le dosage courant du béton armé de bâtiment.
 */
export const COMPOSITION_BETON_350 = {
  cimentKg: 350,
  sableM3: 0.4,
  gravierM3: 0.8,
  eauLitres: 175,
} as const;

/** Maçonnerie. */
export const MACONNERIE = {
  /**
   * Nombre de blocs par m² de mur.
   * Particularité sénégalaise : les agglos font 50 cm de long et non 40,
   * ce qui donne 10 blocs au m² en nominal, 9 une fois les joints déduits.
   */
  agglosParM2: 10,
  /** Briques de terre comprimée par m² de mur, format 29,5 × 14 × 9 */
  btcParM2: 33,
  /** Volume de mortier de pose, en m³ par m² de mur */
  mortierM3ParM2: 0.02,
  /** Dosage du mortier de pose, en kg de ciment par m³ */
  dosageMortierKgParM3: 400,
  /**
   * Longueur de murs intérieurs rapportée aux murs extérieurs.
   * Une villa courante recoupe ses volumes à peu près dans cette proportion.
   */
  ratioMursInterieurs: 0.8,
  /** Part de la surface de mur occupée par les portes et fenêtres */
  tauxOuvertures: 0.15,
  /**
   * Facteur de forme reliant l'emprise au périmètre.
   * Un carré parfait donnerait 4·√S ; les plans réels étant découpés,
   * on majore de 10 %.
   */
  facteurForme: 1.1,
} as const;

/**
 * Temps de main d'œuvre, en heures.
 * Un compagnon encadre, un ouvrier exécute : le ratio d'heures entre les
 * deux reflète cette répartition.
 */
export const MAIN_DOEUVRE = {
  heuresParM3Beton: 4.5,
  heuresParM2Maconnerie: 0.9,
  /** Part des heures assurée par le compagnon, le reste par l'ouvrier */
  partCompagnon: 0.4,
} as const;

/** Moyens auxiliaires et coûts indirects, en proportion du coût direct. */
export const FRAIS = {
  moyensAuxiliaires: 0.02,
  coutsIndirects: 0.03,
} as const;
