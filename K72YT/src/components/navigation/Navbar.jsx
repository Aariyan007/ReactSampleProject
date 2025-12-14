import React, { useRef } from 'react'

const Navbar = ({ onMenuClick }) => {
  const navGreenRef = useRef(null);
  const menuTextRef = useRef(null);

  const handleClick = (e) => {
    console.log('Navbar button clicked!', e);
    console.log('onMenuClick function:', onMenuClick);
    if (onMenuClick) {
      onMenuClick();
    } else {
      console.error('onMenuClick is undefined!');
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full z-[500] flex items-start justify-between pointer-events-none'>
      <div className='p-4 pointer-events-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="44" viewBox="0 0 103 44">
          <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
        </svg>
      </div>
      <div 
        onMouseEnter={() => {
          navGreenRef.current.style.height = '100%'
          menuTextRef.current.style.color = '#111'
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = '0%'
          menuTextRef.current.style.color = '#ffffff'
        }}
        onClick={handleClick}
        className='relative overflow-hidden h-10 w-[16vw] m-4 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 backdrop-blur-md shadow-lg cursor-pointer pointer-events-auto'>
        <div ref={menuTextRef} className='h-full w-full relative z-10 flex items-center justify-center px-4 text-white font-bold transition-colors duration-500 ease-in-out'>
          Menu
        </div>
        <div ref={navGreenRef} className='bg-green-300 transition-all duration-500 ease-in-out absolute bottom-0 h-0 w-full'></div>
      </div>
    </div>
  )
}

export default Navbar