import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="w-full flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4">
      <div className="text-center font-bold font-serif drop-shadow-lg leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <div>L'ÉTINCELLE</div>
        <div className='flex justify-center items-center'>
          QUI<Video className="h-[10vw] mx-2.5 rounded-full"/>GÉNÈRE
        </div>
        <div>LA CRÉATIVITÉ</div>
      </div>
    </div>
  )
}

export default HomeHeroText