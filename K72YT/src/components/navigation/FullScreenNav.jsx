import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const FullScreenNav = ({ onClose }) => {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const marqueeRef3 = useRef(null);
  const marqueeRef4 = useRef(null);
  const navContainerRef = useRef(null);
  const sectionsRef = useRef([]);
  const footerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Opening animation
  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate container - FROM circle(0%) TO circle(150%)
    tl.fromTo(navContainerRef.current,
      {
        clipPath: 'circle(0% at 95% 5%)'
      },
      {
        clipPath: 'circle(150% at 95% 5%)',
        duration: 0.8,
        ease: 'power4.inOut'
      }
    );

    // Animate sections
    tl.from(sectionsRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.4');

    // Animate footer
    tl.from(footerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.3');

    // Animate close button
    tl.from(closeButtonRef.current, {
      scale: 0,
      rotation: 180,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.5');
  }, []);

  // Marquee animations
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

  // Close animation
  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose
    });

    tl.to(closeButtonRef.current, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 0.3,
      ease: 'back.in(1.7)'
    });

    tl.to(sectionsRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.in'
    }, '-=0.2');

    tl.to(footerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.in'
    }, '-=0.3');

    tl.to(navContainerRef.current, {
      clipPath: 'circle(0% at 95% 5%)',
      duration: 0.6,
      ease: 'power4.inOut'
    }, '-=0.2');
  };

  return (
    <div
      ref={navContainerRef}
      className='h-screen w-full flex flex-col justify-between fixed top-0 left-0 bg-black text-white font-sans overflow-hidden py-8 z-[200]'>

      {/* Close Button */}
      <button
        ref={closeButtonRef}
        onClick={handleClose}
        className='h-6 absolute top-8 right-8 text-white bg-white/10 border-2 border-white text-5xl font-bold hover:text-green-300 hover:border-green-300 transition-colors z-[999] w-16 h-16 rounded-full flex items-center justify-center hover:rotate-90 transition-transform duration-300 backdrop-blur-sm'>
        ×
      </button>

      <div className='w-full space-y-2 flex-1 flex flex-col justify-center'>
        {/* PROJECTS Section */}
        <div
          ref={el => sectionsRef.current[0] = el}
          onMouseEnter={() => setHoveredSection('projects')}
          onMouseLeave={() => setHoveredSection(null)}
          className='border-y-[0.5px] border-white cursor-pointer relative overflow-hidden'>
          <h1 className={`font-bold font-sans text-[5vw] uppercase text-center py-1 transition-all duration-700 ease-in-out ${hoveredSection === 'projects' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            PROJECTS
          </h1>
          <div ref={marqueeRef1} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${hoveredSection === 'projects' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className='marquee-content flex items-center gap-8 py-1'>
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase'>Pour Tout Voir</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-lg' src="image1.jpg" alt="" />
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase'>Pour Tout Voir</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-lg' src="image2.jpg" alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* AGENCY Section */}
        <div
          ref={el => sectionsRef.current[1] = el}
          onMouseEnter={() => setHoveredSection('agency')}
          onMouseLeave={() => setHoveredSection(null)}
          className='border-b-[0.5px] border-white cursor-pointer relative overflow-hidden'>
          <h1 className={`font-bold font-sans text-[5vw] uppercase text-center py-1 transition-all duration-700 ease-in-out ${hoveredSection === 'agency' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            AGENCY
          </h1>
          <div ref={marqueeRef2} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${hoveredSection === 'agency' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className='marquee-content flex items-center gap-8 py-1'>
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase'>Agency Work</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-lg' src="image3.jpeg" alt="" />
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase'>Agency Work</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-lg' src="image4.jpeg" alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT US Section */}
        <div
          ref={el => sectionsRef.current[2] = el}
          onMouseEnter={() => setHoveredSection('contact')}
          onMouseLeave={() => setHoveredSection(null)}
          className='border-b-[0.5px] border-white cursor-pointer relative overflow-hidden'>
          <h1 className={`font-bold font-sans text-[5vw] uppercase text-center py-1 transition-all duration-700 ease-in-out ${hoveredSection === 'contact' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            CONTACT US
          </h1>
          <div ref={marqueeRef3} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${hoveredSection === 'contact' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className='marquee-content flex items-center gap-8 py-1'>
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase'>Get In Touch</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-lg' src="image5.jpeg" alt="" />
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase'>Get In Touch</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-lg' src="christmas.jpg" alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT US Section */}
        <div
          ref={el => sectionsRef.current[3] = el}
          onMouseEnter={() => setHoveredSection('about')}
          onMouseLeave={() => setHoveredSection(null)}
          className='border-b-[0.5px] border-white cursor-pointer relative overflow-hidden'>
          <h1 className={`font-bold font-sans text-[5vw] uppercase text-center py-1 transition-all duration-700 ease-in-out ${hoveredSection === 'about' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            ABOUT US
          </h1>
          <div ref={marqueeRef4} className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${hoveredSection === 'about' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className='marquee-content flex items-center gap-8 py-1'>
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase'>Our Story</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-lg' src="image1.jpg" alt="" />
                  <h2 className='whitespace-nowrap font-bold font-sans text-[5vw] uppercase'>Our Story</h2>
                  <img className='h-[6vw] w-[6vw] object-cover rounded-lg' src="image2.jpg" alt="" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div ref={footerRef} className='w-full bg-white/5 backdrop-blur-sm border-t-[0.5px] border-white/30 px-8 py-4'>
        <div className='flex justify-between items-center'>
          <div className='text-sm uppercase tracking-wider flex items-center gap-4'>
            <p>MONTREAL_</p>
            <p className='text-green-300 font-mono'>{currentTime}</p>
          </div>

          <div className='flex gap-6 text-xs uppercase'>
            <a href="#" className='hover:text-green-300 transition-colors'>Privacy Policy</a>
            <a href="#" className='hover:text-green-300 transition-colors'>Privacy Notice</a>
            <a href="#" className='hover:text-green-300 transition-colors'>Ethics Report</a>
            <a href="#" className='hover:text-green-300 transition-colors'>Consent Choices</a>
          </div>

          <div className='flex gap-3'>
            <button className='w-10 h-10 rounded-full border border-white/50 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-sm font-bold'>
              FB
            </button>
            <button className='w-10 h-10 rounded-full border border-white/50 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-sm font-bold'>
              IG
            </button>
            <button className='w-10 h-10 rounded-full border border-white/50 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-sm font-bold'>
              GM
            </button>
            <button className='w-10 h-10 rounded-full border border-white/50 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-sm font-bold'>
              TW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav