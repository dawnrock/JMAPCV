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
                <h2 className="section-title"><i className="fas fa-user" style={{ marginRight: '10px' }}></i>Sobre mí</h2>
                <div className="about-content">
                    <p>
                        Desarrollador Full Stack con más de 4 años de experiencia en el ciclo completo de desarrollo de software. Especializado en arquitectura MVC e implementación de control de versiones, dando siempre prioridad a un código limpio y escalable.
                    </p>
                    <p>
                        Estoy familiarizado con la gestión de Sprints, historias de usuario y tareas dentro de metodologías ágiles. Además, poseo buenas capacidades para realizar análisis funcionales, técnicos y estimaciones, asegurando el cumplimiento de los objetivos del proyecto.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
