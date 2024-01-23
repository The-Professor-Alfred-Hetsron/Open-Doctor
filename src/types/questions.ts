import { TutorFeedBack } from "./biologic_systems"

export interface IQuestionsWithID{
    ancestor:string,
    parent: string,
    key: string,
    question: string,
    id: number,
    repoonse:{
        positive:string,
        negative: string
    }
}

export interface IStudentResponse{
    question: IQuestionsWithID,
    value: any,
    feedback: TutorFeedBack
}