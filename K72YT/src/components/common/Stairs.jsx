import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = () => {
    const currentPath = useLocation();


    const stairParent = useRef(null);

    const tl = gsap.timeline();

    useGSAP(function () {
        tl.to(stairParent.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            // duration:2,
            stagger: {
                amount: 0.25
            }
        })
        tl.to('.stair', {
            // height:2,
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParent.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })
    },[currentPath])
    return (
        <div ref={stairParent} className='h-screen w-full fixed z-10'>
            <div className='h-screen w-full flex'>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
            </div>
        </div>
    )
}

export default Stairs