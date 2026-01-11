import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const currentLang = i18n.language || 'es';
        const newLang = currentLang.startsWith('es') ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const isSpanish = (i18n.language || 'es').startsWith('es');
    const isEnglish = (i18n.language || '').startsWith('en');

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

            // Reutilizamos el efecto de hover/touch específico de cada sección
            element.classList.remove('active-section');
            void element.offsetWidth; // Force reflow
            element.classList.add('active-section');

            // El efecto dura lo mismo que una transición suave
            setTimeout(() => {
                element.classList.remove('active-section');
            }, 2000);
        }
        setIsMenuOpen(false); // Close menu after clicking
    };

    const navItems = [
        { id: 'hero', label: t('nav.home'), icon: 'fa-home' },
        { id: 'about', label: t('nav.about'), icon: 'fa-user' },
        { id: 'experience', label: t('nav.experience'), icon: 'fa-briefcase' },
        { id: 'education', label: t('nav.education'), icon: 'fa-graduation-cap' },
        { id: 'skills', label: t('nav.skills'), icon: 'fa-code' },
        { id: 'horizonte', label: t('nav.horizonte'), icon: 'fa-rocket' },
        { id: 'ia', label: t('nav.ia'), icon: 'fa-robot' },
        { id: 'contact', label: t('nav.contact'), icon: 'fa-envelope' },
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
                    <div className="nav-placeholder"></div>
                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item.id} onClick={() => scrollToSection(item.id)}>
                                <i className={`fas ${item.icon}`}></i> {item.label}
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        {/* Language Switcher */}
                        <div className="lang-switcher" onClick={toggleLanguage} title={isSpanish ? 'Switch to English' : 'Cambiar a Español'}>
                            <span className={isSpanish ? 'active' : ''}>ES</span>
                            <span className="separator">|</span>
                            <span className={isEnglish ? 'active' : ''}>EN</span>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </div>
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
                                <h3>{t('nav.menu')}</h3>
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
