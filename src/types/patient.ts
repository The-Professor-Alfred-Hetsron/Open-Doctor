export interface IPatient{
    last_name: string;
    first_name: string;
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