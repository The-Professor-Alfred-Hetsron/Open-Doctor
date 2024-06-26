'use client'
import { useRouter } from "next/navigation"
import { APP_NAME } from "@/constants/config"
import { BIOLOGICAL_SYSTEMS } from "@/constants/biologic_systems"
import { IBioSystem } from "@/types/biologic_systems"
import { BiologicalSystemCard } from "@/components"

export default function Root() {
  const router = useRouter()
  return (
    <main className="w-screen h-screen py-6 px-2 flex flex-col gap-8 items-center justify-between overflow-y-scroll">
      <span className="text-6xl">Bienvenue à <span className="text-primary-blue font-bold">{APP_NAME}</span></span>
      <span className="">Bien vouloir choisir le Système Biologique d'apprentissage</span>

      <div className="flex flex-wrap gap-6 px-8 justify-center items-center">
        {
          BIOLOGICAL_SYSTEMS.map((system:IBioSystem, index:number)=>{
            return <BiologicalSystemCard
                    key={index}
                    id={index}
                    image={system.image}
                    name={system.name}
                    cases={system.cases}
                    difficulty={system.difficulty}
                  />
          })
        }
      </div>
    </main>
  )
}