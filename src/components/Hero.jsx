import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
                    <p>{t('hero.description')}</p>
                    <div className="hero-buttons">
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn primary">
                            {t('hero.contact')}
                        </button>
                        <a href="/cv.html" target="_blank" className="btn secondary">
                            <i className="fas fa-eye"></i> {t('hero.view_cv')}
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
                        <img src="/profile.jpg" alt="Jose Manuel Alba Peña" />
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <i className="fas fa-chevron-down"></i>
            </motion.div>
        </section>
    );
};

export default Hero;
