'use client'
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Selections = () => {

  useGSAP(()=>
    gsap.to('#jordan', {
      opacity:1,
      delay:1,
      y:0
    })
  )
  return (
    <div className='w-full overflow-x-hidden'>

      {/* help center */}
      <div className='flex justify-center p-10 mt-2'>

        {/* container */}
        <div className='container ml-[300px] sm:w-16'>

          <h1 className='text-3xl font-bold text-gray-900 mb-4 p-3'> Classic Selections</h1>

          {/* jordans */}
          <div className='opacity-0 translate-y-20 bg-black-200 md:w-[900px] mb-6 pb-4 rounded-xl p-4 shadow-xl  bg-gray-100' id="jordan">
            <h2 className='text-2xl font-semibold text-gray-900 mb-4 p-3'>Jordans</h2>
            <div className='flex'>
              

              <p className='w-[400px] mt-5 p-2'>Step into the world of iconic athletic wear with our <span className='font-bold text-lg'>exclusive</span> Jordan collection. Renowned for revolutionizing the world of sports and fashion, Jordan sneakers are not just shoes; they're a symbol of performance and style. Born from the legendary partnership between Michael Jordan and Nike, each pair of Jordans tells a story of excellence and innovation.</p>
              <img src="/jordan-1-red.webp" alt="jordan-1-spiderman" className='md:w-[500px]'/>

            </div>
            <div className='flex m-3 justify-between items-center p-3'>
                  <button className='bg-gray-800 rounded-md p-3 text-white'>Explore More</button>
                  <p className='font-bold text-lg justify-center flex mr-10'>Nike Air Jordan 1 Retro High OG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Selections
