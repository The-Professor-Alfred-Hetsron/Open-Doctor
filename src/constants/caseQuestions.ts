export const CASE_QUESTIONS = {
  disease: "Maladie",
  biologic_system: "Système Biologique",
  anamèse: {
    patient: {
      last_name: "Prenom",
      first_name: "Nom",
      date_of_birth: "Date de Naissance",
      gender: "Sexe",
      address: "Adresse",
      phone: "Numéro de téléphone",
      occupation: "Profession",
    },
    medical_history: {
      past_illnesses:
        "Pouvez-vous me donner des détails sur les maladies ou problèmes de santé que vous avez connus par le passé ?",
      surgeries:
        "Avez-vous subi des interventions chirurgicales par le passé ? Si oui, pourriez-vous me fournir des détails sur les interventions chirurgicales que vous avez subies ?",
      family_history: {
        parents:
          "Avez-vous des antécédents médicaux familiaux importants ? Si oui, pourriez-vous me donner des informations sur les problèmes de santé de vos parents ?",
        siblings:
          "Avez-vous des antécédents médicaux familiaux importants ? Si oui, pourriez-vous me donner des informations sur les problèmes de santé de vos frères et sœurs ?",
      },
    },
    symptoms: {
      main: "Quelle est la manifestation principale que vous éprouvez actuellement et le plus souvent ?",
      associated:
        "Y a-t-il d'autres manifestations que vous ressentez en plus de celui-ci ?",
      onset_date:
        "Quand avez-vous remarqué l'apparition de ces symptômes ou de ces manifestations ?",
      aggravating_factors:
        "Quels sont les éléments ou les situations qui semblent aggraver vos symptômes ?",
      concurrent_symptoms:
        "Avez-vous d'autres symptômes qui se manifestent en même temps que celui-ci ?",
    },
    lifestyle: {
      diet: "Pourriez-vous me décrire votre régime alimentaire actuel ?",
      physical_activity:
        "Exercez-vous des activités physiques? Si Oui, pour combien de temps l'exercez-vous et à quel fréquence ?",
      tobacco_use:
        "Est-ce que vous fumez ou utilisez du tabac d'une autre manière ?",
      alcohol_consumption:
        "Consommez-vous de l'alcool ? Si oui à quelle fréquence consommez-vous de l'alcool ?",
      sleep: {
        hours:
          "Combien d'heures de sommeil en moyenne obtenez-vous chaque jour ?",
        habits:
          "Avez-vous des habitudes de sommeil régulières ou y a-t-il des variations dans vos routines de sommeil ?",
      },
    },
    medications_allergies: {
      current_medications:
        "Quels médicaments prenez-vous actuellement et à quelle fréquence les prenez-vous ?",
      allergies:
        "Avez-vous des allergies connues aux médicaments ? Si oui, pourriez-vous me dire quels médicaments vous êtes allergique à ?",
    },
    events_changes: {
      stressful_events:
        "Avez-vous récemment vécu des événements stressants ou des changements importants dans votre vie ? Si oui, pourriez-vous me les décrire ?",
      change_in_lifestyle:
        "Avez-vous récemment connu des changements importants dans votre mode de vie ?",
    },
    gynecological: {
      last_menstrual_period: "Quand avez-vous eu vos dernières règles ?",
      previous_pregnancies:
        "Combien de grossesses avez-vous déjà eu auparavant ?",
      contraceptives:
        "Utilisez-vous une méthode contraceptive actuellement ? Si oui, pourriez-vous me dire quelle méthode contraceptive vous utilisez ?",
    },
    social: {
      marital_status:
        "Quel est votre statut matrimonial actuel ?Quel est votre statut matrimonial actuel ?",
      social_environment:
        "Comment décririez-vous votre environnement social actuel ? Est-il étroitement lié ou proche ?",
      education_level: "Quel est votre niveau d'éducation actuel ?",
      occupation: "Quelle est votre profession ou votre métier actuel ?",
      work_conditions:
        "Dans quelles conditions travaillez-vous actuellement avec des horaires réguliers  ?",
    },
  },
  physical_examination: {
    vital_signs: {
      heart_rate: "Fréquence cardiaque",
      blood_pressure: "Pression artérielle",
      respiratory_rate: "Fréquence respiratoire",
      temperature: "Température",
    },
    general_appearance: "Apparence Générale",
    skin: "Peau",
    head: {
      eyes: "Yeux",
      ears: "Oreilles",
      nose: "Nez",
      mouth_throat: "Bouche et Gorge",
    },
    neck: "Cou",
    chest: {
      inspection: "Inspection",
      palpation: "Palpation",
      auscultation: "Auscultation",
    },
    abdomen: {
      inspection: "Inspection",
      palpation: "Palpation",
      percussion: "Percussion",
      auscultation: "Auscultation",
    },
    extremities: {
      upper: "Supérieur",
      lower: "Inférieur",
    },
    neurological: "Système Neurologique",
  },
  laboratory_tests: {
    blood_tests: {
      complete_blood_count: {
        white_blood_cells: "Globules Blancs",
        red_blood_cells: "Globules Rouges",
        hemoglobin: "Hémoglobine",
        platelets: "Plaquettes",
      },
      blood_chemistry: {
        glucose: "Glucose",
        creatinine: "Créatinine",
        liver_function_tests: {
          "alanine_transaminase (ALT)": "Alanine aminotransférase (ALAT)",
          "aspartate_transaminase (AST)": "Aspartate aminotransférase (ASAT)",
          alkaline_phosphatase: "Phosphatase alcaline",
        },
        electrolytes: {
          sodium: "Sodium",
          potassium: "Potassium",
          chloride: "Chlorure",
        },
      },
    },
    urinalysis: {
      color: "Couleur",
      appearance: "Apparence",
      protein: "Protéine",
      glucose: "Glucose",
      ketones: "Cétones",
      bilirubin: "Bilirubine",
      pH: "pH",
      specific_gravity: "Gravité spécifique",
    },
    imaging_studies: {
      chest_x_ray: "Radiographie thoracique",
      abdominal_ultrasound: "Échographie abdominale",
    },
    other_tests: [
      {
        test_name: "Nom du Test",
        result: "Résultat"
      }
    ],
  },
  differential_diagnosis: {
    possible_conditions: "Conditions Possible",
    leading_diagnosis: "Diagnostic principal",
    reasoning:
      "Raisonnement",
  },
  specialized_consultation: {
    referral_reason: "Motif de référence",
    additional_tests: "Examens complémentaires",
  },
  treatment_plan: {
    diagnosis: "Diagnostic",
    treatment_approaches: [
      {
        medication: "Médication",
        dosage: "Posologie",
        duration: "Durée",
      },
      {
        lifestyle_changes: "Nouveau mode de vie"
      },
    ],
    follow_up: {
      schedule: "Planning",
      assessment:"Bilan"
    },
  },
};


export const KEYS_TRANSLATIONS = {
  disease: "Maladie",
  biologic_system: "Système Biologique",

  anamèse: "Anamnèse",
  patient: "Patient",
    last_name: "Prenom",
    first_name: "Nom",
    date_of_birth: "Date de Naissance",
    gender: "Sexe",
    address: "Adresse",
    phone: "Numéro de téléphone",
    occupation: "Profession",
  medical_history: "Antécédents médicaux",
    past_illnesses:"Antécédents médicaux",
    surgeries:"Chirurgies",
    family_history: "Antécédents familiaux",
      parents:"Parents",
      siblings:"frères et sœurs",
  symptoms: "Symptômes",
    main:"Symptôme principal",
    associated:"Symptômes associés",
    onset_date:"Date de début",
    aggravating_factors:"",
    concurrent_symptoms:"",
  lifestyle: "Mode de vie",
    diet:"Régime alimentaire",
    physical_activity:"Activité physique",
    tobacco_use:"Consommation de tabac",
    alcohol_consumption:"Consommation d'alcool",
  sleep: "Sommeil",
    hours:"Heures",
    habits:"Habitudes",
  medications_allergies: "Allergies médicamenteuses",
    current_medications:"Médicaments actuels",
    allergies:"Allergies",
  events_changes: "Événements et changements",
    stressful_events:"Événements stressants",
    change_in_lifestyle:"Changement de mode de vie",
  gynecological: "Gynécologique",
    last_menstrual_period:"Date des dernières règles",
    previous_pregnancies:"Grossesses antérieures",
    contraceptives:"Contraceptifs",
  social: "Vie Sociale",
    marital_status: "État civil",
    social_environment:"Environnement Social",
    education_level:"Niveau d'éducation",
    work_conditions:"Conditions de travail",
  physical_examination:"Examen Physique",
  vital_signs: "Signe Vitaux",
    heart_rate: "Fréquence cardiaque",
    blood_pressure: "Pression artérielle",
    respiratory_rate: "Fréquence respiratoire",
    temperature: "Température",
    general_appearance: "Apparence Générale",
  skin: "Peau",
  head: "La Tête",
    eyes: "Yeux",
    ears: "Oreilles",
    nose: "Nez",
    mouth_throat: "Bouche et Gorge",
    neck: "Cou",
  chest: "Thorax",
  abdomen: "Abdomen",
    inspection: "Inspection",
    palpation: "Palpation",
    percussion: "Percussion",
    auscultation: "Auscultation",
  extremities: "extrémités",
    upper: "Supérieur",
    lower: "Inférieur",
  neurological: "Système Neurologique",

  laboratory_tests: "Examens de laboratoire",
  blood_tests: "Analyses de sang",
    complete_blood_count:"Numération formule sanguine",
    white_blood_cells: "Globules Blancs",
    red_blood_cells: "Globules Rouges",
    hemoglobin: "Hémoglobine",
    platelets: "Plaquettes",
  blood_chemistry: "Biochimie sanguine",
    glucose: "Glucose",
    creatinine: "Créatinine",
    liver_function_tests: "Tests de la fonction hépatique",
    "alanine_transaminase (ALT)": "Alanine aminotransférase (ALAT)",
    "aspartate_transaminase (AST)": "Aspartate aminotransférase (ASAT)",
    alkaline_phosphatase: "Phosphatase alcaline",
    electrolytes: "Électrolytes",
      sodium: "Sodium",
      potassium: "Potassium",
      chloride: "Chlorure",
  urinalysis: "Analyse d'urine",
    color: "Couleur",
    appearance: "Apparence",
    protein: "Protéine",
    ketones: "Cétones",
    bilirubin: "Bilirubine",
    pH: "pH",
    specific_gravity: "Gravité spécifique",
  imaging_studies: "Examens d'imagerie",
    chest_x_ray: "Radiographie thoracique",
    abdominal_ultrasound: "Échographie abdominale",
  other_tests: "Autres Tests",
    test_name: "Nom du Test",
    result: "Résultat",
  differential_diagnosis: "Diagnostic différentiel",
    possible_conditions: "Conditions Possible",
    leading_diagnosis: "Diagnostic principal",
    reasoning: "Raisonnement",
  specialized_consultation: "Consultations Spécialisées",
    referral_reason: "Motif de référence",
    additional_tests: "Examens complémentaires",
  treatment_plan: "Plan de traitement",
    diagnosis: "Diagnostic",
    treatment_approaches:"Approches de traitement",
      medication: "Médication",
      dosage: "Posologie",
      duration: "Durée",
      lifestyle_changes: "Nouveau mode de vie",
    follow_up: "Suivi",
      schedule: "Planning",
      assessment:"Bilan"
}