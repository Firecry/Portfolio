import '../scss/Home.scss'
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Arrow from '@material-ui/icons/ArrowDownward';

export default function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='home' id='home'>

            <div className='container' style={{ transform: `translateY(${offsetY * .7}px` }}>
                <div
                    data-aos='fade-up'
                    data-aos-duration="1500"
                    data-aos-anchor-placement="top-bottom"
                >
                    Welcome!<br></br>
                </div>
            </div>

            <div className='sun' style={{ transform: `translate(${offsetY * .3}px, ${-offsetY * .1}px)` }}></div>

            <div className='hill' style={{ transform: `translateY(${offsetY * .3}px)` }}></div>

            <div className='clouds' style={{ transform: `translateY(${offsetY * .5}px)` }}></div>

            <div className='forest' style={{ transform: `translateY(${offsetY * .45}px)` }}></div>

            <div className='mobile-home'>
                <div className='welcome' style={{ transform: `translateY(${offsetY * .8}px)` }}>Welcome!</div>
                <div className='upper-text' style={{ transform: `translateY(${offsetY * .6}px)` }}>I'm Szymon</div>
                <div className='middle-text' style={{ transform: `translateY(${offsetY * .4}px)` }}>Front-End</div>
                <div className='bottom-text' style={{ transform: `translateY(${offsetY * .2}px)` }}>Web Developer</div>
                <a href='#aboutme'><Arrow className='home-arrow material-symbols-outlined'></Arrow></a>
            </div>

        </div>
    )
}