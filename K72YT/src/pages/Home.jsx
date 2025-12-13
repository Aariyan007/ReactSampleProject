import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import MidElem from '../components/home/MidElem'

const Home = () => {
  return (
    <div className="text-white bg-amber-50">
      <div className="h-screen w-screen fixed top-0 left-0 z-0">
        <Video />
        <div className="absolute inset-0 bg-black/5 backdrop-brightness-75"></div>
      </div>
      <div className="min-h-screen w-screen relative flex flex-col justify-between z-10 pt-20 pb-8">
        <HomeHeroText />
        <MidElem />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home