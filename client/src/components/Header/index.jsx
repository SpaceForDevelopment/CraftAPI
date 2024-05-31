import React, { useState, useEffect, useRef } from 'react';
import './Header.style.css';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr';

export function Header() {
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle('responsive_nav');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <Link to="/" className="logo" onClick={showNavbar}>
                <h2>Craft API</h2>
            </Link>
            <nav ref={navRef}>
                <Link to="/" onClick={showNavbar} className="nav_link">
                    Home
                </Link>
                <Link to="/mobs" onClick={showNavbar} className="nav_link">
                    Mobs
                </Link>
                <Link
                    to="/equipamentos"
                    onClick={showNavbar}
                    className="nav_link"
                >
                    Equipamentos
                </Link>
                <Link to="/minerios" onClick={showNavbar} className="nav_link">
                    Minérios
                </Link>
                <button className="nav_btn nav_close_btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav_btn" onClick={showNavbar}>
                <GrAppsRounded />
            </button>
        </header>
    );
}
