"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import "@/app/globals.css"
import {
    Header,
    CursorSVG,
    OptionList, 
    ResponseCard,
    PatientProfileCard,
    PhysicalExamCard,
    LabTestCard,
    CustomInputField
} from "@/components"
import { 
    getRandomCaseFromSystem,
    patientInfoFromObj, 
    getRandomOptions,
    generateNext4PairesIndices,
    getStringValueFromType,
    getPatientAnameseResponse,
    generateRandomImageFromGender
} from "@/utils/tools";
import { BioSystemTypes } from "@/types/biologic_systems";
import { IQuestionsWithID, IStudentResponse } from "@/types/questions";
import { EMPTY_QUESTION_OBJECT, SPECIAL_TUTOR_QUESTIONS, SPECIAL_STUDENT_CHOICES } from "@/constants/questions";
import { CaseStepsType } from "@/constants/case";
import { GenderType, IPatient } from "@/types/patient";
import { QUESTIONS_WITH_ID } from "@/constants/questions";
import Link from "next/link";

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

    const [enablePhysicalTest, setEnablePhysicalTest] = useState<boolean>(false);
    const [enableLabTest, setEnableLabTest] = useState<boolean>(false);
    const [hypothesis, setHypothesis] = useState<string>("");

    const [score, setScore] = useState<Array<number>>([0,0]);

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
        const tempFeedbacks:Array<IStudentResponse> = [...feedbackHistory]
        let newFeedBack : IStudentResponse
        switch (currentStep) {
            case "anamèse":
                if(currentQuestionId+1 !== QUESTIONS_WITH_ID.length-1){
                    
                    if(selectedOption != EMPTY_QUESTION_OBJECT){
                        const anameseResponse = getPatientAnameseResponse(selectedOption, currentCase.anamèse)
                        if(selectedOption.id === currentQuestionId+1){
                            // On vérifie que l'option sélectionnée est la bonne
                            // console.log(anameseResponse)
                            newFeedBack = {
                                question : selectedOption,
                                value: getStringValueFromType(anameseResponse),
                                feedback: "Bon Choix"
                            }
                             
                            setScore(prev => [prev[0]+1, prev[1]])
                        }else{
                            // Sinon on lui donne aucune réponse
                            newFeedBack = {
                                question : selectedOption,
                                value: getStringValueFromType(anameseResponse),
                                feedback: "Mauvais Choix"
                            }
                            setScore(prev => [prev[0], prev[1]+1])

                        }
            
                        const question = `Vous avez comme réponse "${newFeedBack.value}" pour la question précédente de la part du patient virtuel, Que posez-vous ensuite?`
            
                        tempFeedbacks.push(newFeedBack)
                        setFeedbackHistory(tempFeedbacks)
                        generateNextQuestionSet(currentQuestionId+1, question)
                    }
                }else{
                    setSelectedOption(EMPTY_QUESTION_OBJECT)
                    setCurrentStep("physical_examination")
                }
                break;
                
            case "physical_examination":
                // Do Something
                if(selectedOption != EMPTY_QUESTION_OBJECT){
                    if(selectedOption.question === "Oui"){
                        setEnablePhysicalTest(true)
                        newFeedBack = {
                            question : {
                                id:0,
                                ancestor:"",
                                parent: "",
                                key:"physical_examination",
                                question:"Prise d'examen physique sur le patient virtuel",
                            },
                            value: "Veuillez Verifier la Carte du Patient Virtuel pour consulter les résultats",
                            feedback: "Bon Choix"
                        }
                        setScore(prev => [prev[0]+1, prev[1]])
                    }else{
                        setEnablePhysicalTest(false)
                        newFeedBack = {
                            question : {
                                id:0,
                                ancestor:"",
                                parent: "",
                                key:"physical_examination",
                                question:"Pas de Prise d'examen physique sur le patient virtuel",
                            },
                            value: "Vous n'avez pas procédé à un éxamen physique",
                            feedback: "Mauvais Choix"
                        }
                        setScore(prev => [prev[0], prev[1]+1])

                    }
                    tempFeedbacks.push(newFeedBack)
                    setFeedbackHistory(tempFeedbacks)
                }
                setSelectedOption(EMPTY_QUESTION_OBJECT)
                setCurrentStep("laboratory_tests")
                break;

            case "laboratory_tests":
                // Do Something
                if(selectedOption != EMPTY_QUESTION_OBJECT){
                    if(selectedOption.question === "Oui"){
                        setEnableLabTest(true)
                        newFeedBack = {
                            question : {
                                id:0,
                                ancestor:"",
                                parent: "",
                                key:"laboratory_tests",
                                question:"Prise de test laboratoire sur le patient virtuel",
                            },
                            value: "Veuillez Verifier la Carte du Patient Virtuel pour consulter les résultats",
                            feedback: "Bon Choix"
                        }
                        setScore(prev => [prev[0]+1, prev[1]])
                    }else{
                        setEnableLabTest(false)
                        newFeedBack = {
                            question : {
                                id:0,
                                ancestor:"",
                                parent: "",
                                key:"laboratory_tests",
                                question:"Pas de Prise de test laboratoire sur le patient virtuel",
                            },
                            value: "Vous n'avez pas procédé à un test laboratoire",
                            feedback: "Mauvais Choix"
                        } 
                        setScore(prev => [prev[0], prev[1]+1])
                    }
                    tempFeedbacks.push(newFeedBack)
                    setFeedbackHistory(tempFeedbacks)
                }
                setCurrentStep("hypothèse")
                break;

            case "hypothèse":
                // Do Something
                if(hypothesis!="" && hypothesis === currentCase.disease){
                    newFeedBack = {
                        question : {
                            id:0,
                            ancestor:"",
                            parent: "",
                            key:"laboratory_tests",
                            question:"D'après le diagnostic effectué, vous souffrez de "+hypothesis,
                        },
                        value:"Merci docteur pour ce diagnostic",
                        feedback: "Bon Choix"
                    }
                    setScore(prev => [prev[0]+1, prev[1]])
                }else{
                    newFeedBack = {
                        question : {
                            id:0,
                            ancestor:"",
                            parent: "",
                            key:"laboratory_tests",
                            question:"D'après le diagnostic effectué, vous souffrez de "+hypothesis,
                        },
                        value: "Docteur après avoir effectuer un précedent diagnostic, il se trouve que je souffre de "+currentCase.disease,
                        feedback: "Mauvais Choix"
                    }
                    setScore(prev => [prev[0], prev[1]+1])
                }
                tempFeedbacks.push(newFeedBack)
                setFeedbackHistory(tempFeedbacks)
                setCurrentStep("complete")
                break;
            default:
                break;
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
            const patientInfo:IPatient = {...selectedCase.anamèse.patient}
            const avatar = generateRandomImageFromGender(patientInfo.gender as GenderType)
            setPatientProfile({...patientInfo, avatar:avatar})
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
    
    useEffect(() => {
        const generateQuesForExamAndLabTest = (step:CaseStepsType) => {
            switch (step) {
                case "physical_examination":
                    setCurrentQuestion(SPECIAL_TUTOR_QUESTIONS[0].question)
                    setCurrentOptionList(SPECIAL_STUDENT_CHOICES)
                    break;
                
                case "laboratory_tests":
                    setCurrentQuestion(SPECIAL_TUTOR_QUESTIONS[1].question)
                    setCurrentOptionList(SPECIAL_STUDENT_CHOICES)
                    break;

                case "hypothèse":
                    setCurrentQuestion(SPECIAL_TUTOR_QUESTIONS[2].question)
                    break;
                default:
                    break;
            }
        }
        generateQuesForExamAndLabTest(currentStep)
    }, [currentStep]);

    
    return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto overflow-x-hidden">
        <Header/>
        <div className="w-full h-full p-2 flex flex-row">
            <div className="w-[900px] py-2 px-2 rounded-lg shadow-md drop-shadow-md bg-tertiary-lightYellow flex flex-col overflow-y-auto">
                <span className="w-full text-center font-bold text-lg">Carte du Patient Virtuel</span>
                <PatientProfileCard patient={patientProfile} />
                {
                    (enablePhysicalTest && currentCase!=undefined && currentCase.physical_examination!=undefined) &&
                    <PhysicalExamCard examPhy={currentCase.physical_examination}/>
                }
                {
                    (enableLabTest && currentCase!=undefined && currentCase.laboratory_tests!=undefined) &&
                    <LabTestCard labTest={currentCase.laboratory_tests}/>
                }
            </div>

            <div className="w-full h-full p-2 rounded-lg flex flex-col justify-between overflow-hidden">
                
                {currentStep !== "complete" &&
                    <div className="h-[50px] w-full flex justify-center">
                        <span className="w-full text-center font-bold drop-shadow-md text-google-blue text-3xl">{"Apprentissage lié au "}{SELECTED_SYSTEM}</span>
                    </div>
                }

                {(currentStep === "anamèse" || currentStep === "physical_examination" || currentStep === "laboratory_tests") &&
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
                            />
                        }
                        
                    </div>
                }
                
                { currentStep === "hypothèse" && 
                    <div className="w-full h-[calc(100%-250px)] py-5 px-3 mt-8 flex flex-col gap-2 justify-center items-center">
                        <CustomInputField
                            label=""
                            placeholder="Entrez votre hypothèse"
                            type="text"
                            defaultValue={hypothesis}
                            setInput={setHypothesis}
                            disabled={false}
                        />
                    </div>
                }

                { currentStep !== "complete" ?
                    <div className="w-full h-[200px] px-5">
                        <button
                            onClick={()=>{validateAnswer()}} 
                            type="button"
                            disabled={selectedOption===undefined}
                            className={`w-full py-3 rounded-xl font-bold text-white ${(selectedOption !== EMPTY_QUESTION_OBJECT)?"bg-primary-blue hover:scale-[105%] hover:shadow-md hover:drop-shadow-md":"bg-grayTone3"}`}
                        >
                            Valider
                        </button>            
                    </div>:

                    <div className="w-full h-full flex flex-col px-10 justify-center items-center gap-4">
                        <span className="w-full text-center font-bold drop-shadow-md text-google-blue text-3xl">{"Félicitations vous avez terminé le diagnostic"}</span>
                        <span className="font-bold text-xl text-google-green">Succès: {(score[0]/(score[0]+score[1])*100)}% </span>
                        <span className="font-bold text-xl text-google-red">Echec: {(score[1]/(score[0]+score[1])*100)}% </span>
                        <span className="text-2xl">Décision: {`${(score[0]/(score[0]+score[1])*100) > 90 ? "Vous avez réussi ce cas clinique": "Vous pouvez reéssayer le cas plus tard pour vous améliorer" }`}</span>

                        <Link
                            href="/"
                            className="w-full py-3 rounded-xl text-center font-bold text-white bg-primary-blue hover:scale-[105%] hover:shadow-md hover:drop-shadow-md"
                        >
                            Choissir un autre Cas
                        </Link>
                    </div>
                }
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