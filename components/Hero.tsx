'use client'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


const Hero = () => {

  useGSAP(()=>
    gsap.to('#jordan', {
      opacity:1,
      delay:1,
      y:0
    })
  )
  return (
    <div className='ml-[300px] w-full p-10 mt-2 container' >

      {/* jordans */}
      <div className='opacity-0 translate-y-20 border-b mb-6' id="jordan">
        <h2 className='text-3xl font-bold text-gray-900 mb-4' >Jordans</h2>
        <div className='flex'>
          <p className='w-[400px] mt-5 p-2'>Step into the world of iconic athletic wear with our <span className='font-bold text-lg'>exclusive</span> Jordan collection. Renowned for revolutionizing the world of sports and fashion, Jordan sneakers are not just shoes; they're a symbol of performance and style. Born from the legendary partnership between Michael Jordan and Nike, each pair of Jordans tells a story of excellence and innovation.</p>
          <div>
            <img src="/jordan-1-red.webp" alt="jordan-1-spiderman"/>
            <p className='font-bold text-lg justify-center flex'>Nike Air Jordan 1 Retro High OG</p>
          </div>
        </div>
      </div>
      {/* Slides */}

      <div>
        <h2 className='text-3xl font-bold text-gray-900 mb-4' >Slides</h2>
          <div className='flex'>
            <p className='w-[400px] mt-5 p-2'>Discover the perfect pair of Yeezy slides that suits your style and needs. Embrace the fusion of comfort, durability, and high-fashion with our exclusive collection, and elevate your everyday look with a touch of Yeezy innovation.</p>
            <img src="/onyx-slide.png" alt="onxy-slide"  className='w-[1000px]'/>
          </div>
      </div>
      
    </div>
  )
}

export default Hero
