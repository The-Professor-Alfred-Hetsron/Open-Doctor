const SINUSITE = {
  desease: "Sinusite",
  biologic_system: "Système Respiratoire",
  anamèse: {
    patient: {
      last_name: "Kyria",
      first_name: "Atangana",
      date_of_birth: "1998-02-13",
      gender: "F",
      address: "Melen, YAOUNDE",
      phone: "0123456789",
      occupation: "Etudiant",
    },
    medical_history: {
      past_illnesses: ["Aucune"],
      surgeries: ["Aucune"],
      family_history: {
        parents: ["Hypertension", "Diabète"],
        siblings: ["Aucune"],
      },
    },
    symptoms: {
      main: "Congestion nasale et ecoulement",
      associated: [
        "Maux de tete",
        "Diminunition de l'odorat",
        "Toux et mal de gorge",
        "Fatigue",
        "Douleur ou pression faciale",
      ],
      onset_date: "Non specifiée",
      aggravating_factors: ["Non specifiés"],
      concurrent_symptoms: ["Non specifiés"],
    },
    lifestyle: {
      diet: "Equilibré",
      physical_activity: "Aucune",
      tobacco_use: "Non fumeur",
      alcohol_consumption: "Occasionnelle",
      sleep: {
        hours: 8,
        habits: "Regulier",
      },
    },
    medications_allergies: {
      current_medications: [],
      allergies: ["Acariens"],
    },
    events_changes: {
      stressful_events: ["Perte d'emploi"],
      change_in_lifestyle: "Déménagement",
    },
    gynecological: {
      last_menstrual_period: "2024-01-01",
      previous_pregnancies: 0,
      contraceptives: [],
    },
    social: {
      marital_status: "Celibataire",
      social_environment: "Exposition fréquente à la climatisation",
      education_level: "Master's",
      occupation: "Etudiant",
      work_conditions: "Exposition à des produits chimiques",
    },
  },
  physical_examination: {
    vital_signs: {
      heart_rate: 80,
      blood_pressure: "120/80 mmHg",
      respiratory_rate: 16,
      temperature: 37.2,
    },
    general_appearance: "Fatigué et visage légèrement enflé",
    skin: "Peau normale",
    head: {
      eyes: "Yeux légèrement rouges et larmoyants",
      ears: "Aucun signe d'infection",
      nose: "Nez congestionné avec écoulement nasal",
      mouth_throat: "Bouche et gorge normales",
    },
    neck: "Aucun gonflement ou raideur au niveau du cou",
    chest: {
      inspection: "Respiration normale et régulière",
      palpation: "Aucune sensiblité ou douleur",
      auscultation: "Aucun bruit anormal",
    },
    abdomen: {
      inspection: "Abdomen souple et non distendu",
      palpation: "Aucune sensiblité ou douleur",
      percussion: "Aucune zone de tympanisme ou de matité anormale",
      auscultation: "Bruits intestinaux présents et normaux",
    },
    extremities: {
      upper: "Symétriques et sans oedème",
      lower: "Symétriques et sans oedème",
    },
    neurological: "Pas de déficits neurologiques observés",
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
      chest_x_ray: "Aucune étude d'imagerie réalisée",
      abdominal_ultrasound: "Aucune étude d'imagerie réalisée",
    },
    other_tests: [],
  },
  differential_diagnosis: {
    possible_conditions: [
      "Rhinite allergique",
      "Sinusite bactérienne",
      "Polypes nasaux",
      "Déviation septale",
    ],
    leading_diagnosis: "Sinusite",
    reasoning:
      "Symptômes de congestion nasale, d'écoulement nasal et de maux de tête ainsi que l'examen physique qui montre des signes de sinusite.",
  },
  specialized_consultation: {
    referral_reason:
      "Le patient est référé à un oto-rhino-laryngologiste pour une évaluation plus approfondie et une possible endoscopie des sinus.",
    additional_tests: ["Endoscopie des sinus"],
  },
  treatment_plan: {
    diagnosis: "Sinusite",
    treatment_approaches: [
      {
        medication: "Amoxicilline",
        dosage: "3g par jour",
        duration: "7 jours",
      },
      {
        lifestyle_changes: [],
      },
    ],
    follow_up: {
      schedule:
        "Consultation de suivi dans deux semaines pour évaluer l'efficacité du traitement",
      assessment: "Evaluation des symptômes et un examen physique.",
    },
  },
};

export default SINUSITE;
