const ENDOMETRIOSE = {
  desease: "Endométriose",
  biologic_system: "Système Reproducteur",
  anamèse: {
    patient: {
      last_name: "Sasa",
      first_name: "Gara",
      date_of_birth: "1980-05-20",
      gender: "F",
      address: "456 Addison Street, Ville",
      phone: "1234567890",
      occupation: "Avocate",
    },
    medical_history: {
      past_illnesses: [],
      surgeries: [],
      family_history: {
        parents: ["Endométriose"],
        siblings: [],
      },
    },
    symptoms: {
      main: "Douleurs pelviennes intenses pendant les règles",
      associated: [
        "Douleurs pendant les rapports sexuels",
        "Saignements menstruels abondants",
        "Infertilité",
      ],
      onset_date: "Depuis plusieurs années",
      aggravating_factors: ["Période menstruelle"],
      concurrent_symptoms: ["Fatigue", "Troubles digestifs"],
    },
    lifestyle: {
      diet: "Équilibré",
      physical_activity: "Modérée",
      tobacco_use: "Non-fumeuse",
      alcohol_consumption: "Occasionnelle",
      sleep: {
        hours: 7,
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
      previous_pregnancies: "null",
      contraceptives: ["Pilule contraceptive"],
    },
    social: {
      marital_status: "Mariée",
      social_environment: "Soutien familial et amical",
      education_level: "Diplômée en droit",
      occupation: "Avocate",
      work_conditions: "Bureau",
    },
  },
  physical_examination: {
    vital_signs: {
      heart_rate: 80,
      blood_pressure: "120/80 mmHg",
      respiratory_rate: 16,
      temperature: 98.6,
    },
    general_appearance: "Apparence normale",
    skin: "Pas de lésions cutanées apparentes",
    head: {
      eyes: "Pas de signes anormaux",
      ears: "Pas de signes d'infection ou d'anomalies",
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
      upper: "Pas de signes anormaux",
      lower: "Pas de signes anormaux",
    },
    neurological: "Pas de signes neurologiques anormaux",
  },
  laboratory_tests: {
    blood_tests: {
      complete_blood_count: {
        white_blood_cells: 8000,
        red_blood_cells: 5.2,
        hemoglobin: 12.5,
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
    other_tests: [
      {
        test_name: "hormones_reproductives",
        result: {
          œstradiol: 80,
          progestérone: 4,
        },
      },
    ],
  },
  differential_diagnosis: {
    possible_conditions: [
      "Gastrite",
      "ulcère gastroduodénal",
      "cholélithiase",
      "pancréatite",
    ],
    leading_diagnosis: "Endométriose",
    reasoning:
      "Les symptômes principaux de la toux persistante avec expectorations de mucus et les symptômes associés indiquent une bronchite plutôt que les autres conditions mentionnées. Cependant, des tests diagnostiques supplémentaires peuvent être nécessaires pour confirmer le diagnostic.",
  },
  specialized_consultation: {
    referral_reason:
      "Aucune référence spécifique à une consultation spécialisée n'est nécessaire pour la bronchite.",
    additional_tests: [],
  },
  treatment_plan: {
    diagnosis: "Endométriose",
    treatment_approaches: [
      {
        medication: "Anti-inflammatoires non stéroïdiens",
        dosage: "3g par jour",
        duration: "7 jours",
      },
      {
        lifestyle_changes: [
          "Gestion du stress",
          "Alimentation équilibrée",
          "Activité physique régulière",
        ],
      },
    ],
    follow_up: {
      schedule: "Tous les 6 mois",
      assessment: "",
    },
  },
};

export default ENDOMETRIOSE;
