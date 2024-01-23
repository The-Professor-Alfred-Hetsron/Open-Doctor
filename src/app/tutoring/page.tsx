"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import "@/app/globals.css"
import { 
    FeedbackCard,
    Header,
    CursorSVG,
    OptionList, 
    ResponseCard,
    PatientProfileCard,
    PhysicalExamCard
} from "@/components"
import { 
    getRandomCaseFromSystem,
    patientInfoFromObj, 
    getRandomOptions,
    generateNext4PairesIndices,
    getValueFromType,
    getPatientAnameseResponse
} from "@/utils/tools";
import { BioSystemTypes } from "@/types/biologic_systems";
import { IQuestionsWithID, IStudentResponse } from "@/types/questions";
import { EMPTY_QUESTION_OBJECT } from "@/constants/questions";
import { CaseStepsType } from "@/constants/case";
import { IPatient } from "@/types/patient";

export default function page(){
    const searchParams = useSearchParams()
    const SELECTED_SYSTEM:BioSystemTypes = searchParams.get('system') as BioSystemTypes
    //const tutorQuestion = "Question 1 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, dolorum! Commodi necessitatibus perferendis quasi temporibus repudiandae officiis facere soluta dolor sunt asperiores, aliquid beatae, consequuntur quia natus, amet quas cum."

    const [currentCase, setCurrentCase] = useState<any>();
    const [patientProfile, setPatientProfile] = useState<IPatient>();
    const [currentStep, setCurrentStep] = useState<CaseStepsType>("anamèse");
    
    const [displayQuestion, setDisplayQuestion] = useState<string>("");
    const [completedTyping, setCompletedTyping] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<string>();
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(-1);
    
    const [currentOptionList, setCurrentOptionList] = useState<Array<IQuestionsWithID>>();
    const [selectedOption, setSelectedOption] = useState<IQuestionsWithID>(EMPTY_QUESTION_OBJECT);
    const [disableOption, setDisableOption] = useState<boolean>(false);

    const [feedbackHistory, setFeedbackHistory] = useState<Array<IStudentResponse>>([]);


    const generateNextQuestionSet = (index:number, question:string) => {
        setCurrentQuestion(question)
        const excludedArray: Array<number> = generateNext4PairesIndices(index+1)
        const tempOptions = getRandomOptions(4, excludedArray)
        // console.log(tempOptions)
        setCurrentOptionList(tempOptions)
        setSelectedOption(EMPTY_QUESTION_OBJECT)
        setCurrentQuestionId(index)
    }

    const validateAnswer = () => {
        setDisableOption(true)
        const tempFeedbacks:Array<IStudentResponse> = [...feedbackHistory]
        
        if(selectedOption != EMPTY_QUESTION_OBJECT){
            let newFeedBack : IStudentResponse
            if(selectedOption.id === currentQuestionId+1){
                // On vérifie que l'option sélectionnée est la bonne
                const anameseResponse = getPatientAnameseResponse(selectedOption, currentCase.anamèse)
                console.log(anameseResponse)
                newFeedBack = {
                    question : selectedOption,
                    value: getValueFromType(anameseResponse),
                    feedback: "Bon Choix"
                } 
            }else{
                // Sinon on lui donne aucune réponse
                newFeedBack = {
                    question : selectedOption,
                    value: "Aucune réponse",
                    feedback: "Mauvais Choix"
                } 
            }

            const question = `Vous avez comme réponse "${newFeedBack.value}" pour la question précédente de la part du patient virtuel, Que posez-vous ensuite?`

            tempFeedbacks.push(newFeedBack)
            setFeedbackHistory(tempFeedbacks)
            generateNextQuestionSet(currentQuestionId+1, question)
        }
    }

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
            setCurrentStep("anamèse")
            // console.log(selectedCase.anamèse.patient)
            const profileInfo = patientInfoFromObj(selectedCase.anamèse.patient)
            const tempQuestion = `${profileInfo}. En tant que médecin apprenant, veuillez choisir la question la plus appropriée pour débuter l'anamnèse et recueillir des informations essentielles pour établir un diagnostic préliminaire.`
            setCurrentQuestion(tempQuestion)
            const excludedArray: Array<number> = generateNext4PairesIndices(0)
            const tempOptions = getRandomOptions(4, excludedArray)
            // console.log(tempOptions)
            tempOptions.length>0 && setCurrentOptionList(tempOptions)
        }
    }, [SELECTED_SYSTEM]);

    
    return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto overflow-x-hidden">
        <Header/>
        <div className="w-full h-full p-2 flex flex-row">
            <div className="w-[800px] py-2 px-5 rounded-lg shadow-md drop-shadow-md bg-tertiary-lightYellow flex flex-col overflow-y-auto">
                <span className="w-full text-center font-bold text-lg">Carte du Patient Virtuel</span>
                <PatientProfileCard patient={patientProfile} />
                {
                    (currentCase!=undefined && currentCase.physical_examination!=undefined) &&
                    <PhysicalExamCard examPhy={currentCase.physical_examination}/>
                }
            </div>

            <div className="w-full h-full p-2 rounded-lg flex flex-col justify-between overflow-hidden">
                {/* Zone d'Interaction - Question et Choix */}
                <div className="h-[50px] w-full flex justify-center">
                    <span className="w-full text-center font-bold drop-shadow-md text-google-blue text-3xl">{"Apprentissage lié au "}{SELECTED_SYSTEM}</span>
                </div>
                {/* <span className="">{currentCase!=undefined && currentCase.disease}</span> */}
                {/* <span className="w-full text-center font-bold text-lg">Zone d'Interaction</span> */}
                <div className="w-full h-[calc(100%-250px)] py-5 px-3 mt-8 flex flex-col gap-2">
                    {currentQuestion!=undefined && <div className="rounded-lg p-2 bg-white border-2 border-google-blue shadow-md drop-shadow-md">
                        <span className="font-semibold">
                        {displayQuestion}
                        {!completedTyping && <CursorSVG />}
                        </span>
                    </div>}
                    
                    {(currentOptionList!=undefined && currentOptionList?.length>0)  && 
                        <OptionList
                            optionList={currentOptionList}
                            setSelectedOption={setSelectedOption}
                            disabled={disableOption}
                        />
                    }
                    
                </div>

                <div className="w-full h-[200px] px-5">
                    <button
                        onClick={()=>{validateAnswer()}} 
                        type="button"
                        disabled={selectedOption===undefined}
                        className={`w-full py-3 rounded-xl font-bold text-white ${(selectedOption !== EMPTY_QUESTION_OBJECT)?"bg-primary-blue hover:scale-[105%] hover:shadow-md hover:drop-shadow-md":"bg-grayTone3"}`}
                    >
                        Valider
                    </button>            
                </div>
            </div>

            <div className="w-[800px] h-full bg-lightBlue px-5 pt-2 pb-4 rounded-lg shadow-md drop-shadow-md flex flex-col">
                <span className="w-full text-center font-bold text-lg ">Zone de Réponse et de Feedback</span>
                <div className="w-full pt-2 pb-5 pr-2 rounded-scrollbar flex flex-col overflow-y-auto overflow-x-hidden">
                    
                    {feedbackHistory.map((feedback:IStudentResponse, index:number)=>{
                        return <ResponseCard
                                    key={index}
                                    question={feedback.question.question}
                                    value={feedback.value}
                                    feedback={feedback.feedback}
                                />
                    })}

                </div>
            </div>
        </div>
    </div>
  )
}