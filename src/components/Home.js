import '../css/Home.css'
import React, { useState, useEffect } from 'react';

export default function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='home' id='home'>

            <div className='container'>
                <div className='typing-demo' style={{ transform: `translateY(${-offsetY * .1}px)` }}>Welcome! I'm <div className='name'>Simon</div> Web Developer.</div>
            </div>

            <div className='sun' style={{ transform: `translate(${offsetY * .5}px, ${-offsetY * .1}px)` }}></div>

            <div className='hill' style={{ transform: `translateY(${offsetY * .2}px)` }}></div>

            <div className='clouds' style={{ transform: `translateY(${offsetY * .5}px)` }}></div>

            <div className='forest' style={{ transform: `translateY(${offsetY * .45}px)` }}></div>
        </div>
    )
}