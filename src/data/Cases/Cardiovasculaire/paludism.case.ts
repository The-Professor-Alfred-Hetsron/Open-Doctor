const clinicPaludismCase = {
  desease: "Paludisme",
  biologic_system: "Systeme Cardiovasculaire",
  anamèse: {
    patient: {
      last_name: "Dupont",
      first_name: "Jean",
      date_of_birth: "1980-05-15",
      gender: "M",
      address: "123 Health Street, City",
      phone: "0123456789",
      occupation: "Engineer",
    },
    medical_history: {
      past_illnesses: ["Hypertension", "Diabetes"],
      surgeries: ["Appendectomy"],
      family_history: {
        parents: ["Hypertension", "Diabetes"],
        siblings: ["Asthma"],
      },
    },
    symptoms: {
      main: "Abdominal pain",
      associated: ["Nausea", "Fatigue"],
      onset_date: "2022-01-10",
      aggravating_factors: ["After meals"],
      concurrent_symptoms: ["Vomiting"],
    },
    lifestyle: {
      diet: "Balanced",
      physical_activity: "30 minutes of daily walking",
      tobacco_use: "Non-smoker",
      alcohol_consumption: "Occasional",
      sleep: {
        hours: 7,
        habits: "Regular",
      },
    },
    medications_allergies: {
      current_medications: [
        { name: "Aspirin", dose: "100mg", frequency: "Once a day" },
      ],
      allergies: ["Penicillin"],
    },
    events_changes: {
      stressful_events: ["Job loss"],
      change_in_lifestyle: "Recent relocation",
    },
    gynecological: {
      last_menstrual_period: "2022-01-01",
      previous_pregnancies: 2,
      contraceptives: ["Birth control pill"],
    },
    social: {
      marital_status: "Married",
      social_environment: "Close-knit",
      education_level: "Master's",
      occupation: "Engineer",
      work_conditions: "Office, regular hours",
    },
  },
  physical_examination: {
    vital_signs: {
      heart_rate: 78,
      blood_pressure: "120/80 mmHg",
      respiratory_rate: 16,
      temperature: 98.6,
    },
    general_appearance: "Alert and oriented, no apparent distress",
    skin: "Normal color and turgor",
    head: {
      eyes: "Pupils equal and reactive to light (PERRLA)",
      ears: "No signs of infection or abnormalities",
      nose: "No nasal discharge or deformities",
      mouth_throat: "Moist mucous membranes, no lesions",
    },
    neck: "Supple, no lymphadenopathy or masses",
    chest: {
      inspection: "No deformities or asymmetry",
      palpation: "No tenderness or masses",
      auscultation: "Clear breath sounds bilaterally",
    },
    abdomen: {
      inspection: "No distension or visible masses",
      palpation: "Soft, non-tender, no palpable organomegaly",
      percussion: "Normal resonance",
      auscultation: "Bowel sounds present in all quadrants",
    },
    extremities: {
      upper: "No clubbing, cyanosis, or edema",
      lower: "No clubbing, cyanosis, or edema",
    },
    neurological: "Cranial nerves intact, normal motor and sensory function",
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
      color: "Yellow",
      appearance: "Clear",
      protein: "Negative",
      glucose: "Negative",
      ketones: "Negative",
      bilirubin: "Negative",
      pH: 6.0,
      specific_gravity: 1.02,
    },
    imaging_studies: {
      chest_x_ray: "No abnormalities detected",
      abdominal_ultrasound: "Normal organ structure, no abnormalities",
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
};


export default clinicPaludismCase