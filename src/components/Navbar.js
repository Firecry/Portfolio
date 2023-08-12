import '../scss/Navbar.scss';
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
        <header id={isScrolled ? 'scrolled' : 'navbar'}>
            <a href='#home'><div className={isScrolled ? 'bordered' : 'border'}>
            <div className="material-symbols-outlined">house</div>
                Home
            </div></a>
            <div className='elements'>
                <a href='#aboutme'><div className={isScrolled ? 'margin bordered' : 'margin border'}>
                <div className="material-symbols-outlined">person</div>    
                    About Me
                </div></a>
                <a href='#projects'><div className={isScrolled ? 'margin bordered' : 'margin border'}>
                <div className="material-symbols-outlined">build</div>
                    Projects
                </div></a>
                <a href='#hobby'><div className={isScrolled ? 'margin bordered' : 'margin border'}>
                <div className="material-symbols-outlined">sports_esports</div>
                    Hobby
                </div></a>
                <a href='#cv'><div className={isScrolled ? 'margin bordered' : 'margin border'}>
                <div className="material-symbols-outlined">description</div>
                    CV
                </div></a>
            </div>
        </header>
    )
}