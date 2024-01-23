const MALADIE_PARKINSON = {
  desease: "Maladie de Parkinson",
  biologic_system: "Système Nerveux",
  anamèse: {
    patient: {
      last_name: "Durand",
      first_name: "Marie",
      date_of_birth: "1992-08-25",
      gender: "F",
      address: "456 Neuro Street, Ville",
      phone: "0123456789",
      occupation: "Enseignante",
    },
    medical_history: {
      past_illnesses: ["Hypertension"],
      surgeries: ["Apendicectomie"],
      family_history: {
        parents: ["Hypertension", "Diabète"],
        siblings: [],
      },
    },
    symptoms: {
      main: "Tremblements au repos",
      associated: ["Rigidité musculaire", "Bradykinésie"],
      onset_date: "2023-05-15",
      aggravating_factors: [],
      concurrent_symptoms: [
        "Difficulté à marcher",
        "Diminution de l'expression faciale",
      ],
    },
    lifestyle: {
      diet: "Équilibré",
      physical_activity: "30 minutes de marche quotidienne",
      tobacco_use: "Non-fumeuse",
      alcohol_consumption: "Occasionnelle",
      sleep: {
        hours: 7,
        habits: "Réguliers",
      },
    },
    medications_allergies: {
      current_medications: [
        { name: "Amlodipine", dose: "5mg", frequency: "Une fois par jour" },
      ],
      allergies: [],
    },
    events_changes: {
      stressful_events: ["Décès d'un proche"],
      change_in_lifestyle: "Changement d'emploi",
    },
    gynecological: {
      last_menstrual_period: "2023-01-01",
      previous_pregnancies: 0,
      contraceptives: ["Pilule contraceptive"],
    },
    social: {
      marital_status: "Célibataire",
      social_environment: "Soutien familial",
      education_level: "Licence",
      occupation: "Enseignante",
      work_conditions: "École, horaires réguliers",
    },
  },
  physical_examination: {
    vital_signs: {
      heart_rate: 82,
      blood_pressure: "120/80 mmHg",
      respiratory_rate: 16,
      temperature: 98.6,
    },
    general_appearance:
      "Éveillée et orientée, aucun signe de détresse apparent",
    skin: "Couleur et élasticité normales",
    head: {
      eyes: "Pupilles égales et réactives à la lumière (PERRLA)",
      ears: "Pas de signes d'infection ou d'anomalies",
      nose: "Pas d'écoulement nasal ou de déformités",
      mouth_throat: "Muqueuses humides, pas de lésions",
    },
    neck: "Souple, pas de lymphadénopathie ni de masses",
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
      upper: "Pas de hippocratisme digital, cyanose ou œdème",
      lower: "Pas de hippocratisme digital, cyanose ou œdème",
    },
    neurological:
      "Tremblements au repos observés, rigidité musculaire, diminution des mouvements spontanés",
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
    leading_diagnosis: "Epilepsie",
    reasoning:
      "Les symptômes principaux de la toux persistante avec expectorations de mucus et les symptômes associés indiquent une bronchite plutôt que les autres conditions mentionnées. Cependant, des tests diagnostiques supplémentaires peuvent être nécessaires pour confirmer le diagnostic.",
  },
  specialized_consultation: {
    referral_reason:
      "Aucune référence spécifique à une consultation spécialisée n'est nécessaire pour la bronchite.",
    additional_tests: [],
  },
  treatment_plan: {
    diagnosis: "Epilepsie",
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

export default MALADIE_PARKINSON;
