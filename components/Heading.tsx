import React from 'react'

const Heading = () => {
  return (
    <div className='text-center justify-center text-2xl h-full w-full overflow-x-hidden'>
      <h1 className='text-3xl font-bold text-gray-900 mb-4 p-3'>ShoeStore</h1>
      <input type="text"  className='bg-gray-100 p-2 rounded-xl text-sm w-[300px] mb-3' placeholder='Search'/>
    </div>
  )
}

export default Heading
