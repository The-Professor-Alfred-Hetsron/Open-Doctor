const LungCancer = {
  desease: "Cancer des poumons",
  biologic_system: "Systeme respiratoire",
  anamèse: {
    patient: {
      last_name: "EOJLD",
      first_name: "Elov",
      date_of_birth: "1998-05-10",
      gender: "F",
      address: "Pharmacie EMIA, Melen",
      phone: "0123456789",
      occupation: "Etudiante",
    },
    medical_history: {
      past_illnesses: [],
      surgeries: [" "],
      family_history: {
        parents: [],
        siblings: [],
      },
    },
    symptoms: {
      main: "Tout persistante",
      associated: ["douleurs thoraciques", "Fatigue intense", "essouflement"],
      onset_date: "2022-01-10",
      aggravating_factors: ["Hémoptysie"],
      concurrent_symptoms: ["Infections pulmonaires"],
    },
    lifestyle: {
      diet: "équilibré",
      physical_activity: "Natation professionnelle",
      tobacco_use: "Non-fumeur",
      alcohol_consumption: "modérée",
      sleep: {
        hours: 7,
        habits: "Régulier",
      },
    },
    medications_allergies: {
      current_medications: [{ name: " ", dose: " ", frequency: " " }],
      allergies: [],
    },
    events_changes: {
      stressful_events: ["Jeux Olympiques 2024"],
      change_in_lifestyle: "Perte d'un frère ",
    },
    gynecological: {
      last_menstrual_period: "2022-01-01",
      previous_pregnancies: 0,
      contraceptives: [],
    },
    social: {
      marital_status: "Célibataire",
      social_environment: "Extrovertie",
      education_level: "Master",
      occupation: "Etudiante",
      work_conditions: "Ecole ",
    },
  },
  physical_examination: {
    vital_signs: {
      heart_rate: 78,
      blood_pressure: "120/60 mmHg",
      respiratory_rate: 16,
      temperature: 98.6,
    },
    general_appearance: "Normale",
    skin: "Peau normale",
    head: {
      eyes: "Regard vague ",
      ears: "Aspect normale",
      nose: "Aspect normale",
      mouth_throat: "Aspect normale",
    },
    neck: "rien à signaler",
    chest: {
      inspection: "Aucune déformation",
      palpation: "Aucune masse",
      auscultation: "Respiration normale",
    },
    abdomen: {
      inspection: "Aucune masse détectée",
      palpation: "Rien à signaler",
      percussion: "Rien à signaler",
      auscultation: "Rien à signaler",
    },
    extremities: {
      upper: "Rien à signaler",
      lower: "Rien à signaler",
    },
    neurological: "Rien d'anormal à signaler",
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
        glucose: 90,
        creatinine: 0.8,
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
      protein: "Négatif",
      glucose: "Négatif",
      ketones: "Négatif",
      bilirubin: "Négatif",
      pH: 6.0,
      specific_gravity: 1.02,
    },
    imaging_studies: {
      chest_x_ray: "Aucune anomalie détectée",
      abdominal_ultrasound: "Aucune anomalie détectée",
    },
    other_tests: [
      {
        test_name: "Thyroid Function Tests",
        result: {
          "thyroid_stimulating_hormone (TSH)": 2.5,
          "free_thyroxine (FT4)": 1.2,
        },
      },
      {
        test_name: "C-reactive Protein",
        result: 5.0,
      },
    ],
  },
  differential_diagnosis: {
    possible_conditions: [
      "Gastritis",
      "Peptic ulcer disease",
      "Gallstones",
      "Appendicitis",
      "Pancreatitis",
      "Inflammatory bowel disease",
    ],
    leading_diagnosis: "Gastritis",
    reasoning:
      "Given the patient's symptoms of abdominal pain, nausea, and vomiting, along with the absence of specific signs indicative of other conditions, gastritis is the leading diagnosis. However, further diagnostic tests are recommended to confirm.",
  },
  specialized_consultation: {
    referral_reason:
      "Given the complexity of the case and the need for further evaluation, the patient is referred to a Gastroenterologist for specialized consultation.",
    additional_tests: ["Upper endoscopy", "Abdominal CT scan"],
  },
  treatment_plan: {
    diagnosis: "Gastritis",
    treatment_approaches: [
      {
        medication: "Proton pump inhibitor (PPI)",
        dosage: "20mg once daily",
        duration: "4 weeks",
      },
      {
        lifestyle_changes: [
          "Avoid spicy and acidic foods",
          "Eat smaller, more frequent meals",
          "Avoid lying down right after eating",
        ],
      },
    ],
    follow_up: {
      schedule: "Follow-up appointment in 4 weeks",
      assessment:
        "Reevaluate symptoms and consider further investigations if necessary.",
    },
  },
}

export default LungCancer