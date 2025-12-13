import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const FullScreenNav = () => {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const marqueeRef3 = useRef(null);
  const marqueeRef4 = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const animateMarquee = (ref) => {
      if (ref && ref.current) {
        const marqueeContent = ref.current.querySelector('.marquee-content');
        if (marqueeContent) {
          gsap.killTweensOf(marqueeContent);
          const marqueeWidth = marqueeContent.offsetWidth;
          gsap.to(marqueeContent, {
            x: -marqueeWidth / 2,
            duration: 3,
            ease: 'none',
            repeat: -1,
          });
        }
      }
    };

    if (hoveredSection === 'projects') animateMarquee(marqueeRef1);
    if (hoveredSection === 'agency') animateMarquee(marqueeRef2);
    if (hoveredSection === 'contact') animateMarquee(marqueeRef3);
    if (hoveredSection === 'about') animateMarquee(marqueeRef4);

    return () => {
      if (marqueeRef1.current) gsap.killTweensOf(marqueeRef1.current.querySelector('.marquee-content'));
      if (marqueeRef2.current) gsap.killTweensOf(marqueeRef2.current.querySelector('.marquee-content'));
      if (marqueeRef3.current) gsap.killTweensOf(marqueeRef3.current.querySelector('.marquee-content'));
      if (marqueeRef4.current) gsap.killTweensOf(marqueeRef4.current.querySelector('.marquee-content'));
    };
  }, [hoveredSection]);

  return (
    <div className='h-screen w-full flex flex-col justify-between absolute bg-gradient-to-br from-black via-zinc-900 to-black text-white font-sans overflow-hidden py-8'>
      <div className='w-full space-y-1 flex-1 flex flex-col justify-center'>
        {/* PROJECTS Section */}
        <div
          onMouseEnter={() => setHoveredSection('projects')}
          onMouseLeave={() => setHoveredSection(null)}
          className='border-y border-white/20 cursor-pointer relative overflow-hidden group hover:bg-white/5 transition-all duration-300'>
          <h1 className={`font-bold font-sans text-[5vw] uppercase text-center py-2 tracking-wider transition-all duration-700 ease-in-out ${hoveredSection === 'projects' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            PROJECTS
          </h1>
          <div ref={marqueeRef1} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${hoveredSection === 'projects' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className='marquee-content flex items-center gap-8 py-2'>
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase tracking-wider'>Pour Tout Voir</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-xl shadow-lg' src="image1.jpg" alt="" />
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase tracking-wider'>Pour Tout Voir</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-xl shadow-lg' src="image2.jpg" alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* AGENCY Section */}
        <div
          onMouseEnter={() => setHoveredSection('agency')}
          onMouseLeave={() => setHoveredSection(null)}
          className='border-b border-white/20 cursor-pointer relative overflow-hidden group hover:bg-white/5 transition-all duration-300'>
          <h1 className={`font-bold font-sans text-[5vw] uppercase text-center py-2 tracking-wider transition-all duration-700 ease-in-out ${hoveredSection === 'agency' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            AGENCY
          </h1>
          <div ref={marqueeRef2} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${hoveredSection === 'agency' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className='marquee-content flex items-center gap-8 py-2'>
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase tracking-wider'>Agency Work</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-xl shadow-lg' src="image3.jpeg" alt="" />
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase tracking-wider'>Agency Work</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-xl shadow-lg' src="image4.jpeg" alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT US Section */}
        <div
          onMouseEnter={() => setHoveredSection('contact')}
          onMouseLeave={() => setHoveredSection(null)}
          className='border-b border-white/20 cursor-pointer relative overflow-hidden group hover:bg-white/5 transition-all duration-300'>
          <h1 className={`font-bold font-sans text-[5vw] uppercase text-center py-2 tracking-wider transition-all duration-700 ease-in-out ${hoveredSection === 'contact' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            CONTACT US
          </h1>
          <div ref={marqueeRef3} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${hoveredSection === 'contact' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className='marquee-content flex items-center gap-8 py-2'>
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase tracking-wider'>Get In Touch</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-xl shadow-lg' src="image5.jpeg" alt="" />
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase tracking-wider'>Get In Touch</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-xl shadow-lg' src="christmas.jpg" alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT US Section */}
        <div
          onMouseEnter={() => setHoveredSection('about')}
          onMouseLeave={() => setHoveredSection(null)}
          className='border-b border-white/20 cursor-pointer relative overflow-hidden group hover:bg-white/5 transition-all duration-300'>
          <h1 className={`font-bold font-sans text-[5vw] uppercase text-center py-2 tracking-wider transition-all duration-700 ease-in-out ${hoveredSection === 'about' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            ABOUT US
          </h1>
          <div ref={marqueeRef4} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${hoveredSection === 'about' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className='marquee-content flex items-center gap-8 py-2'>
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase tracking-wider'>Our Story</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-xl shadow-lg' src="image1.jpg" alt="" />
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase tracking-wider'>Our Story</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-xl shadow-lg' src="image2.jpg" alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-md border-t border-white/20 px-8 py-5'>
        <div className='flex justify-between items-center'>
          <div className='text-sm uppercase tracking-widest font-light flex items-center gap-3'>
            <span className='text-green-400'>●</span>
            <span>MONTREAL</span>
            <span className='text-white/40'>|</span>
            <span className='font-mono text-lg'>{currentTime}</span>
          </div>
          
          <div className='flex gap-8 text-xs uppercase tracking-wider font-light'>
            <a href="#" className='hover:text-green-400 transition-colors duration-300 relative group'>
              Privacy Policy
              <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-green-400 group-hover:w-full transition-all duration-300'></span>
            </a>
            <a href="#" className='hover:text-green-400 transition-colors duration-300 relative group'>
              Privacy Notice
              <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-green-400 group-hover:w-full transition-all duration-300'></span>
            </a>
            <a href="#" className='hover:text-green-400 transition-colors duration-300 relative group'>
              Ethics Report
              <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-green-400 group-hover:w-full transition-all duration-300'></span>
            </a>
            <a href="#" className='hover:text-green-400 transition-colors duration-300 relative group'>
              Consent Choices
              <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-green-400 group-hover:w-full transition-all duration-300'></span>
            </a>
          </div>
          
          <div className='flex gap-3'>
            <button className='w-11 h-11 rounded-full border border-white/30 hover:border-green-400 hover:bg-green-400/10 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xs font-bold backdrop-blur-sm'>
              FB
            </button>
            <button className='w-11 h-11 rounded-full border border-white/30 hover:border-green-400 hover:bg-green-400/10 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xs font-bold backdrop-blur-sm'>
              IG
            </button>
            <button className='w-11 h-11 rounded-full border border-white/30 hover:border-green-400 hover:bg-green-400/10 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xs font-bold backdrop-blur-sm'>
              GM
            </button>
            <button className='w-11 h-11 rounded-full border border-white/30 hover:border-green-400 hover:bg-green-400/10 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xs font-bold backdrop-blur-sm'>
              TW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav