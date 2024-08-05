import React from 'react'

const ItemDetails = () => {

    const dummyData={
        id:1,
        title: 'Jordan-1',
        quantity: 10,
        price: 199.99,
        size: [6, 7, 8, 9, 10, 11]
    }
    const { title, price, size } = dummyData;

  return (
    <div>
      <div className='border border-black rounded-lg shadow-lg m-3 flex bg-gray-100'>
        <img src="/jordan-1-red.webp" alt="" width={500} />

        <div className='mx-auto w-full p-2'>
            <div className='w-full h-full'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='font-semibold'>${price}</p>
                <p className='mt-2'>Select Size</p>
                <ul className='flex-wrap flex mb-3'>
                    {size.map((s,index)=>(
                        <div key={index} className="m-1 border border-black hover:bg-slate-500"> 
                            <li className='p-2 flex justify-center items-center'>
                                <button>{s}</button>
                            </li>
                        </div>
                    ))}
                </ul>

                <div className='flex'>
                  <button className='border border-black p-1 rounded-full m-1 text-xs'>Add to Favorite</button>
                  <button className='border border-black p-2 rounded-full text-white bg-slate-700 m-1 text-xs'>Add to Cart</button>
                </div>

            </div>
           

        </div>
      </div>
    </div>
  )
}

export default ItemDetails
