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
            <div className='sun' style={{ transform: `translate(${offsetY * .8}px, ${-offsetY * .3}px)` }}></div>
            <div className='cloud1'></div>
            <div className='cloud2'></div>
            <div className='hill'></div>
            <div className='hillShadow'></div>
            <div className='typing-layout'>
                <div className='typing-demo'>Hello I'm <div className='name'> Simon </div> Web Developer.</div>
            </div>
        </div>
    )
}