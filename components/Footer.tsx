'use client'
import { socialsList } from '@/data'
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {animateWithGsap} from '../utils/animation'
import { start } from 'repl'


const Footer = () => {
  useGSAP(()=>{
    animateWithGsap('#socials',{
      y:0,
      opacity: 1,
    },{
      start:'top 95%'
    })
  })
  return (
    <div className='flex justify-between items-center mr-3'>
      <div className='flex items-start'>
        <p className='ml-[300px]'>All rights reserved © 2024 | Contact 1-800-000-0000 </p>
      </div>
      <div className='flex justify-end opacity-0' id='socials'>
        {socialsList.map((item)=>(
          <div key={item.id} className='border border-gray-600 p-2 rounded-xl m-2 bg-white hover:-translate-y-1'>
            <img src={item.logo} alt="" className='w-4 h-4'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
