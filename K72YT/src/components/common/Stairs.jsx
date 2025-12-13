import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const currentPath = useLocation();


    const stairParent = useRef(null);

    const pageRef = useRef(null);

    const tl = gsap.timeline();

    useGSAP(function () {
        tl.to(stairParent.current, {
            display: 'block',
            // delay: -0.2,
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
        gsap.from(pageRef.current,{
            opacity:0,
            delay : 1.2,
            scale:1.2,
        })
    }, [currentPath])


    return (
        <div>
            <div ref={stairParent} className='h-screen w-full fixed z-10'>
                <div className='h-screen w-full flex'>
                    <div className='stair h-full w-1/5 bg-white'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-white'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-white'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>

        </div>
    )
}

export default Stairs