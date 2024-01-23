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

const baseFolder = "/assets/img/systems"

// Exemple de liste de systèmes biologiques
export const BIOLOGICAL_SYSTEMS: IBioSystem[] = [
  {
    id: 1,
    name: "Système Cardiovasculaire",
    cases: CardiovascularCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/cardiovascular.jpg`,
  },
  {
    id: 2,
    name: "Système Respiratoire",
    cases: RespiratoryCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/respiratory.jpeg`,
  },
  {
    id: 3,
    name: "Système Digestif",
    cases: DigestiveCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/digestive.jpeg`,
  },
  {
    id: 4,
    name: "Système Nerveux",
    cases: NervousCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/nervous.jpeg`,
  },
  {
    id: 5,
    name: "Système Endocrinien",
    cases: EndocrineCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/endocrine.jpeg`,
  },
  {
    id: 6,
    name: "Système Musculaire",
    cases: MuscularCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/muscular.jpeg`,
  },
  {
    id: 7,
    name: "Système Squelettique",
    cases: SkeletalCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/skeletal.jpg`,
  },
  {
    id: 8,
    name: "Système Immunitaire",
    cases: ImmuneCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/immune.jpeg`,
  },
  {
    id: 9,
    name: "Système Urinaire",
    cases: UrinaryCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/urinary.png`,
  },
  {
    id: 10,
    name: "Système Reproducteur",
    cases: ReproductiveCases.length,
    difficulty: "MOYEN",
    image: `${baseFolder}/reproductive.jpeg`,
  },
];
