import { APP_NAME } from '@/constants/config'
import Image from 'next/image'
import React from 'react'

const Header:React.FC = () => {
  return (
    <div className='w-screen h-[100px] sticky top-0 z-10 py-2 px-4 bg-white flex flex-row justify-between items-center shadow-md drop-shadow-md'>
        <Image src="/assets/img/logo2.png" alt={APP_NAME} height={200} width={200} className='w-[90px] aspect-square' />
        <span className="text-2xl font-bold text-primary-blue">{APP_NAME}</span>
        <Image src="/assets/img/logo-enspy.jpg" alt={APP_NAME} height={200} width={200} className='w-[90px] aspect-square rounded-full' />
    </div>
  )
}

export default Header