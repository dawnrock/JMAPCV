import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">Sobre mí</h2>
                <div className="about-content">
                    <p>
                        Desarrollador Full Stack con más de 4 años de experiencia en el ciclo completo de desarrollo de
                        software. Especializado en la creación y mantenimiento de aplicaciones web complejas.
                        <br />
                        Diseño de APIs y gestión de bases de datos, además de buenas capacidades para la resolución de
                        incidencias.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
