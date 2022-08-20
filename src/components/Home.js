import '../css/Home.css'
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleNavigation = () => window.scrollY ? setIsScrolled(true) : setIsScrolled(false)

        window.addEventListener('scroll', handleNavigation)

        return () => {
            window.removeEventListener('scroll', handleNavigation)
        }
    })

    return (
        <div className='home'>
            <div className={isScrolled ? 'scrolled' : 'title'}>Welcome!</div>
        </div>
    )
}