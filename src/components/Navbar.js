import '../scss/Navbar.scss';
import React, { useState, useEffect } from 'react';
import { House, Person, Build, SportsEsports, Description } from '@material-ui/icons';

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
                <House className='material-symbols-outlined'/>Home
            </div></a>
            <div className='elements'>
                <a href='#aboutme'><div className={isScrolled ? 'margin bordered' : 'margin border'}>
                    <Person className="material-symbols-outlined" />About Me
                </div></a>
                <a href='#projects'><div className={isScrolled ? 'margin bordered' : 'margin border'}>
                    <Build className="material-symbols-outlined" />Projects
                </div></a>
                <a href='#hobby'><div className={isScrolled ? 'margin bordered' : 'margin border'}>
                    <SportsEsports className='material-symbols-outlined' />Hobby
                </div></a>
                <a href='#contact'><div className={isScrolled ? 'margin bordered' : 'margin border'}>
                    <Description className='material-symbols-outlined' />Contact
                </div></a>
            </div>
        </header>
    )
}