import { 
    HYPERTENSION_ESSENTIELLE,
    INFARCTUS_MYOCARDE
} from "./Cases/Cardiovasculaire";

import { 
    Mucoviscidose,
    LungCancer,
    BRONCHITE,
    PNEUMONIE,
    SINUSITE
} from "./Cases/Respiratoire";

import { 
    CalculsBiliaires,
} from "./Cases/Digestif";

import { 
    DIABETE_SUCRE,
    HYPERTHYROIDIE,
    MALADIE_ADDISON
} from "./Cases/Endocrinien";

import { 
    PSORIASIS
} from "./Cases/Immunitaire";

import { 
    AVC,
    EPILEPSIE,
    MALADIE_PARKINSON 
} from "./Cases/Nerveux";


import { 
    ENDOMETRIOSE,
    VAGINITE,
    VARICOCELE 
} from "./Cases/Reproducteur";


import { 
    NANISME 
} from "./Cases/Squelettique";


import { 
    ANSDROPAUSE,
    GANFRENE_DE_FOURNIER
} from "./Cases/Urinaire";


export const CardiovascularCases:Array<any> = [
    HYPERTENSION_ESSENTIELLE,
    INFARCTUS_MYOCARDE
]

export const DigestiveCases:Array<any> = [
    CalculsBiliaires
]

export const RespiratoryCases:Array<any> = [
    Mucoviscidose,
    LungCancer,
    BRONCHITE,
    PNEUMONIE,
    SINUSITE
]


export const NervousCases:Array<any> = [
    AVC,
    EPILEPSIE,
    MALADIE_PARKINSON 
]

export const EndocrineCases:Array<any> = [
    DIABETE_SUCRE,
    HYPERTHYROIDIE,
    MALADIE_ADDISON
]

export const ImmuneCases:Array<any> = [
    PSORIASIS
]

export const MuscularCases:Array<any> = [

]

export const ReproductiveCases:Array<any> = [
    ENDOMETRIOSE,
    VAGINITE,
    VARICOCELE 
]

export const SkeletalCases:Array<any> = [
    NANISME
]

export const UrinaryCases:Array<any> = [
    ANSDROPAUSE,
    GANFRENE_DE_FOURNIER
]