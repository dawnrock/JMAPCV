import React from 'react';
import { motion } from 'framer-motion';

const Horizonte = () => {
    return (
        <section id="horizonte" className="section-padding">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title"><i className="fas fa-rocket" style={{ marginRight: '10px' }}></i>Proyección Profesional</h2>
                <div className="about-content">
                    <p>
                        Mi objetivo es unirme a una empresa que comparta la visión de crecimiento continuo del desarrollador. Entornos que ofrezcan acceso a <strong>certificaciones oficiales</strong> y capacitación avanzada en tecnologías de vanguardia.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Busco ampliar constantemente mi trayectoria profesional dominando nuevas herramientas y metodologías que me permitan aportar soluciones innovadoras y de alta calidad.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Horizonte;
