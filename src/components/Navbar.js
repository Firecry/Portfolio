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
            <div className={isScrolled ? 'bordered' : 'border'}>Home</div>
            <div className='elements'>
                <div className={isScrolled ? 'margin bordered' : 'margin border'}>About Me</div>
                <div className={isScrolled ? 'margin bordered' : 'margin border'}>Projects</div>
                <div className={isScrolled ? 'margin bordered' : 'margin border'}>Hobby</div>
                <div className={isScrolled ? 'margin bordered' : 'margin border'}>CV</div>
            </div>
        </header>
    )
}