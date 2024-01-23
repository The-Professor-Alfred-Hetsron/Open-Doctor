const PNEUMONIE = {
  desease: "Pneumonie",
  biologic_system: "Système Respiratoire",
  anamèse: {
    patient: {
      last_name: "Etiennette",
      first_name: "Akoa",
      date_of_birth: "1960-08-05",
      gender: "F",
      address: "Akwa, DOUALA",
      phone: "0123456789",
      occupation: "Retraitée",
    },
    medical_history: {
      past_illnesses: ["Asthme"],
      surgeries: ["Aucune"],
      family_history: {
        parents: ["Hypertension"],
        siblings: ["Asthme"],
      },
    },
    symptoms: {
      main: "Fièvre élevée",
      associated: ["Toux productive", "Essouflement"],
      onset_date: "Non specifiée",
      aggravating_factors: ["Respiration profonde"],
      concurrent_symptoms: ["Douleur thoracique"],
    },
    lifestyle: {
      diet: "Équilibré",
      physical_activity: "30 minutes de marche quotidienne",
      tobacco_use: "Non-fumeuse",
      alcohol_consumption: "Occasionnelle",
      sleep: {
        hours: 8,
        habits: "Régulier",
      },
    },
    medications_allergies: {
      current_medications: [
        { name: "Ventoline", dose: "100mcg", frequency: "Au besoin" },
      ],
      allergies: ["Pénicilline"],
    },
    events_changes: {
      stressful_events: ["Décès d'un proche"],
      change_in_lifestyle: "Nouveau déménagement",
    },
    gynecological: {
      last_menstrual_period: "2023-02-15",
      previous_pregnancies: 0,
      contraceptives: ["Pilule contraceptive"],
    },
    social: {
      marital_status: "Célibataire",
      social_environment: "Famille proche",
      education_level: "Master",
      occupation: "Enseignante",
      work_conditions: "École, horaires réguliers",
    },
  },
  physical_examination: {
    vital_signs: {
      heart_rate: 85,
      blood_pressure: "120/80 mmHg",
      respiratory_rate: 20,
      temperature: 37,
    },
    general_appearance: "Consciente et orientée, en détresse apparente",
    skin: "Coloration normale et élasticité normale",
    head: {
      eyes: "Pupilles égales et réactives à la lumière (PERLA)",
      ears: "Pas de signes d'infection ni d'anomalies",
      nose: "Pas d'écoulement nasal ni de déformités",
      mouth_throat: "Muqueuses humides, pas de lésions",
    },
    neck: "Souplesse, pas de lymphadénopathie ou de masses",
    chest: {
      inspection: "Pas de déformités ou d'asymétrie",
      palpation: "Pas de douleur ou de masses",
      auscultation: "Sons respiratoires clairs bilatéralement",
    },
    abdomen: {
      inspection: "Pas de distension ou de masses visibles",
      palpation: "Souple, indolore, pas d'organomégalie palpable",
      percussion: "Résultats de percussion normaux",
      auscultation: "Bruit intestinal présent dans tous les quadrants",
    },
    extremities: {
      upper: "Pas de hippocratisme digital, de cyanose ou d'œdème",
      lower: "Pas de hippocratisme digital, de cyanose ou d'œdème",
    },
    neurological: "Nerfs crâniens intacts",
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
    leading_diagnosis: "Pneumonie",
    reasoning: "",
  },
  specialized_consultation: {
    referral_reason:
      "Aucune référence spécifique à une consultation spécialisée n'est nécessaire pour la bronchite.",
    additional_tests: [],
  },
  treatment_plan: {
    diagnosis: "Pneumonie",
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
        "Aucun suivi spécifique requis pour la Pneumonie, sauf en cas de complications ou de symptômes persistants.",
      assessment: "",
    },
  },
};

export default PNEUMONIE;
