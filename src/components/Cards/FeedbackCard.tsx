import { TutorFeedBack } from '@/types/biologic_systems'
import React from 'react'

interface PropsTypes{
    type: TutorFeedBack
}
const FeedbackCard:React.FC<PropsTypes> = ({type}) => {
  return (
    <>
        {
            type === "Bon Choix" &&
            <span className='rounded-xl p-2 text-xs text-white bg-google-green'>
                {type}, Vous êtes dans la bonne voie 😃
            </span>
        }
        {
            type === "Mauvais Choix" &&
            <span className='rounded-xl p-2 text-xs text-white bg-red-400'>
                {type}, Vous pouvez faire mieux 😕
            </span>
        }
    </>
  )
}

export default FeedbackCard