import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import MidElem from '../components/home/MidElem'

const Home = () => {
  return (
    <div className="text-white bg-amber-50 overflow-hidden">

      <div className="h-screen w-screen fixed top-0 left-0">
        <Video />
        <div className="absolute inset-0 bg-black/5 backdrop-brightness-75"></div>
      </div>

      <div className="h-screen w-screen relative flex flex-col">
        <HomeHeroText />
        <MidElem />
        <HomeBottomText />
      </div>

    </div>
  )
}

export default Home
