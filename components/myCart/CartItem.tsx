'use client'
import React, { useState } from 'react'

const CartItem = () => {
    const [quantity, setQuantity] = useState(0)
    function handleQuantity(operation:String) {
        if (operation === 'minus') {
            if (quantity > 0) {
                setQuantity(quantity - 1)
            }
        } else if (operation === 'plus') {
        setQuantity(quantity + 1)
        }
    }
  return (
    <div className='lg:w-[900px] lg:justify-center items-center mx-auto'>
        <div>
            <div className='border border-gray-300 flex lg:rounded-xl'>

              <div className='ml-2'>
                <img className= 'p-5' src="/jordan-1-red.webp" width={500} />
                <p className='m-5 flex'><span className='mr-1'>Quantity: </span><button onClick={()=>handleQuantity('minus')} className='border border-black px-2 rounded-xl'>-</button><span className='mx-2 px-2'>{quantity}</span><button onClick={()=>handleQuantity('plus')} className='border border-black px-2 rounded-xl'>+</button></p>
              </div>

              <div className='p-5 relative w-full'>
                <p className='my-1 p-2'>Jordan-1 Retro</p>
                <p className='my-1 p-2'>
                  Size: 
                  <select>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>                 
                    <option value="">11</option>
                    <option value="">12</option>                
                  </select>
                </p>
                <p className='my-1 p-2 text-green-700'>In-Stock</p>
                <p className='my-1 p-2 font-extrabold'>$199.99</p>
                <button className='border border-black p-2 rounded-lg bottom-0 absolute m-4 right-0'>delete</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem
