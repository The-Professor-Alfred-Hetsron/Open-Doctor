export const QUESTIONS = [
    {
        parent:"medical_history",
        key:"past_illnesses",
        question: "Pouvez-vous me donner des détails sur les maladies ou problèmes de santé que vous avez connus par le passé ?",
    },
    {
        parent: "medical_history",
        key:"surgeries",
        question: "Avez-vous subi des interventions chirurgicales par le passé ? Si oui, pourriez-vous me fournir des détails sur les interventions chirurgicales que vous avez subies ?",
    },
    {
        parent: "family_history",
        key:"parents",
        question: "Avez-vous des antécédents médicaux familiaux importants ? Si oui, pourriez-vous me donner des informations sur les problèmes de santé de vos parents ?",
    },
    {
        parent: "siblings",
        key:"siblings",
        question: "Avez-vous des antécédents médicaux familiaux importants ? Si oui, pourriez-vous me donner des informations sur les problèmes de santé de vos frères et sœurs ?",
    },
    {
        parent: "symptoms",
        key:"main",
        question: "Quelle est la manifestation principale que vous éprouvez actuellement et le plus souvent ?",
    },
    {
        parent: "symptoms",
        key:"associated",
        question: "Y a-t-il d'autres manifestations que vous ressentez en plus de celui-ci ?",
    },
    {
        parent: "symptoms",
        key:"onset_date",
        question: "Quand avez-vous remarqué l'apparition de ces symptômes ou de ces manifestations ?",
    },
    {
        parent: "symptoms",
        key:"aggravating_factors",
        question: "Quels sont les éléments ou les situations qui semblent aggraver vos symptômes ?",
    },
    {
        parent: "symptoms",
        key:"concurrent_symptoms",
        question: "Avez-vous d'autres symptômes qui se manifestent en même temps que celui-ci ?",
    },
    {
        parent: "lifestyle",
        key:"diet",
        question: "Pourriez-vous me décrire votre régime alimentaire actuel ?",
    },
    {
        parent: "lifestyle",
        key:"physical_activity",
        question: "Exercez-vous des activités physiques? Si Oui, pour combien de temps l'exercez-vous et à quel fréquence ?",
    },
    {
        parent: "lifestyle",
        key:"tobacco_use",
        question: "Est-ce que vous fumez ou utilisez du tabac d'une autre manière ?",
    },
    {
        parent: "lifestyle",
        key:"alcohol_consumption",
        question: "Consommez-vous de l'alcool ? Si oui à quelle fréquence consommez-vous de l'alcool ?",
    },
    {
        parent: "sleep",
        key:"hours",
        question: "Combien d'heures de sommeil en moyenne obtenez-vous chaque jour ?",
    },
    {
        parent: "sleep",
        key:"habits",
        question: "Avez-vous des habitudes de sommeil régulières ou y a-t-il des variations dans vos routines de sommeil ?",
    },
    {
        parent: "medications_allergies",
        key:"current_medications",
        question: "Quels médicaments prenez-vous actuellement et à quelle fréquence les prenez-vous ?",
    },
    {
        parent: "medications_allergies",
        key:"allergies",
        question: "Avez-vous des allergies connues aux médicaments ? Si oui, pourriez-vous me dire quels médicaments vous êtes allergique à ?",
    },
    {
        parent: "events_changes",
        key:"stressful_events",
        question: "Avez-vous récemment vécu des événements stressants ou des changements importants dans votre vie ? Si oui, pourriez-vous me les décrire ?",
    },
    {
        parent: "events_changes",
        key:"change_in_lifestyle",
        question: "Avez-vous récemment connu des changements importants dans votre mode de vie ?",
    },
    {
        parent: "gynecological",
        key:"last_menstrual_period",
        question: "Quand avez-vous eu vos dernières règles ?",
    },
    {
        parent: "gynecological",
        key:"previous_pregnancies",
        question: "Combien de grossesses avez-vous déjà eu auparavant ?",
    },
    {
        parent: "gynecological",
        key:"contraceptives",
        question: "Utilisez-vous une méthode contraceptive actuellement ? Si oui, pourriez-vous me dire quelle méthode contraceptive vous utilisez ?",
    },
    {
        parent: "social",
        key:"marital_status",
        question: "Quel est votre statut matrimonial actuel ?Quel est votre statut matrimonial actuel ?",
    },
    {
        parent: "social",
        key:"social_environment",
        question: "Comment décririez-vous votre environnement social actuel ? Est-il étroitement lié ou proche ?",
    },
    {
        parent: "social",
        key:"education_level",
        question: "Quel est votre niveau d'éducation actuel ?",
    },
    {
        parent: "social",
        key:"occupation",
        question: "Quelle est votre profession ou votre métier actuel ?",
    },
    {
        parent: "social",
        key:"work_conditions",
        question: "Dans quelles conditions travaillez-vous actuellement avec des horaires réguliers  ?",
    }
]

export const QUESTIONS_WITH_ID = QUESTIONS.map((question, index)=>{
    return {id:index, ...question}
})