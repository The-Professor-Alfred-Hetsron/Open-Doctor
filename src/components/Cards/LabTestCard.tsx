import React, { ReactNode } from 'react'
import { ILabTest } from '@/types/patient'
import { getStringValueFromType, translateKey } from '@/utils/tools'
import { GoDotFill } from "react-icons/go";

const LabTestCard:React.FC<{labTest:ILabTest}> = ({labTest}) => {
  
  const renderUrinalysisInfo = (urinalysis : any) =>{
    return <div className="w-full py-2 flex flex-col gap-2 border-t border-grayToneStroke">
                <span className="w-full text-left font-semibold text-google-yellow">{translateKey("urinalysis")}</span>
                {
                    Object.entries(urinalysis).map(([k,val])=>{
                        return <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey(k)}: <span className="font-bold">{val as ReactNode}</span></span>
                    })
                }
            </div>
    
  }

  const renderOtherTestInfo = (other_tests : Array<any>) =>{
    return <div className="w-full py-2 flex flex-col gap-2 border-t border-grayToneStroke">
                <span className="w-full text-left font-semibold text-google-yellow">{translateKey("other_tests")}</span>
                {
                    other_tests.map((test)=>{
                        return <div className="w-full py-2 px-1 rounded-lg flex flex-col gap-2 border border-google-blue">
                                    <span className="w-full text-left font-semibold text-google-blue">{test.test_name}</span>
                                    <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("result")}: <span className="font-bold">{
                                        getStringValueFromType(test.result)
                                    }</span></span>
                                </div>
                    }) 
                }
            </div>
    
  }
  
    return (
    <div className='w-full p-2 flex flex-col items-center border border-grayToneStroke rounded-lg'>
        <span className="w-full text-left text-grayTone2 font-semibold">Test Laboratoire</span>

        <div className="w-full py-2 flex flex-col gap-2 border-t border-grayToneStroke">
            <span className="w-full text-left font-semibold text-google-red">{translateKey("blood_tests")}</span>

            <div className="w-full py-2 px-1 rounded-lg flex flex-col gap-2 border border-secondary-yellow">
                <span className="w-full text-left font-semibold text-secondary-yellow">{translateKey("complete_blood_count")}</span>
                <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("white_blood_cells")}: <span className="font-bold">{labTest.blood_tests.complete_blood_count.white_blood_cells}</span></span>
                <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("red_blood_cells")}: <span className="font-bold">{labTest.blood_tests.complete_blood_count.red_blood_cells}</span></span>
                <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("hemoglobin")}: <span className="font-bold">{labTest.blood_tests.complete_blood_count.hemoglobin}</span></span>
                <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("platelets")}: <span className="font-bold">{labTest.blood_tests.complete_blood_count.platelets}</span></span>
            </div>

            <div className="w-full py-2 px-1 rounded-lg flex flex-col gap-2 border border-secondary-yellow">
                <span className="w-full text-left font-semibold text-secondary-yellow">{translateKey("blood_chemistry")}</span>
                <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("glucose")}: <span className="font-bold">{labTest.blood_tests.blood_chemistry.glucose}</span></span>
                <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("creatinine")}: <span className="font-bold">{labTest.blood_tests.blood_chemistry.creatinine}</span></span>
                
                <div className="w-full py-2 px-1 rounded-lg pl-1 flex flex-col gap-2 border border-google-green">
                    <span className="w-full text-left font-semibold text-google-green">{translateKey("liver_function_tests")}</span>
                    <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("alanine_transaminase (ALT)")}: <span className="font-bold">{labTest.blood_tests.blood_chemistry.liver_function_tests['alanine_transaminase (ALT)']}</span></span>
                    <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("aspartate_transaminase (AST)")}: <span className="font-bold">{labTest.blood_tests.blood_chemistry.liver_function_tests['aspartate_transaminase (AST)']}</span></span>
                    <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("alkaline_phosphatase")}: <span className="font-bold">{labTest.blood_tests.blood_chemistry.liver_function_tests.alkaline_phosphatase}</span></span>
                </div>
                
                <div className="w-full py-2 px-1 rounded-lg flex flex-col gap-2 border border-google-green">
                    <span className="w-full text-left font-semibold text-google-green">{translateKey("electrolytes")}</span>
                    <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("sodium")}: <span className="font-bold">{labTest.blood_tests.blood_chemistry.electrolytes.sodium}</span></span>
                    <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("potassium")}: <span className="font-bold">{labTest.blood_tests.blood_chemistry.electrolytes.potassium}</span></span>
                    <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("chloride")}: <span className="font-bold">{labTest.blood_tests.blood_chemistry.electrolytes.chloride}</span></span>
                </div>
            </div>
        </div>

        {renderUrinalysisInfo(labTest.urinalysis)}


        <div className="w-full py-2 flex flex-col gap-2 border-t border-grayToneStroke">
            <span className="w-full text-left font-semibold text-secondary-yellow">{translateKey("imaging_studies")}</span>
            <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("chest_x_ray")}: <span className="font-bold">{labTest.imaging_studies.chest_x_ray}</span></span>
            <span className="w-full pl-1 text-sm flex gap-1"><GoDotFill size={20}/>{translateKey("abdominal_ultrasound")}: <span className="font-bold">{labTest.imaging_studies.abdominal_ultrasound}</span></span>
        </div>

        {renderOtherTestInfo(labTest.other_tests)}

    </div>
  )
}

export default LabTestCard