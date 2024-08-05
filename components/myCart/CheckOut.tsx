import React from 'react'

const CheckOut = () => {
  return (
    <div className='w-full bottom-0 fixed border-t-2 lg:relative lg:justify-between'>
        <p className='p-5 flex justify-between'>total:<span>$199.99</span></p>
        <div className='m-3'>
        <button className='p-2 rounded-lg w-full bg-red-500 text-white'>Checkout</button>
        </div>
    </div>
  )
}

export default CheckOut
