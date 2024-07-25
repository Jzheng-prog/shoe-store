import React from 'react'

const Heading = () => {
  return (
    <div className='text-center justify-center text-2xl h-full'>
      <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 pt-10'>ShoeStore</h1>
      <input type="text"  className='bg-gray-100 p-2 rounded-xl text-sm w-[300px]' placeholder='Search'/>
    </div>
  )
}

export default Heading
