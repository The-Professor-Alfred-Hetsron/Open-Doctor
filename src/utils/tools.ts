import { QUESTIONS_WITH_ID } from "@/constants/questions"
import { IQuestionsWithID } from "@/types/questions"


export const getRandomCaseFromSystem = (system:string) => {
    
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