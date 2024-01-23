const NANISME = {
  desease: "Nanisme",
  biologic_system: "Système Squelettique",
  anamèse: {
    patient: {
      last_name: "Martin",
      first_name: "Sophie",
      date_of_birth: "2000-02-10",
      gender: "F",
      address: "123 Rue du Petit, Ville",
      phone: "9876543210",
      occupation: "Étudiante",
    },
    medical_history: {
      past_illnesses: [],
      surgeries: [],
      family_history: {
        parents: ["Nanisme"],
        siblings: [],
      },
    },
    symptoms: {
      main: "Croissance ralentie depuis l'enfance",
      associated: ["Courte stature", "Proportions corporelles atypiques"],
      onset_date: "Depuis l'enfance",
      aggravating_factors: [],
      concurrent_symptoms: ["Retard pubertaire"],
    },
    lifestyle: {
      diet: "Équilibré",
      physical_activity: "Régulier, adapté à la condition",
      tobacco_use: "Non-fumeur",
      alcohol_consumption: "Non-alcoolique",
      sleep: {
        hours: 8,
        habits: "Réguliers",
      },
    },
    medications_allergies: {
      current_medications: [],
      allergies: [],
    },
    events_changes: {
      stressful_events: [],
      change_in_lifestyle: "Aucun",
    },
    gynecological: {
      last_menstrual_period: "2021-12-15",
      previous_pregnancies: null,
      contraceptives: ["Pilule contraceptive"],
    },
    social: {
      marital_status: "Célibataire",
      social_environment: "Soutien familial et amical",
      education_level: "Étudiante universitaire",
      occupation: "Étudiante",
      work_conditions: "N/A",
    },
  },
  physical_examination: {
    vital_signs: {
      heart_rate: 75,
      blood_pressure: "110/70 mmHg",
      respiratory_rate: 16,
      temperature: 98.2,
    },
    general_appearance: "Stature courte, proportions corporelles atypiques",
    skin: "Pas de lésions cutanées apparentes",
    head: {
      eyes: "Pas de signes anormaux",
      ears: "Pas de signes d'anomalies",
      nose: "Pas de congestion ou d'écoulement nasal",
      mouth_throat: "Pas de lésions buccales apparentes",
    },
    neck: "Pas d'enflure ou de masses",
    chest: {
      inspection: "Pas de déformités ou d'asymétries",
      palpation: "Pas de douleur ou de masses",
      auscultation: "Sons respiratoires clairs bilatéralement",
    },
    abdomen: {
      inspection: "Pas de distension ou de masses visibles",
      palpation: "Souple, non douloureux, pas d'organomégalie palpable",
      percussion: "Résonance normale",
      auscultation: "Bruit intestinal présent dans tous les quadrants",
    },
    extremities: {
      upper: "Proportions corporelles atypiques, membres courts",
      lower: "Proportions corporelles atypiques, membres courts",
    },
    neurological: "Pas de signes neurologiques anormaux",
  },
  laboratory_tests: {
    blood_tests: {
      complete_blood_count: {
        white_blood_cells: 7500,
        red_blood_cells: 5.2,
        hemoglobin: 14.0,
        platelets: 250000,
      },
      blood_chemistry: {
        glucose: 95,
        creatinine: 0.9,
        liver_function_tests: {
          "alanine_transaminase (ALT)": 20,
          "aspartate_transaminase (AST)": 22,
          alkaline_phosphatase: 75,
        },
        electrolytes: {
          sodium: 140,
          potassium: 4.0,
          chloride: 100,
        },
      },
    },
    urinalysis: {
      color: "Jaune",
      appearance: "Claire",
      protein: "Negative",
      glucose: "Negative",
      ketones: "Negative",
      bilirubin: "Negative",
      pH: 6.0,
      specific_gravity: 1.02,
    },
    imaging_studies: {
      chest_x_ray: "Radiographie thoracique normale",
      abdominal_ultrasound: "échographie abdominale sans anomalies",
    },
    other_tests: [],
  },
  differential_diagnosis: {
    possible_conditions: [
      "Gastrite",
      "ulcère gastroduodénal",
      "cholélithiase",
      "pancréatite",
    ],
    leading_diagnosis: "Nanisme",
    reasoning:
      "Les symptômes principaux de la toux persistante avec expectorations de mucus et les symptômes associés indiquent une bronchite plutôt que les autres conditions mentionnées. Cependant, des tests diagnostiques supplémentaires peuvent être nécessaires pour confirmer le diagnostic.",
  },
  specialized_consultation: {
    referral_reason:
      "Aucune référence spécifique à une consultation spécialisée n'est nécessaire pour la bronchite.",
    additional_tests: [],
  },
  treatment_plan: {
    diagnosis: "Nanisme",
    treatment_approaches: [
      {
        medication: "Dextromethorphan",
        dosage: "3g par jour",
        duration: "7 jours",
      },
      {
        lifestyle_changes: [
          "Repos, hydratation adéquate et médicaments antitussifs pour soulager les symptômes.",
        ],
      },
    ],
    follow_up: {
      schedule:
        "Aucun suivi spécifique requis pour la bronchite, sauf en cas de complications ou de symptômes persistants.",
      assessment: "",
    },
  },
};

export default NANISME;
