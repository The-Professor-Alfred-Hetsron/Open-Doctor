import { BioSystemTypes } from '@/types/biologic_systems';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


interface PropsTypes{
    id: number;
    name: BioSystemTypes;
    image?: string;
    cases: number;
    difficulty?: string
}
const BiologicalSystemCard:React.FC<PropsTypes> = ({
    name, cases, difficulty, image
}) => {
  return (
    <Link
        href={{pathname: "/tutoring", query: { system: name}}}
        className='w-[300px] h-[400px] p-4 flex flex-col rounded-lg shadow-md drop-shadow-md hover:scale-[110%]'
    >
        <Image src={`${image}`} alt={name} width={200} height={200} className='w-full h-1/2'/>
        <div className="w-full h-1/2 flex flex-col gap-1">
            <span className="w-full text-lg text-center font-bold">{name}</span>
            <div className="w-full h-full flex gap-2">
                <span className="">Difficulté: <span className="font-bold">{difficulty}</span></span>
                <span className="">Cas Clinique: <span className="font-bold">{cases}</span></span>
            </div>
        </div>
    </Link>
  )
}

export default BiologicalSystemCard