import { IBioSystem } from "@/types/biologic_systems";
import {
  CardiovascularCases,
  DigestiveCases,
  RespiratoryCases,
  NervousCases,
  EndocrineCases,
  ImmuneCases,
  MuscularCases,
  ReproductiveCases,
  SkeletalCases,
  UrinaryCases
} from "@/data/caseIndexer";

// Exemple de liste de systèmes biologiques
export const BIOLOGICAL_SYSTEMS: IBioSystem[] = [
  {
    id: 1,
    name: "Système Cardiovasculaire",
    cases: CardiovascularCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 2,
    name: "Système Respiratoire",
    cases: RespiratoryCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 3,
    name: "Système Digestif",
    cases: DigestiveCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 4,
    name: "Système Nerveux",
    cases: NervousCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 5,
    name: "Système Endocrinien",
    cases: EndocrineCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 6,
    name: "Système Musculaire",
    cases: MuscularCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 7,
    name: "Système Skelettique",
    cases: SkeletalCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 8,
    name: "Système Immunitaire",
    cases: ImmuneCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 9,
    name: "Système Urinaire",
    cases: UrinaryCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
  {
    id: 10,
    name: "Système Reproducteur",
    cases: ReproductiveCases.length,
    difficulty: "MOYEN",
    image: "/assets/img/logo.png",
  },
];
