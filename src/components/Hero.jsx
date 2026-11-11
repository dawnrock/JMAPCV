import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { scrollToSection } from '../utils/scrollToSection';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting">{t('hero.greeting')}</span>
                    <h1>José Manuel<br />Alba Peña</h1>
                    <h2>{t('hero.role')}</h2>
                    <p>
                        <Trans i18nKey="hero.description">
                            <strong />
                        </Trans>
                    </p>
                    <div className="hero-buttons">
                        <button type="button" onClick={() => scrollToSection('contact')} className="btn primary">
                            <i className="fas fa-paper-plane" aria-hidden="true"></i> {t('hero.contact')}
                        </button>
                        <a href="/cv.html" target="_blank" rel="noopener noreferrer" className="btn secondary">
                            <i className="fas fa-eye" aria-hidden="true"></i> {t('hero.view_cv')}
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="image-wrapper">
                        <img src="/profile.jpg" alt={t('hero.photo_alt')} width="350" height="350" />
                    </div>
                </motion.div>
            </div>

            <motion.a
                href="#about"
                className="scroll-indicator"
                aria-label={t('hero.scroll')}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </motion.a>
        </section>
    );
};

export default Hero;
