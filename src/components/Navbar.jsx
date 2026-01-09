import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        setIsMenuOpen(false); // Close menu after clicking
    };

    const navItems = [
        { id: 'about', label: 'Sobre mí', icon: 'fa-user' },
        { id: 'ia', label: 'IA', icon: 'fa-robot' },
        { id: 'experience', label: 'Experiencia', icon: 'fa-briefcase' },
        { id: 'skills', label: 'Skills', icon: 'fa-code' },
        { id: 'horizonte', label: 'Proyección', icon: 'fa-rocket' },
        { id: 'contact', label: 'Contacto', icon: 'fa-envelope' },
    ];

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="nav-container">
                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item.id} onClick={() => scrollToSection(item.id)}>
                                <i className={`fas ${item.icon}`}></i> {item.label}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger Button */}
                    <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="mobile-sidebar-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            className="mobile-sidebar"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="sidebar-header">
                                <h3>Menú</h3>
                            </div>
                            <ul className="sidebar-links">
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <i className={`fas ${item.icon}`}></i> {item.label}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
