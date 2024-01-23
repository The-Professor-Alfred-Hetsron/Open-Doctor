import React from 'react'
import FeedbackCard from './FeedbackCard'
import { TutorFeedBack } from '@/types/biologic_systems'

interface PropsTypes {
    question: string,
    value:string,
    feedback: TutorFeedBack
}
const ResponseCard:React.FC<PropsTypes> = ({
    question, feedback, value
}) => {

  return (
    <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col items-end">
            <span className="text-right">Apprenant Médecin</span>
            <span className="rounded-l-xl rounded-tr-xl p-2 text-xs text-white bg-primary-blue">{question}</span>
        </div>
        <div className="w-full flex flex-col items-start">
            <span className="text-left">Patient Virtuel</span>
            <span className="rounded-r-xl rounded-tl-xl p-2 text-xs bg-white shadow-md drop-shadow-md">{value}</span>
        </div>
        <div className="w-full p-2 flex flex-row gap-1 items-center">
            <span className="text-xs font-semibold">Tutor Feedback :</span>
            <FeedbackCard type={feedback}/>
        </div>
    </div>
  )
}

export default ResponseCard