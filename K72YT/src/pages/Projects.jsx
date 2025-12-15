import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// ProjectCard Component
const ProjectCard = ({ image1, image2 }) => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  
  return (
    <div 
      ref={cardRef}
      className='w-full h-full flex lg:flex-row flex-col lg:gap-4 gap-2'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={image1Ref}
        className='lg:w-1/2 w-full h-full relative overflow-hidden rounded-lg group cursor-pointer'
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
      >
        <img 
          src={image1} 
          alt="Project" 
          className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-green-300 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500' />
      </div>
      <div 
        ref={image2Ref}
        className='lg:w-1/2 w-full h-full relative overflow-hidden rounded-lg group cursor-pointer'
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
      >
        <img 
          src={image2} 
          alt="Project" 
          className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-green-300 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500' />
      </div>
    </div>
  );
};

const Projects = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  
  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
      title: 'PJC & Widescape',
      category: 'Branding & Design'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg',
      title: 'OKA & Opto',
      category: 'Strategy & Digital'
    },
    {
      image1: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1280&h=960&fit=crop',
      image2: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=1280&h=960&fit=crop',
      title: 'La Majeure & Shelton',
      category: 'Creative & Production'
    },
    {
      image1: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=1280&h=960&fit=crop',
      image2: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=1280&h=960&fit=crop',
      title: 'Jean Coutu Rebrand',
      category: 'Brand Identity & Strategy'
    },
    {
      image1: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1280&h=960&fit=crop',
      image2: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1280&h=960&fit=crop',
      title: 'iA Financial Group',
      category: 'Corporate Identity'
    },
    {
      image1: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1280&h=960&fit=crop',
      image2: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1280&h=960&fit=crop',
      title: 'OVATION Foundation',
      category: 'Digital Experience & Web'
    }
  ];
  
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    // Hero title entrance animation
    gsap.from(heroRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.3
    });
    
    // Card expansion animation (the main effect!)
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.5
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -200%',
        scrub: true
      }
    });
    
    // Project titles fade in with stagger
    gsap.from('.project-title', {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
    
    // Number counter animation
    gsap.from('.project-number', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
    
  }, []);
  
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Hero Section */}
      <div className='lg:px-20 px-6 pt-[45vh] pb-20'>
        <div ref={heroRef}>
          <p className='text-green-300 uppercase tracking-[0.3em] text-xs mb-6 font-light'>
            Our Work
          </p>
          <h2 className='font-bold lg:text-[9.5vw] text-7xl uppercase leading-none tracking-tight'>
            Projets
          </h2>
          <p className='text-gray-400 mt-8 text-xl max-w-2xl font-light leading-relaxed'>
            Explore our portfolio of creative work, where strategy meets design and innovation comes to life.
          </p>
          <div className='mt-12 flex items-center gap-8'>
            <div>
              <p className='text-5xl font-bold text-green-300'>6+</p>
              <p className='text-sm text-gray-500 mt-1'>Projects</p>
            </div>
            <div>
              <p className='text-5xl font-bold text-green-300'>12+</p>
              <p className='text-sm text-gray-500 mt-1'>Clients</p>
            </div>
            <div>
              <p className='text-5xl font-bold text-green-300'>5+</p>
              <p className='text-sm text-gray-500 mt-1'>Years</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Grid with Expansion Effect */}
      <div className='lg:px-20 px-6 pb-32 lol' ref={projectsRef}>
        {projects.map((elem, idx) => (
          <div 
            key={idx} 
            className='hero w-full lg:h-[850px] h-[600px] mb-6 overflow-hidden relative'
          >
            <div className='absolute top-0 left-0 z-10'>
              <span className='project-number inline-block text-8xl font-bold text-white/5'>
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
            <div className='project-title mb-6 relative z-10'>
              <h3 className='text-4xl lg:text-6xl font-bold mb-3 hover:text-green-300 transition-colors duration-500'>
                {elem.title}
              </h3>
              <p className='text-gray-500 uppercase text-xs tracking-[0.3em] font-light mb-2'>
                {elem.category}
              </p>
              <div className='flex gap-3 mt-4'>
                <span className='px-4 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10'>
                  Visual Identity
                </span>
                <span className='px-4 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10'>
                  Web Design
                </span>
                <span className='px-4 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10'>
                  Strategy
                </span>
              </div>
            </div>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>
      
      {/* Extra space for scroll effect */}
      <div className='h-[100vh]'></div>
      
      {/* Stats Section */}
      <div className='lg:px-20 px-6 py-32 border-t border-white/10'>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-12'>
          <div>
            <p className='text-6xl font-bold text-green-300 mb-2'>24+</p>
            <p className='text-gray-400 text-sm uppercase tracking-wider'>Awards Won</p>
          </div>
          <div>
            <p className='text-6xl font-bold text-green-300 mb-2'>98%</p>
            <p className='text-gray-400 text-sm uppercase tracking-wider'>Client Satisfaction</p>
          </div>
          <div>
            <p className='text-6xl font-bold text-green-300 mb-2'>50+</p>
            <p className='text-gray-400 text-sm uppercase tracking-wider'>Team Members</p>
          </div>
          <div>
            <p className='text-6xl font-bold text-green-300 mb-2'>100+</p>
            <p className='text-gray-400 text-sm uppercase tracking-wider'>Projects Delivered</p>
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className='lg:px-20 px-6 py-32 text-center border-t border-white/10'>
        <h2 className='text-5xl lg:text-7xl font-bold mb-6 leading-tight'>
          Ready to start<br />your project?
        </h2>
        <p className='text-gray-400 text-lg mb-10 max-w-xl mx-auto'>
          Let's create something extraordinary together. Get in touch and let's discuss your vision.
        </p>
        <button className='group relative px-12 py-5 bg-transparent border-2 border-green-300 text-green-300 font-bold uppercase rounded-full overflow-hidden transition-all duration-500 text-sm tracking-widest hover:text-black'>
          <span className='relative z-10'>Get In Touch</span>
          <span className='absolute inset-0 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></span>
        </button>
      </div>
    </div>
  )
}

export default Projects