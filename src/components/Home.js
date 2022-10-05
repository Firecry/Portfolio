import '../css/Home.css'
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='home' id='home'>

            <div className='container' style={{ transform: `translateY(${offsetY * .6}px` }}>
                <div 
                    className='typing-demo'
                    data-aos='fade-right'
                    data-aos-duration="2000"
                    data-aos-anchor-placement="top-bottom"
                >
                    Welcome!
                </div>
                <div
                    className='name'
                    data-aos='fade-right'
                    data-aos-duration="2500"
                >
                    I'm Szymon
                </div>
                <div 
                    className='typing-demo'
                    data-aos='fade-right'
                    data-aos-duration="3000"
                    style={{ margin: `0 0 0 60px` }}
                >
                    Web Developer
                </div>
            </div>

            <div className='sun' style={{ transform: `translate(${offsetY * .5}px, ${-offsetY * .1}px)` }}></div>

            <div className='hill' style={{ transform: `translateY(${offsetY * .2}px)` }}></div>

            <div className='clouds' style={{ transform: `translateY(${offsetY * .5}px)` }}></div>

            <div className='forest' style={{ transform: `translateY(${offsetY * .45}px)` }}></div>
        </div>
    )
}