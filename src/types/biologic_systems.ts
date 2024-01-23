export interface IBioSystem {
    id: number;
    name: BioSystemTypes;
    image?: string;
    cases: number;
    difficulty?: SystemDificultyTypes
}

export type BioSystemTypes = "Système Cardiovasculaire" | "Système Respiratoire" | "Système Digestif" | "Système Nerveux" | "Système Endocrinien" | "Système Musculaire" | "Système Squelettique" | "Système Immunitaire" | "Système Urinaire" | "Système Reproducteur"

export type SystemDificultyTypes = "FACILE" | "MOYEN" | "DIFFICILE"

export type TutorFeedBack = "Bon Choix" | "Mauvais Choix"