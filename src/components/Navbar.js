import '../css/Navbar.css';
import React, { useState, useEffect } from 'react';

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleNavigation = () => window.scrollY ? setIsScrolled(true) : setIsScrolled(false)

        window.addEventListener('scroll', handleNavigation)

        return () => {
            window.removeEventListener('scroll', handleNavigation)
        }
    })

    return (
        <header className={isScrolled ? 'scrolled' : 'navbar'}>
            <a href='#home'><div className={isScrolled ? 'bordered' : 'border'}>Home</div></a>
            <div className='elements'>
                <a href='#aboutme'><div className={isScrolled ? 'margin bordered' : 'margin border'}>About Me</div></a>
                <a href='#projects'><div className={isScrolled ? 'margin bordered' : 'margin border'}>Projects</div></a>
                <a href='#hobby'><div className={isScrolled ? 'margin bordered' : 'margin border'}>Hobby</div></a>
                <a href='#cv'><div className={isScrolled ? 'margin bordered' : 'margin border'}>CV</div></a>
            </div>
        </header>
    )
}