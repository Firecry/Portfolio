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

            <div className='typing-layout'>
                <div className='typing-demo'>Welcome! I'm <div className='name'>Simon</div> Web Developer.</div>
            </div>

            <div className='sun' style={{ transform: `translate(${offsetY * .5}px, ${-offsetY * .1}px)` }}></div>

            <div className='hill' style={{ transform: `translateY(${offsetY * .2}px)` }}></div>

            <div className='clouds'></div>

            <div className='forest' style={{ transform: `translateY(${offsetY * .4}px)` }}></div>
        </div>
    )
}