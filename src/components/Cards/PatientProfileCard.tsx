import React from 'react'
import { GenderType, IPatient } from '@/types/patient'
import Image from 'next/image'
import { 
    generateRandomImageFromGender,
    refactorGender
} from '@/utils/tools'

const PatientProfileCard:React.FC<{patient : IPatient|undefined}> = ({patient}) => {
    const gender:string = patient!=undefined ? patient?.gender : "M"

    return (
    <div className='w-full p-2 mb-3 flex flex-col items-center border border-grayToneStroke rounded-lg'>
        <span className="w-full text-left text-grayTone2 font-semibold pb-1 mb-2 border-b border-grayToneStroke">Profile</span>
        <Image
            src={`${generateRandomImageFromGender(gender as GenderType)}`}
            alt={`${patient?.first_name}`}
            width={200} height={200}
            className='w-[200px] aspect-square rounded-full border-[5px] border-secondary-yellow'
        />
        <span className="w-full">Nom: <span className="font-bold">{patient?.first_name}</span></span>
        <span className="w-full">Prenom: <span className="font-bold">{patient?.last_name}</span></span>
        <span className="w-full">Date de Naissance: <span className="font-bold">{patient?.date_of_birth}</span></span>
        <span className="w-full">Sexe: <span className="font-bold">{refactorGender(gender as GenderType)}</span></span>
        <span className="w-full">Phone: <span className="font-bold">{patient?.phone}</span></span>
        <span className="w-full">Adresse: <span className="font-bold">{patient?.address}</span></span>
        <span className="w-full">Profession: <span className="font-bold">{patient?.occupation}</span></span>
    </div>
  )
}

export default PatientProfileCard