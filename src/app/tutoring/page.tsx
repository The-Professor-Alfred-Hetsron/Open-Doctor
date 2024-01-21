"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import "@/app/globals.css"
import { FeedbackCard, Header, CursorSVG } from "@/components"
import { getRandomCaseFromSystem } from "@/utils/tools";
import { BioSystemTypes } from "@/types/biologic_systems";
import { BIOLOGICAL_SYSTEMS } from "@/constants/biologic_systems";

export default function page(){
    const searchParams = useSearchParams()
    const SELECTED_SYSTEM:BioSystemTypes = searchParams.get('system') as BioSystemTypes
    const tutorQuestion = "Question 1 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, dolorum! Commodi necessitatibus perferendis quasi temporibus repudiandae officiis facere soluta dolor sunt asperiores, aliquid beatae, consequuntur quia natus, amet quas cum."

    const [currentCase, setCurrentCase] = useState<any>();
    const [currentQuestion, setCurrentQuestion] = useState<string>(tutorQuestion);
    const [displayQuestion, setDisplayQuestion] = useState<string>("");
    const [completedTyping, setCompletedTyping] = useState<boolean>(false);

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
        setCurrentCase(selectedCase)
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
                <span className="w-full text-center font-bold text-lg">Zone d'Interaction</span>
                <div className="w-full h-full px-3 mt-8 flex flex-col gap-2">
                    <div className="rounded-lg p-2 bg-white border-2 border-google-blue shadow-md drop-shadow-md">
                        <span className="font-semibold">
                        {displayQuestion}
                        {!completedTyping && <CursorSVG />}
                        </span>
                    </div>
                    
                    <div className="w-full h-full flex flex-col gap-3 justify-center">
                        <div className="w-full flex flex-row gap-2">
                            <input type="checkbox" name="choice1" id="choice1" className="w-[50px] aspect-square"/>
                            <span className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis odio nulla incidunt quaerat, reprehenderit culpa molestias repudiandae iure error minima nisi quis rerum rem quas, ab enim aut cum.</span>
                        </div>
                        <div className="w-full flex flex-row gap-2">
                            <input type="checkbox" name="choice2" id="choice2" className="w-[50px] aspect-square"/>
                            <span className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis odio nulla incidunt quaerat, reprehenderit culpa molestias repudiandae iure error minima nisi quis rerum rem quas, ab enim aut cum.</span>
                        </div>
                        <div className="w-full flex flex-row gap-2">
                            <input type="checkbox" name="choice3" id="choice3" className="w-[50px] aspect-square"/>
                            <span className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis odio nulla incidunt quaerat, reprehenderit culpa molestias repudiandae iure error minima nisi quis rerum rem quas, ab enim aut cum.</span>
                        </div>
                        <div className="w-full flex flex-row gap-2">
                            <input type="checkbox" name="choice4" id="choice4" className="w-[50px] aspect-square"/>
                            <span className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur corporis odio nulla incidunt quaerat, reprehenderit culpa molestias repudiandae iure error minima nisi quis rerum rem quas, ab enim aut cum.</span>
                        </div>
                    </div>
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