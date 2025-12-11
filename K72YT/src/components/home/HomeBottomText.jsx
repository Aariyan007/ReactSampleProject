import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/home'
import Projects from '../../pages/projects'
import Agency from '../../pages/agents'

const HomeBottomText = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20 mb-20 sm:mb-16 md:mb-20 px-4'>
        <Link to='/Home' className='uppercase font-bold border-white border-2 rounded-full
          px-4 py-1.5
          sm:px-5 sm:py-2
          md:px-6 md:py-2
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          2xl:text-[10vh]
          hover:text-green-400 hover:border-green-300
          transition-all duration-300
          whitespace-nowrap'>Projects</Link>
        <Link to='/agents' className='
          uppercase font-bold border-white border-2 rounded-full
          px-4 py-1.5
          sm:px-5 sm:py-2
          md:px-6 md:py-2
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          2xl:text-[10vh]
          hover:text-green-400 hover:border-green-300
          transition-all duration-300
          whitespace-nowrap
        '>Agency</Link>
    </div>
  )
}

export default HomeBottomText   