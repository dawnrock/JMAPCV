import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-container">
                <ul className="nav-links">
                    <li onClick={() => scrollToSection('about')}>Sobre mí</li>
                    <li onClick={() => scrollToSection('experience')}>Experiencia</li>
                    <li onClick={() => scrollToSection('skills')}>Skills</li>
                    <li onClick={() => scrollToSection('contact')}>Contacto</li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
