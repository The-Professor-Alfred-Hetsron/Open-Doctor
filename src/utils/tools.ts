import { QUESTIONS_WITH_ID } from "@/constants/questions"
import { BioSystemTypes } from "@/types/biologic_systems"
import { IQuestionsWithID } from "@/types/questions"
import {
    CardiovascularCases,
    DigestiveCases,
    RespiratoryCases,
    NervousCases,
    // EndocrineCases,
    // ImmuneCases,
    // MuscularCases,
    // ReproductiveCases,
    // SkeletalCases,
    // UrinaryCases
} from "@/data/caseIndexer";
import { KEYS_TRANSLATIONS } from "@/constants/caseQuestions";
import { 
    MAN_AVATAR_IMAGES,
    WOMAN_AVATAR_IMAGES
 } from "@/constants/avatars";
import { GenderType } from "@/types/patient";

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
    while(randIndexArray.length < size){
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
        // console.log(Object.entries(obj))
        return resultString
    }
}


export const displayObjectAsString = (obj:object)=>{
    if(obj!=undefined){

    }
}

export const generateNext4PairesIndices = (index: number) => {
    const excludedArray:Array<number> = []
    for(let i=0;i<=3;i++){
        const id = index + i
        if(id === QUESTIONS_WITH_ID.length-3){
            return [id-1, id, id+1, id+2]
        }
        else if(id === QUESTIONS_WITH_ID.length-2){
            return [id-2, id-1, id, id+1]
        }
        else if(id === QUESTIONS_WITH_ID.length-1){
            return [id-3, id-2, id-1, id]
        }
        else if(id < QUESTIONS_WITH_ID.length){
            excludedArray.push(id)
        }
    }
    // console.log(excludedArray)
    return excludedArray
}

export const getPatientAnameseResponse = (question:IQuestionsWithID, anameseCase:any) => {
    if(question.ancestor === ""){
        const parent_key_value = Object.entries(anameseCase).find(([key,value])=>{
            return key === question.parent
        })

        if(parent_key_value != undefined){
            const parent_value = parent_key_value[1] as any
            console.log(parent_value[question.key])
            return parent_value[question.key]
        }
    }
    else {
        const ancestor_key_value = Object.entries(anameseCase).find(([key,value])=>{
            return key === question.ancestor
        })

        if(ancestor_key_value != undefined){
            const ancestor_value = ancestor_key_value[1] as any

            const parent_key_value = Object.entries(ancestor_value).find(([key,value])=>{
                return key === question.parent
            })

            if(parent_key_value != undefined){
                const parent_value = parent_key_value[1] as any
                console.log(parent_value[question.key])
                return parent_value[question.key]
            }
        }
    }
}

export const getValueFromType = (value: any) => {
    const typeOfVal = typeof value
    switch (typeOfVal) {
        case "number":
            return value

        case "string":
            return value

        case "object":
            let str = ""
            if(Array.isArray(value) || (value instanceof Array)){
                value.forEach((value)=>{
                    str += `${getValueFromType(value)}, `
                })
            }
            else if(value instanceof Object){
                Object.entries(value).forEach(([key,value])=>{
                    const translatedKey = translateKey(key)
                    str+=`${translatedKey}: ${getValueFromType(value)}, `
                })
            }
            return str
        
        default:
            return value
    }
}


export const generateRandomImageFromGender = (gender:GenderType) => {
    let randIndex
    switch (gender) {
        case "F":
            randIndex = Math.floor(Math.random() * WOMAN_AVATAR_IMAGES.length);
            return WOMAN_AVATAR_IMAGES[randIndex]
        
        case "M":
            randIndex = Math.floor(Math.random() * MAN_AVATAR_IMAGES.length);
            return MAN_AVATAR_IMAGES[randIndex]
        default:
            break;
    }
}

export const refactorGender = (gender:GenderType) => {
    switch (gender) {
        case "F":
            return "Female"
        case "M":
            return "Male"
        default:
            return "Male"
    }
}
