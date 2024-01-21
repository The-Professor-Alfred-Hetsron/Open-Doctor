import { QUESTIONS_WITH_ID } from "@/constants/questions"
import { BioSystemTypes } from "@/types/biologic_systems"
import { IQuestionsWithID } from "@/types/questions"
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
import { KEYS_TRANSLATIONS } from "@/constants/caseQuestions";

export const getRandomCaseFromSystem = (system:BioSystemTypes) => {
    let randIndex 
    switch (system) {
        case "Système Cardiovasculaire":
            randIndex = Math.floor(Math.random() * CardiovascularCases.length-1) + 1;
            // console.log(randIndex)
            return CardiovascularCases[randIndex]
        
        case "Système Digestif":
            randIndex = Math.floor(Math.random() * DigestiveCases.length-1) + 1;
            // console.log(randIndex)
            return DigestiveCases[randIndex]

        case "Système Respiratoire":
            randIndex = Math.floor(Math.random() * RespiratoryCases.length-1) + 1;
            // console.log(randIndex)
            return RespiratoryCases[randIndex]
        
        case "Système Nerveux":
            randIndex = Math.floor(Math.random() * NervousCases.length-1) + 1;
            // console.log(randIndex)
            return NervousCases[randIndex]

        default:
            return RespiratoryCases[1]
    }
}

const shuffleArray = (array:Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}


export const getRandomOptions = (size:number, selected:Array<number>) => {
    // console.log(selected)
    const total = QUESTIONS_WITH_ID.length
    let randIndexArray:Array<number> = []
    randIndexArray.push(selected[0])
    const randOptionsArray:Array<IQuestionsWithID> = []

    let randIndex = Math.floor(Math.random() * total);
    while(randIndexArray.length < 4){
        randIndex = Math.floor(Math.random() * total);
        if(!selected.includes(randIndex) && !randIndexArray.includes(randIndex)){
            randIndexArray.push(randIndex)
        }
    }
    // console.log(randIndexArray)
    randIndexArray = shuffleArray(randIndexArray)
    // console.log(randIndexArray)
    randIndexArray.forEach(index => {
        const option:any =  QUESTIONS_WITH_ID.find((ques)=>{
            return ques.id === index
        })
        randOptionsArray.push(option)
    });

    return randOptionsArray
}

export const translateKey = (key:string) => {
    if(key!=undefined){
        const temp =  Object.entries(KEYS_TRANSLATIONS).find((([k, value])=>{
            return key === k
        }))
        if(temp!= undefined){
            return temp[1] as string
        }
    }
}

export const patientInfoFromObj = (obj:object) =>{
    if(obj!=undefined){
        let resultString = "Vous êtes en présence d'un patient virtuel: "
        Object.entries(obj).forEach(([key,value])=>{
            const translatedKey = translateKey(key)
            resultString+=`${translatedKey}: ${value}, `
        })
        return resultString
    }
}


export const displayObjectAsString = (obj:object)=>{
    if(obj!=undefined){

    }
}