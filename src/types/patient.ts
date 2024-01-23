export interface IPatient{
    last_name: string;
    first_name: string;
    avatar?:string,
    date_of_birth: string;
    gender: string;
    address: string;
    phone: string;
    occupation: string;
}

export type GenderType = "M" | "F"


export interface IPhysicalExam {
    vital_signs: {
        heart_rate: number;
        blood_pressure: string;
        respiratory_rate: number;
        temperature: number;
    };
    general_appearance: string;
    skin: string;
    head: {
        eyes: string;
        ears: string;
        nose: string;
        mouth_throat: string;
    };
    neck: string;
    chest: {
        inspection: string;
        palpation: string;
        auscultation: string;
    };
    abdomen: {
        inspection: string;
        palpation: string;
        percussion: string;
        auscultation: string;
    };
    extremities: {
        upper: string;
        lower: string;
    };
    neurological: string;
}


export interface ILabTest {
  blood_tests: {
    complete_blood_count: {
      white_blood_cells: number;
      red_blood_cells: number;
      hemoglobin: number;
      platelets: number;
    };
    blood_chemistry: {
      glucose: number;
      creatinine: number;
      liver_function_tests: {
        "alanine_transaminase (ALT)": number;
        "aspartate_transaminase (AST)": number;
        alkaline_phosphatase: number;
      };
      electrolytes: {
        sodium: number;
        potassium: number;
        chloride: number;
      };
    };
  };
  urinalysis: {
    color: string;
    appearance: string;
    protein: string;
    glucose: string;
    ketones: string;
    bilirubin: string;
    pH: number;
    specific_gravity: number;
  };
  imaging_studies: {
    chest_x_ray: string;
    abdominal_ultrasound: string;
  };
  other_tests: [
    {
      test_name: string;
      result: {
        "thyroid_stimulating_hormone (TSH)": number;
        "free_thyroxine (FT4)": number;
      };
    },
    {
      test_name: string;
      result: number;
    }
  ];
}