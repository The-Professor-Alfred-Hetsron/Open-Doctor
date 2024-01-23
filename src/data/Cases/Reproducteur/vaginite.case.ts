const VAGINITE = {
  desease: "Vaginite",
  biologic_system: "Système Reproducteur",
  anamèse: {
    patient: {
      last_name: "Lydie",
      first_name: "Abena",
      date_of_birth: "1980-05-20",
      gender: "F",
      address: "456 Addison Street, Ville",
      phone: "1234567890",
      occupation: "Enseignante",
    },
    medical_history: {
      past_illnesses: [],
      surgeries: [],
      family_history: {
        parents: [],
        siblings: [],
      },
    },
    symptoms: {
      main: "Démangeaisons vaginales, brûlures, pertes vaginales anormales",
      associated: [
        "Douleur pendant les rapports sexuels",
        "Douleur ou sensation de brûlure en urinant",
      ],
      onset_date: "Depuis quelques jours",
      aggravating_factors: [
        "Rapports sexuels",
        "Utilisation de produits d'hygiène irritants",
      ],
      concurrent_symptoms: ["Hyperpigmentation cutanée", "Irritabilité"],
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
      contraceptives: [],
    },
    social: {
      marital_status: "Mariée",
      social_environment: "Soutien familial et amical",
      education_level: "Diplômée en droit",
      occupation: "Avocate",
      work_conditions: "Horaires réguliers",
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
    skin: "Pas de lésions cutanées apparentes, hyperpigmentation présente",
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
    possible_conditions: ["Endométriose", "Maladies pelviennes"],
    leading_diagnosis: "Vaginite",
    reasoning:
      "Le diagnostic est confirmé par l'évaluation des sécrétions vaginales.",
  },
  specialized_consultation: {
    referral_reason:
      "Aucune référence spécifique à une consultation spécialisée n'est nécessaire pour la bronchite.",
    additional_tests: [],
  },
  treatment_plan: {
    diagnosis: "Vaginite",
    treatment_approaches: [
      {
        medication: "Estrogen",
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

export default VAGINITE;
