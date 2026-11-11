import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../utils/scrollToSection';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isSpanish = (i18n.resolvedLanguage || i18n.language || 'es').startsWith('es');

    const toggleLanguage = () => {
        i18n.changeLanguage(isSpanish ? 'en' : 'es');
    };

    // Keep <html lang> in sync with the selected language
    useEffect(() => {
        document.documentElement.lang = isSpanish ? 'es' : 'en';
    }, [isSpanish]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close the mobile menu with Escape
    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isMenuOpen]);

    const goTo = (e, id) => {
        e.preventDefault();
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    const navItems = [
        { id: 'hero', label: t('nav.home'), icon: 'fa-home' },
        { id: 'about', label: t('nav.about'), icon: 'fa-user' },
        { id: 'skills', label: t('nav.skills'), icon: 'fa-code' },
        { id: 'experience', label: t('nav.experience'), icon: 'fa-briefcase' },
        { id: 'education', label: t('nav.education'), icon: 'fa-graduation-cap' },
        { id: 'horizonte', label: t('nav.horizonte'), icon: 'fa-rocket' },
        { id: 'ia', label: t('nav.ia'), icon: 'fa-robot' },
        { id: 'contact', label: t('nav.contact'), icon: 'fa-envelope' },
    ];

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                aria-label={t('nav.main')}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="nav-container">
                    <div className="nav-placeholder"></div>
                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} onClick={(e) => goTo(e, item.id)}>
                                    <i className={`fas ${item.icon}`} aria-hidden="true"></i> {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        <button
                            type="button"
                            className="lang-switcher"
                            onClick={toggleLanguage}
                            title={t('nav.switch_lang')}
                            aria-label={t('nav.switch_lang')}
                        >
                            <span className={isSpanish ? 'active' : ''}>ES</span>
                            <span className="separator" aria-hidden="true">|</span>
                            <span className={!isSpanish ? 'active' : ''}>EN</span>
                        </button>

                        <button
                            type="button"
                            className="mobile-menu-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? t('nav.close_menu') : t('nav.open_menu')}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-sidebar"
                        >
                            {/* CSS-drawn icon: does not depend on the Font Awesome CDN */}
                            <span className={`burger ${isMenuOpen ? 'open' : ''}`} aria-hidden="true">
                                <span></span><span></span><span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </motion.nav>

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
                        <motion.nav
                            id="mobile-sidebar"
                            className="mobile-sidebar"
                            aria-label={t('nav.menu')}
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
                                    <motion.li key={item.id} whileTap={{ scale: 0.95 }}>
                                        <a href={`#${item.id}`} onClick={(e) => goTo(e, item.id)}>
                                            <i className={`fas ${item.icon}`} aria-hidden="true"></i> {item.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
