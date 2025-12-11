import React from 'react'
// import Aariyan fromm 'christmas.png'

const Agents = () => {
  return (
    <div>
      <div className='h-[20vw] overflow-hidden w-[20vw] bg-red-600 absolute top-50 left-[33vw] rounded-2xl'>
        <img className='h-full w-full object-cover' src="christmas.jpg" alt="Aariyan" />
      </div>
      <div className='font-sans relative font-medium text-white'>
        <div className=' mt-[50vh]'>
          <h1 className='text-[24vw] text-center text-amber-50 uppercase leading-[18vw]'>
            AARIYAN <br /> SUNU
          </h1>
        </div>
        <div className='pl-[30%] bg-amber-800 mt-20'>
          <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity. We stay grounded and leave big egos at the door — even yours. A brand is alive. It has values, a personality, a story. Forget that, and sure, you might get good numbers in the short term, but you kill the brand in the long run. That’s why we commit to giving perspective, to building brands that actually matter.</p>
        </div>
      </div>
    </div>
  )
}

export default Agents