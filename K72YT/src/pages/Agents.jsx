import React, { use } from 'react'
// import Aariyan fromm 'christmas.png'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Agents = () => {

  const imageDivfF = useRef(null);
  gsap.registerPlugin(ScrollTrigger);


  useGSAP(function(){
    gsap.to(imageDivfF.current,{
      scrollTrigger:{
        trigger : imageDivfF.current,
        markers : true,
        start : "top 24%",
        end : "top -110%",
        scrub : true,
        pin : true,
      }
    });
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imageDivfF} className='h-[25vw] overflow-hidden w-[25vw] bg-red-600 absolute top-50 left-[33vw] rounded-2xl'>
          <img className='h-full w-full object-cover' src="christmas.jpg" alt="Aariyan" />
        </div>
        <div className='font-sans relative font-medium text-white'>
          <div className=' mt-[50vh]'>
            <h1 className='text-[24vw] text-center text-amber-50 uppercase leading-[18vw]'>
              AARIYAN <br /> SUNU
            </h1>
          </div>
          <div className='pl-[50%] pr-[2%] mt-20'>
            <p className='text-5xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity. We stay grounded and leave big egos at the door — even yours. A brand is alive. It has values, a personality, a story. Forget that, and sure, you might get good numbers in the short term, but you kill the brand in the long run. That’s why we commit to giving perspective, to building brands that actually matter.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen bg-none'>
       
      </div>
    </div>

  )
}

export default Agents