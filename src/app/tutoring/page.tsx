"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import "@/app/globals.css"
import { 
    FeedbackCard,
    Header,
    CursorSVG,
    OptionList 
} from "@/components"
import { getRandomCaseFromSystem, patientInfoFromObj, getRandomOptions } from "@/utils/tools";
import { BioSystemTypes } from "@/types/biologic_systems";
import { IQuestionsWithID } from "@/types/questions";

export default function page(){
    const searchParams = useSearchParams()
    const SELECTED_SYSTEM:BioSystemTypes = searchParams.get('system') as BioSystemTypes
    const tutorQuestion = "Question 1 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, dolorum! Commodi necessitatibus perferendis quasi temporibus repudiandae officiis facere soluta dolor sunt asperiores, aliquid beatae, consequuntur quia natus, amet quas cum."
 
    const [currentCase, setCurrentCase] = useState<any>();
    const [patientProfile, setPatientProfile] = useState();
    const [displayQuestion, setDisplayQuestion] = useState<string>("");
    const [completedTyping, setCompletedTyping] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<string>();
    const [currentOptionList, setCurrentOptionList] = useState<Array<IQuestionsWithID>>();
    const [selectedOption, setSelectedOption] = useState<IQuestionsWithID>();

    useEffect(() => {
        if (!currentQuestion?.length) {
          return;
        }
    
        setCompletedTyping(false);
    
        let i = 0;
        const stringResponse = currentQuestion;
    
        const intervalId = setInterval(() => {
          setDisplayQuestion(stringResponse.slice(0, i));
    
          i++;
    
          if (i > stringResponse.length) {
            clearInterval(intervalId);
            setCompletedTyping(true);
          }
        }, 20);
    
        return () => clearInterval(intervalId);
    }, [currentQuestion]);

    useEffect(() => {
        const selectedCase:any = getRandomCaseFromSystem(SELECTED_SYSTEM)
        // console.log(selectedCase)
        if(selectedCase!=undefined){
            setCurrentCase(selectedCase)
            setPatientProfile(selectedCase.anamèse.patient)
            // console.log(selectedCase.anamèse.patient)
            const profileInfo = patientInfoFromObj(selectedCase.anamèse.patient)
            const tempQuestion = `${profileInfo}. En tant que médecin apprenant, veuillez choisir la question la plus appropriée pour débuter l'anamnèse et recueillir des informations essentielles pour établir un diagnostic préliminaire.`
            setCurrentQuestion(tempQuestion)
            const tempOptions = getRandomOptions(4,[0,1,2,3])
            setCurrentOptionList(tempOptions)
        }
    }, [SELECTED_SYSTEM]);

    
    return (
    <div className="w-screen h-screen flex flex-col">
        <Header/>
        <div className="w-full h-full p-2 flex flex-row">
            {/* <div className="w-[800px] h-full p-2 rounded-lg shadow-md drop-shadow-md bg-tertiary-lightYellow flex flex-col">
                Carte du Patient Virtuel 
                <span className="w-full text-center font-bold text-lg">Carte du Patient Virtuel</span>
            </div> */}

            <div className="w-full h-full p-2 rounded-lg flex flex-col">
                {/* Zone d'Interaction - Question et Choix */}
                <span className="w-full text-center font-bold drop-shadow-md text-google-blue text-3xl">{"Apprentissage lié au "}{SELECTED_SYSTEM}</span>
                {/* <span className="">{currentCase!=undefined && currentCase.disease}</span> */}
                {/* <span className="w-full text-center font-bold text-lg">Zone d'Interaction</span> */}
                <div className="w-full h-full px-3 mt-8 flex flex-col gap-2">
                    {currentQuestion!=undefined && <div className="rounded-lg p-2 bg-white border-2 border-google-blue shadow-md drop-shadow-md">
                        <span className="font-semibold">
                        {displayQuestion}
                        {!completedTyping && <CursorSVG />}
                        </span>
                    </div>}
                    
                    <OptionList
                        optionList={currentOptionList}
                        setSelectedOption={setSelectedOption}
                    />
                    
                </div>
                <div className="w-full px-5">
                    <button type="button" className="w-full py-3 rounded-xl bg-primary-blue font-bold text-white hover:scale-[105%] hover:shadow-md hover:drop-shadow-md">Valider</button>            
                </div>
            </div>

            {/* <div className="w-[800px] h-full bg-lightBlue p-2 rounded-lg shadow-md drop-shadow-md flex flex-col">
                Zone de Réponse et de Feedback
                <span className="w-full text-center font-bold text-lg ">Zone de Réponse et de Feedback</span>
                <div className="w-full h-full pr-2 rounded-scrollbar flex flex-col overflow-x-hidden overflow-y-auto">
                    
                    <div className="w-full flex flex-col gap-2">

                        <div className="w-full flex flex-col items-end">
                            <span className="text-right">Student Doctor</span>
                            <span className="rounded-l-xl rounded-tr-xl p-2 text-xs text-white bg-primary-blue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident possimus illo obcaecati facere odio molestiae?</span>
                        </div>
                        <div className="w-full flex flex-col items-start">
                            <span className="text-left">Virtual Patient</span>
                            <span className="rounded-r-xl rounded-tl-xl p-2 text-xs bg-white shadow-md drop-shadow-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident possimus illo obcaecati facere odio molestiae?</span>
                        </div>
                        <div className="w-full p-2 flex flex-row gap-1 items-center">
                            <span className="text-xs font-semibold">Tutor Feedback :</span>
                            <FeedbackCard type={"Bon Choix"}/>
                        </div>

                    </div>

                </div>
            </div> */}
        </div>
    </div>
  )
}