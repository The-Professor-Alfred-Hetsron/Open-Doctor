import { IPhysicalExam } from '@/types/patient'
import { translateKey } from '@/utils/tools'
import React, { ReactNode } from 'react'
import { GoDotFill } from "react-icons/go";

const PhysicalExamCard:React.FC<{examPhy:IPhysicalExam | undefined}> = ({examPhy}) => {
  
  const displayInfoByType = (key:any, value:any) =>{
    const typeOfVal = typeof value
    switch (typeOfVal) {
      case "number":
        return <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey(key)}: <span className="font-bold">{value}</span></span>

      case "string":
        return <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey(key)}: <span className="font-bold">{value}</span></span>
        
      case "object":
        if(value instanceof Object){
            return <div className="w-full py-2 pl-1 flex flex-col gap-2 border-t border-grayToneStroke">
                      <span className="w-full text-left font-semibold text-secondary-yellow">{translateKey(key)}</span>
                      {
                        Object.entries(value).map(([k,val])=>{
                          const translatedKey = translateKey(k)
                          return <span className="w-full pl-1 text-sm flex gap-1">{translatedKey}: <span className="font-bold">{val as ReactNode}</span></span>
                        })
                      }
                  </div>
        }
      
      default:
        return <span className="w-full">{translateKey(key)}: <span className="font-bold">{value}</span></span>
    }
  }
  
  return (
    <div className='w-full p-2 mb-3 flex flex-col items-center border border-grayToneStroke rounded-lg'>
        <span className="w-full text-left text-grayTone2 font-semibold">Examen Physique</span>
        {
          examPhy!=undefined && Object.entries(examPhy).map(([key,value])=>{
            return displayInfoByType(key, value)
          })
        }
    </div>
  )
}

export default PhysicalExamCard