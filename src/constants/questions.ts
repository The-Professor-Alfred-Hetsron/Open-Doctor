import { IQuestionsWithID } from "@/types/questions"

export const ANAMESE_QUESTIONS = [
    {
        ancestor:"",
        parent:"medical_history",
        key:"past_illnesses",
        question: "Pouvez-vous me donner des détails sur les maladies ou problèmes de santé que vous avez connus par le passé ?",
        repoonse:{
            positive:"J'ai eu des antécédents de",
            negative: "Je n'ai pas eu des antécédents maladies"
        }
    },
    {
        ancestor:"",
        parent: "medical_history",
        key:"surgeries",
        question: "Avez-vous subi des interventions chirurgicales par le passé ? Si oui, pourriez-vous me fournir des détails sur les interventions chirurgicales que vous avez subies ?",
        response:{
            positive:"Oui, j'ai subi une/un",
            negative:"Non, je n'ai pas subi d'interventions chirugicales"
        }
    },
    {
        ancestor:"medical_history",
        parent: "family_history",
        key:"parents",
        question: "Avez-vous des antécédents médicaux familiaux importants ? Si oui, pourriez-vous me donner des informations sur les problèmes de santé de vos parents ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"medical_history",
        parent: "family_history",
        key:"siblings",
        question: "Avez-vous des antécédents médicaux familiaux importants ? Si oui, pourriez-vous me donner des informations sur les problèmes de santé de vos frères et sœurs ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "symptoms",
        key:"main",
        question: "Quelle est la manifestation principale que vous éprouvez actuellement et le plus souvent ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "symptoms",
        key:"associated",
        question: "Y a-t-il d'autres manifestations que vous ressentez en plus de celui-ci ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "symptoms",
        key:"onset_date",
        question: "Quand avez-vous remarqué l'apparition de ces symptômes ou de ces manifestations ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "symptoms",
        key:"aggravating_factors",
        question: "Quels sont les éléments ou les situations qui semblent aggraver vos symptômes ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "symptoms",
        key:"concurrent_symptoms",
        question: "Avez-vous d'autres symptômes qui se manifestent en même temps que celui-ci ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "lifestyle",
        key:"diet",
        question: "Pourriez-vous me décrire votre régime alimentaire actuel ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "lifestyle",
        key:"physical_activity",
        question: "Exercez-vous des activités physiques? Si Oui, pour combien de temps l'exercez-vous et à quel fréquence ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "lifestyle",
        key:"tobacco_use",
        question: "Est-ce que vous fumez ou utilisez du tabac d'une autre manière ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "lifestyle",
        key:"alcohol_consumption",
        question: "Consommez-vous de l'alcool ? Si oui à quelle fréquence consommez-vous de l'alcool ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"lifestyle",
        parent: "sleep",
        key:"hours",
        question: "Combien d'heures de sommeil en moyenne obtenez-vous chaque jour ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"lifestyle",
        parent: "sleep",
        key:"habits",
        question: "Avez-vous des habitudes de sommeil régulières ou y a-t-il des variations dans vos routines de sommeil ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "medications_allergies",
        key:"current_medications",
        question: "Quels médicaments prenez-vous actuellement et à quelle fréquence les prenez-vous ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "medications_allergies",
        key:"allergies",
        question: "Avez-vous des allergies connues aux médicaments ? Si oui, pourriez-vous me dire quels médicaments vous êtes allergique à ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "events_changes",
        key:"stressful_events",
        question: "Avez-vous récemment vécu des événements stressants ou des changements importants dans votre vie ? Si oui, pourriez-vous me les décrire ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "events_changes",
        key:"change_in_lifestyle",
        question: "Avez-vous récemment connu des changements importants dans votre mode de vie ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "gynecological",
        key:"last_menstrual_period",
        question: "Quand avez-vous eu vos dernières règles ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "gynecological",
        key:"previous_pregnancies",
        question: "Combien de grossesses avez-vous déjà eu auparavant ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "gynecological",
        key:"contraceptives",
        question: "Utilisez-vous une méthode contraceptive actuellement ? Si oui, pourriez-vous me dire quelle méthode contraceptive vous utilisez ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "social",
        key:"marital_status",
        question: "Quel est votre statut matrimonial actuel ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "social",
        key:"social_environment",
        question: "Comment décririez-vous votre environnement social actuel ? Est-il étroitement lié ou proche ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "social",
        key:"education_level",
        question: "Quel est votre niveau d'éducation actuel ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "social",
        key:"occupation",
        question: "Quelle est votre profession ou votre métier actuel ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    },
    {
        ancestor:"",
        parent: "social",
        key:"work_conditions",
        question: "Dans quelles conditions travaillez-vous actuellement avec des horaires réguliers  ?",
        repoonse:{
            positive:"",
            negative: ""
        }
    }
]

export const QUESTIONS_WITH_ID = ANAMESE_QUESTIONS.map((question, index)=>{
    return {id:index, ...question}
})

export const EMPTY_QUESTION_OBJECT:IQuestionsWithID = {
    id:0,
    ancestor:"",
    parent: "",
    key:"",
    question:"",
    repoonse:{
        positive:"",
        negative: ""
    }
}


export const SPECIAL_TUTOR_QUESTIONS:Array<IQuestionsWithID> = [
    {
        id:0,
        ancestor:"",
        parent: "",
        key:"physical_examination",
        question:"Souhaiteriez-vous effectuer un examen physique sur le patient virtuel pour recueillir des informations supplémentaires sur son état de santé ?",
    },
    {
        id:1,
        ancestor:"",
        parent: "",
        key:"laboratory_tests",
        question:"Seriez-vous intéressé par la réalisation de tests de laboratoire sur le patient virtuel pour obtenir des données supplémentaires sur sa condition médicale ?",
    },
    {
        id:2,
        ancestor:"",
        parent: "",
        key:"hyposthèse",
        question:"Après avoir examiné les informations sur le patient virtuel, pouvez-vous formuler une hypothèse concernant sa maladie probable ?",
    }
]


export const SPECIAL_STUDENT_CHOICES:Array<IQuestionsWithID> = [
    {
        id:0,
        ancestor:"",
        parent: "",
        key:"boolean",
        question:"Oui",
    },
    {
        id:1,
        ancestor:"",
        parent: "",
        key:"boolean",
        question:"Non",
    }
]