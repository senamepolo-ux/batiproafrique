/**
 * Types du calculateur BatiPro Afrique.
 *
 * Le moteur part de la description d'un projet et en déduit des quantités,
 * puis seulement ensuite des prix. C'est l'inverse des calculateurs qui
 * multiplient une surface par un ratio au m² : c'est ce qui permet à un
 * professionnel de vérifier chaque étape du raisonnement.
 */

export type TypeMur = "parpaing15" | "parpaing20" | "btc";
export type TypeToiture = "tole" | "tuile" | "dalle";
export type NiveauFinition = "economique" | "standard" | "hautDeGamme";
export type Zone = "dakar" | "thiesMbour" | "regions";

export interface ProjetSaisi {
  /** Surface totale de la parcelle, en m² */
  terrain: number;
  /** Surface occupée au sol par la construction, en m² */
  empriseAuSol: number;
  /** 1 = rez-de-chaussée seul, 2 = R+1, etc. */
  niveaux: number;
  typeMur: TypeMur;
  typeToiture: TypeToiture;
  finition: NiveauFinition;
  zone: Zone;
}

/**
 * Une quantité calculée, accompagnée de l'explication de son calcul.
 * Chaque valeur affichée à l'utilisateur doit pouvoir être dépliée :
 * l'expert va vite, le débutant apprend, personne n'est encombré.
 */
export interface Quantite {
  libelle: string;
  valeur: number;
  unite: string;
  /** Le calcul, en clair, pour que rien ne soit une boîte noire */
  detailCalcul: string;
  /** Ce que c'est et pourquoi ça compte, pour qui ne connaît pas */
  pedagogie?: string;
}

export interface LignePrix {
  libelle: string;
  quantite: number;
  unite: string;
  prixUnitaire: number;
  total: number;
  /** Origine du prix, affichée au lecteur */
  source: string;
  /** Date du relevé, pour qu'on sache si le chiffre a vieilli */
  dateReleve: string;
  /** Vrai quand le prix n'est qu'un ordre de grandeur */
  estEstimation: boolean;
}

export interface Surfaces {
  terrain: number;
  empriseAuSol: number;
  surfaceBatie: number;
  surfaceLibre: number;
  /** Emprise rapportée au terrain, exprimée en pourcentage */
  coefficientEmpriseAuSol: number;
}

/**
 * Budget de marché, par phase.
 * Contrairement aux quantités, ces montants ne sont pas calculés : ils sont
 * observés. Le calculateur ne prétend pas les démontrer.
 */
export interface Budget {
  min: number;
  max: number;
  grosOeuvreMin: number;
  grosOeuvreMax: number;
  secondOeuvreMin: number;
  secondOeuvreMax: number;
  finitionsMin: number;
  finitionsMax: number;
  source: string;
}

export interface ResultatCalcul {
  surfaces: Surfaces;
  /** Ce qu'il faut acheter : calculé, vérifiable, opposable à un devis */
  quantites: Quantite[];
  /** Prix des matériaux de structure, déduits des quantités ci-dessus */
  prix: LignePrix[];
  totalMateriauxStructure: number;
  /** Ce que coûtera le projet : fourchette de marché, non calculée */
  budget: Budget;
  /**
   * Part des matériaux de structure dans le budget total.
   * Permet au lecteur de comprendre ce que le calcul couvre réellement.
   */
  partStructureDansBudget: { min: number; max: number };
  alertes: Alerte[];
}

export interface Alerte {
  niveau: "info" | "attention";
  titre: string;
  message: string;
}
