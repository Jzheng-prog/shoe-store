import React from 'react'

const ShippingInfo = () => {
  return (
    <div className='absolute w-full lg:relative'>
        <div className='flex justify-between m-1 my-3 rounded-xl bg-gray-600'>
            <h1 className='p-3 text-white flex items-center'>Shipping to: 1234 Blank Ter</h1>
            <button className=' p-2 rounded-lg m-2 bg-white items-center flex'>change</button>       
        </div>
    </div>
  )
}

export default ShippingInfo
