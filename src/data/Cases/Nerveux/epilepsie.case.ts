const EPILEPSIE = {
  desease: "Épilepsie",
  biologic_system: "Système Nerveux",
  anamèse: {
    patient: {
      last_name: "Martin",
      first_name: "Sophie",
      date_of_birth: "1990-03-25",
      gender: "F",
      address: "456 Neuro Street, City",
      phone: "9876543210",
      occupation: "Enseignante",
    },
    medical_history: {
      past_illnesses: ["Asthme"],
      surgeries: [],
      family_history: {
        parents: ["Aucun antécédent médical"],
        siblings: ["Aucun antécédent médical"],
      },
    },
    symptoms: {
      main: "Crises convulsives",
      associated: ["Confusion", "Perte de conscience"],
      onset_date: "2010-09-12",
      aggravating_factors: ["Manque de sommeil", "Stress"],
      concurrent_symptoms: ["Maux de tête"],
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
        {
          name: "Valproate de sodium",
          dose: "500mg",
          frequency: "Deux fois par jour",
        },
      ],
      allergies: ["Aucune allergie connue"],
    },
    events_changes: {
      stressful_events: ["Décès d'un proche"],
      change_in_lifestyle: "Aucun changement récent",
    },
    gynecological: {
      last_menstrual_period: "2023-01-05",
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
      heart_rate: 82,
      blood_pressure: "120/80 mmHg",
      respiratory_rate: 16,
      temperature: 98.6,
    },
    general_appearance: "Consciente et orientée, sans détresse apparente",
    skin: "Couleur et élasticité normales",
    head: {
      eyes: "Pupilles égales et réactives à la lumière (PERRLA)",
      ears: "Pas de signes d'infection ou d'anomalies",
      nose: "Pas de décharge nasale ou de déformités",
      mouth_throat: "Muqueuses humides, pas de lésions",
    },
    neck: "Souple, pas de lymphadénopathie ou de masses",
    chest: {
      inspection: "Pas de déformités ou d'asymétrie",
      palpation: "Pas de douleur ou de masses",
      auscultation: "Bruit respiratoire clair bilatéral",
    },
    abdomen: {
      inspection: "Pas de distension ou de masses visibles",
      palpation: "Souple, non douloureux, pas d'organomégalie palpable",
      percussion: "Résonance normale",
      auscultation: "Bruit intestinal présent dans tous les quadrants",
    },
    extremities: {
      upper: "Pas de doigt en baguette de tambour, de cyanose ou d'œdème",
      lower: "Pas de doigt en baguette de tambour, de cyanose ou d'œdème",
    },
    neurological:
      "Nerfs crâniens intacts, fonction motrice et sensorielle normale",
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

export default EPILEPSIE;
