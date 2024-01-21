import { APP_NAME } from '@/constants/config'
import Image from 'next/image'
import React from 'react'

const Header:React.FC = () => {
  return (
    <div className='w-screen py-2 px-4 flex flex-row justify-between items-center shadow-md drop-shadow-md'>
        <Image src="/assets/img/logo.png" alt={APP_NAME} height={200} width={200} className='w-[70px] aspect-square' />
        <span className="text-2xl font-bold text-primary-blue">{APP_NAME}</span>
        <Image src="/assets/img/logo.png" alt={APP_NAME} height={200} width={200} className='w-[70px] aspect-square' />
    </div>
  )
}

export default Header