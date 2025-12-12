import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Agents = () => {
  const imageDivfF = useRef(null);
  const imageRef = useRef(null);
  const imageArray = ["christmas.jpg", "image1.jpg", "image2.jpg", "image5.jpeg", "image2.jpg", "image3.jpeg", "image4.jpeg"];
  
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(function () {
    gsap.to(imageDivfF.current, {
      scrollTrigger: {
        trigger: imageDivfF.current,
        start: "top 24%",
        end: "top -110%",
        pin: true,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * (imageArray.length - 1));
          imageRef.current.src = imageArray[index];
        }
      }
    });
  })
  
  return (
    <div className='relative'>
      <div className='section1 min-h-screen'>
        <div ref={imageDivfF} className='h-[40vw] md:h-[30vw] lg:h-[25vw] overflow-hidden w-[40vw] md:w-[30vw] lg:w-[25vw] bg-red-600 absolute top-50 left-[50%] -translate-x-1/2 md:left-[30vw] md:translate-x-0 rounded-2xl'>
          <img ref={imageRef} className='h-full w-full object-cover' src="christmas.jpg" alt="Aariyan" />
        </div>
        <div className='font-sans relative font-medium text-white'>
          <div className='pt-[50vh]'>
            <h1 className='text-[18vw] sm:text-[20vw] md:text-[22vw] lg:text-[24vw] text-center text-amber-50 uppercase leading-[14vw] sm:leading-[15vw] md:leading-[16vw] lg:leading-[18vw]'>
              AARIYAN <br /> SUNU
            </h1>
          </div>
          <div className='px-[5%] md:pl-[50%] md:pr-[2%] mt-12 md:mt-20'>
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity. We stay grounded and leave big egos at the door — even yours. A brand is alive. It has values, a personality, a story. Forget that, and sure, you might get good numbers in the short term, but you kill the brand in the long run. That's why we commit to giving perspective, to building brands that actually matter.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen bg-none'>
      </div>
    </div>
  )
}

export default Agents