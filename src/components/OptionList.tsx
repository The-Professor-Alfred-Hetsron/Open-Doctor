"use client"
import { EMPTY_QUESTION_OBJECT } from '@/constants/questions'
import { IQuestionsWithID } from '@/types/questions'
import React, { useState } from 'react'

interface PropsTypes{
    optionList:Array<IQuestionsWithID> | undefined
    setSelectedOption: (option: IQuestionsWithID) => void
}

const OptionList:React.FC<PropsTypes> = ({
    optionList, setSelectedOption
}) => {
    // console.log(optionList)

    const [value, setValue] = useState<number>(-1);

    const handleOnOptionSelect = (val:number) => {
        // console.log(value)
        // console.log(val)
        if(val===value){
            setSelectedOption(EMPTY_QUESTION_OBJECT)
            setValue(-1)
        }else{
            optionList && setSelectedOption(optionList[val])
            setValue(val)
        }
    }

  return (
    <div className="w-full h-full py-4 flex flex-col gap-3 justify-center items-center">
        {
            optionList!=undefined && optionList.map((option:IQuestionsWithID, index:number)=>{
                return <div key={index} className="w-full flex flex-row gap-2 items-center">
                            <input
                                type="checkbox"
                                value={index}
                                name={option.key}
                                id={option.key}
                                checked={value === index}
                                onChange={()=>{handleOnOptionSelect(index)}}
                                className="w-[40px] aspect-square"
                            />
                            <span className="text-sm">{option.question}</span>
                        </div>
            })
        }
    </div>
  )
}

export default OptionList