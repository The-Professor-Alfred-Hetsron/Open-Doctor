const VARICOCELE = {
  desease: "Varicocèle",
  biologic_system: "Système Reproducteur",
  anamèse: {
    patient: {
      last_name: "Dupont",
      first_name: "Jean",
      date_of_birth: "1980-05-20",
      gender: "M",
      address: "456 Addison Street, Ville",
      phone: "1234567890",
      occupation: "Enseignant",
    },
    medical_history: {
      past_illnesses: [],
      surgeries: [],
      family_history: {
        parents: [],
        siblings: ["Varicocèle chez un frère"],
      },
    },
    symptoms: {
      main: "Sensation de lourdeur ou de douleur testiculaire",
      associated: ["Varices visibles ou palpables dans le scrotum"],
      onset_date: "Depuis plusieurs mois",
      aggravating_factors: [
        "Position debout prolongée",
        "Effort physique intense",
      ],
      concurrent_symptoms: [],
    },
    lifestyle: {
      diet: "Équilibré",
      physical_activity: "Modérée",
      tobacco_use: "Non-fumeur",
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
    other_tests: [
      {
        test_name: "analyses sanguines",
        result: {
          testostérone: 400,
          FSH: 4,
          LH: 4.8,
        },
      },
    ],
  },
  differential_diagnosis: {
    possible_conditions: ["Maladies pelviennes"],
    leading_diagnosis: "Varicocèle",
    reasoning: "Elle est identifiée avec dilatation des veines spermatiques",
  },
  specialized_consultation: {
    referral_reason:
      "Il est recommandé de consulter un urologue pour discuter des options de traitement et prendre une décision éclairée",
    additional_tests: [],
  },
  treatment_plan: {
    diagnosis: "Varicocèle",
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

export default VARICOCELE;
