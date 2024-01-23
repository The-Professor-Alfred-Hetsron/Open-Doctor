const BRONCHITE = {
  desease: "Bronchite",
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
      past_illnesses: ["Aucune maladie antérieure spécifique signalée"],
      surgeries: ["Aucune chirurgie antérieure spécifique signalée"],
      family_history: {
        parents: ["Aucun"],
        siblings: ["Aucun"],
      },
    },
    symptoms: {
      main: "Toux persistante avec expectorations de mucus.",
      associated: [
        "Essoufflement",
        "douleur ou sensation de serrement dans la poitrine",
        "fatigue générale",
        "congestion nasale légère.",
      ],
      onset_date: "2023-02-10",
      aggravating_factors: ["Aucun facteur aggravant spécifique signalé"],
      concurrent_symptoms: ["Aucun symptôme concomitant spécifique signalé"],
    },
    lifestyle: {
      diet: "Équilibré",
      physical_activity: "30 minutes de marche quotidienne",
      tobacco_use: "Non-fumeuse",
      alcohol_consumption: "Occasionnelle",
      sleep: {
        hours: 7,
        habits: "Régulier",
      },
    },
    medications_allergies: {
      current_medications: [],
      allergies: ["Aucune allergie spécifique signalée"],
    },
    events_changes: {
      stressful_events: ["Aucun événement stressant spécifique signalé"],
      change_in_lifestyle: "Aucun changement de mode de vie spécifique signalé",
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
      heart_rate: 78,
      blood_pressure: "120/80 mmHg",
      respiratory_rate: 16,
      temperature: 37,
    },
    general_appearance: "Éveillé et orienté, sans détresse apparente",
    skin: "Couleur et turgescence normales",
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
    leading_diagnosis: "Bronchite",
    reasoning:
      "Les symptômes principaux de la toux persistante avec expectorations de mucus et les symptômes associés indiquent une bronchite plutôt que les autres conditions mentionnées. Cependant, des tests diagnostiques supplémentaires peuvent être nécessaires pour confirmer le diagnostic.",
  },
  specialized_consultation: {
    referral_reason:
      "Aucune référence spécifique à une consultation spécialisée n'est nécessaire pour la bronchite.",
    additional_tests: [],
  },
  treatment_plan: {
    diagnosis: "Bronchite",
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

export default BRONCHITE;
