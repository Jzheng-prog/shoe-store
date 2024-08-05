import ItemDetails from '@/components/ItemDetails'
import React from 'react'

const Product = () => {
  return (
    <div className='bg-slate-200 h-screen w-full'>
      <div>
        <h1 className='flex items-center justify-center font-bold text-2xl'>Product Details</h1>
      </div>
      <ItemDetails/>
    </div>
  )
}

export default Product
