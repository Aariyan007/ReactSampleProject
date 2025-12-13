import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-9 mb-8 sm:mb-12 md:mb-16 px-4'>
      <Link to='/projects' className='uppercase font-bold border-white border-2 rounded-full
          px-4 py-1.5
          sm:px-5 sm:py-2
          md:px-6 md:py-2
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          hover:text-green-400 hover:border-green-300
          transition-all duration-300
          whitespace-nowrap'>Projects</Link>
      <Link to='/agents' className='
          uppercase font-bold border-white border-2 rounded-full
          px-4 py-1.5
          sm:px-5 sm:py-2
          md:px-6 md:py-2
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          hover:text-green-400 hover:border-green-300
          transition-all duration-300
          whitespace-nowrap
        '>Agency</Link>
    </div>
  )
}

export default HomeBottomText