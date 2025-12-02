import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting">Hola, soy</span>
                    <h1>Jose Manuel<br />Alba Peña</h1>
                    <h2>Desarrollador Full Stack</h2>
                    <p>
                        Me considero una persona constante, comunicativa y motivada por los retos
                        técnicos que impulsan mi crecimiento profesional.
                    </p>
                    <div className="hero-buttons">
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn primary">
                            Contactar
                        </button>
                        <a href="/CV.pdf" download className="btn secondary">
                            <i className="fas fa-download"></i> Descargar CV
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
