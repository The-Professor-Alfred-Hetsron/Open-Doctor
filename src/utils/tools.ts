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


export const getRandomCaseFromSystem = (system:BioSystemTypes) => {
    let randIndex 
    switch (system) {
        case "Système Cardiovasculaire":
            randIndex = Math.floor(Math.random() * CardiovascularCases.length-1) + 1;
            return CardiovascularCases[randIndex]
        
        case "Système Digestif":
            randIndex = Math.floor(Math.random() * DigestiveCases.length-1) + 1;
            return DigestiveCases[randIndex]

        case "Système Respiratoire":
            randIndex = Math.floor(Math.random() * RespiratoryCases.length-1) + 1;
            return RespiratoryCases[randIndex]
        
        case "Système Nerveux":
            randIndex = Math.floor(Math.random() * NervousCases.length-1) + 1;
            return NervousCases[randIndex]

        default:
            return RespiratoryCases[1]
    }
}


export const getRandomOptions = (size:number, selected:Array<number>) => {
    const total = QUESTIONS_WITH_ID.length
    const randIndexArray:Array<number> = []
    const randOptionsArray:Array<IQuestionsWithID> = []

    for (let i = 0; i < size; i++) {
        let randIndex = Math.floor(Math.random() * total) + 1;

        while (!selected.includes(randIndex) && !randIndexArray.includes(randIndex)) {
            randIndex = Math.floor(Math.random() * total) + 1;
        }
        
        randIndexArray.push(randIndex)
    }

    randIndexArray.forEach(index => {
        const option:any =  QUESTIONS_WITH_ID.find((ques)=>{
            return ques.id === index
        })
        randOptionsArray.push(option)
    });

    return randOptionsArray
}