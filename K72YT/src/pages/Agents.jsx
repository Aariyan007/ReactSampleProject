import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Agents = () => {
  const imageDivfF = useRef(null);
  const imageRef = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const marqueeRef = useRef(null);
  const imageArray = ["christmas.jpg", "image1.jpg", "image2.jpg", "image3.jpeg", "image4.jpeg", "image5.jpeg"];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivfF.current, {
      scrollTrigger: {
        trigger: imageDivfF.current,
        start: "top -10%",
        end: "top -150%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          let index;
          if (self.progress < 1) {
            index = Math.floor(self.progress * imageArray.length);
          } else {
            index = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[index];
        }
      }
    });

    // Background color change when reaching section4
    gsap.to(section3Ref.current, {
      backgroundColor: '#ffffff',
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      }
    });

    // Marquee animation
    const marqueeContent = marqueeRef.current;
    if (marqueeContent) {
      gsap.to(marqueeContent, {
        x: '-50%',
        duration: 20,
        repeat: -1,
        ease: 'none'
      });
    }
  });

  return (
    <div ref={section3Ref} className='parent bg-black'>
      <div className='section1 py-1'>
        <div ref={imageDivfF} className='absolute overflow-hidden h-[50vw] md:h-[40vw] lg:h-[35vw] w-[50vw] md:w-[40vw] lg:w-[35vw] bg-red-600 top-1 left-[50%] -translate-x-1/2 md:left-[20vw] md:translate-x-0 rounded-2xl'>
          <img ref={imageRef} className='h-full w-full object-cover' src="christmas.jpg" alt="Aariyan" />
        </div>
        <div className='font-sans relative font-medium text-white'>
          <div className='mt-[55vh] md:mt-[55vh]'>
            <h1 className='text-[18vw] sm:text-[20vw] md:text-[22vw] lg:text-[24vw] text-center text-amber-50 uppercase leading-[14vw] sm:leading-[15vw] md:leading-[16vw] lg:leading-[18vw]'>
              AARIYAN <br /> SUNU
            </h1>
          </div>
          <div className='px-[5%] md:pl-[50%] md:pr-[2%] mt-12 md:mt-20'>
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:text-6xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our curiosity fuels our creativity. We stay grounded and leave big egos at the door — even yours. A brand is alive. It has values, a personality, a story. Forget that, and sure, you might get good numbers in the short term, but you kill the brand in the long run. That's why we commit to giving perspective, to building brands that actually matter.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-[50vw] flex flex-col'>
        <div className='h-[30vw] text-2xl  flex flex-row justify-between font-semibold text-white px-[15vw] pt-64 '>
          <p className=''>EXPERTISE</p>
          <p className='pr-[20vw]'>STRATERGY<br />
            BRANDING<br />
            DIGITAL MARKETING<br />
            SOCIAL MEDIA MANAGEMENT<br />
          </p>
        </div>
        <div className='h-[20vw] text-xl flex flex-row justify-around pt-28 font-semibold text-white px-12'>
          <p>Our Work_ Born in curiosity, raised by <br /> dedication and fed with a steady diet of <br />creativity.</p>
          <p>Our Creative_ Simmering in an <br /> environment where talent can come to a <br /> full boil. Encouraged to become the best <br /> versions of ourselves.</p>
          <p>Our Culture_ We're open to <br /> each other. Period. The team <br /> works together to create a <br /> space that makes us proud.</p>
        </div>
      </div>

      <div ref={section4Ref} className='min-h-screen relative flex items-center justify-center overflow-hidden'>
        {/* Center Image */}
        <div className='h-[40vw] w-[40vw] max-w-[500px] max-h-[500px] rounded-2xl overflow-hidden relative z-10'>
          <img className='w-full h-full object-cover' src="image3.jpeg" alt="" />
        </div>

        {/* Marquee Text - Top */}
        <div className='absolute top-[20%] left-0 w-full overflow-hidden'>
          <div ref={marqueeRef} className='flex gap-8 whitespace-nowrap'>
            {[...Array(6)].map((_, i) => (
              <h2 key={i} className='text-6xl font-bold text-black uppercase'>
                CREATIVE AGENCY • BRANDING • DESIGN •
              </h2>
            ))}
          </div>
        </div>

        {/* Marquee Text - Middle (Over Image) */}
        <div className='absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden z-20'>
          <div className='flex gap-8 whitespace-nowrap' style={{ animation: 'marquee-middle 15s linear infinite' }}>
            {[...Array(6)].map((_, i) => (
              <h2 key={i} className='text-7xl font-bold text-white uppercase' style={{ WebkitTextStroke: '2px black' }}>
                INNOVATION • CREATIVITY • EXCELLENCE •
              </h2>
            ))}
          </div>
        </div>

        {/* Marquee Text - Bottom */}
        <div className='absolute bottom-[20%] left-0 w-full overflow-hidden'>
          <div className='flex gap-8 whitespace-nowrap' style={{ animation: 'marquee-reverse 20s linear infinite' }}>
            {[...Array(6)].map((_, i) => (
              <h2 key={i} className='text-6xl font-bold text-black uppercase'>
                STRATEGY • INNOVATION • EXCELLENCE •
              </h2>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
  @keyframes marquee-reverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  @keyframes marquee-middle {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
`}</style>



    </div>
  )
}

export default Agents