import { IPhysicalExam } from '@/types/patient'
import { translateKey } from '@/utils/tools'
import React, { ReactNode } from 'react'


const PhysicalExamCard:React.FC<{examPhy:IPhysicalExam | undefined}> = ({examPhy}) => {
  
  const displayInfoByType = (key:any, value:any) =>{
    const typeOfVal = typeof value
    switch (typeOfVal) {
      case "number":
        return <span className="w-full">{translateKey(key)}: <span className="font-bold">{value}</span></span>

      case "string":
        return <span className="w-full">{translateKey(key)}: <span className="font-bold">{value}</span></span>
        
      case "object":
        if(value instanceof Object){
            return <div className="w-full py-2 flex flex-col gap-2 border-y border-grayToneStroke">
                      <span className="w-full text-left font-semibold text-secondary-yellow">{translateKey(key)}</span>
                      {
                        Object.entries(value).map(([k,val])=>{
                          const translatedKey = translateKey(k)
                          return <span className="w-full">{translatedKey}: <span className="font-bold">{val as ReactNode}</span></span>
                        })
                      }
                  </div>
        }
      
      default:
        return <span className="w-full">{translateKey(key)}: <span className="font-bold">{value}</span></span>
    }
  }
  
  return (
    <div className='w-full p-2 flex flex-col items-center border border-grayToneStroke rounded-lg'>
        <span className="w-full text-left text-grayTone2 font-semibold">Examen Physique</span>
        {
          examPhy!=undefined && Object.entries(examPhy).map(([key,value], index:number)=>{
            return displayInfoByType(key, value)
          })
        }
    </div>
  )
}

export default PhysicalExamCard