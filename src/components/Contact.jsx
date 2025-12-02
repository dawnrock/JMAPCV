import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding contact-section">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>¿Hablamos?</h2>
                <p>Estoy disponible para nuevos retos y oportunidades profesionales.</p>

                <div className="contact-links">
                    <a href="mailto:manualbadj@gmail.com" className="contact-btn">
                        <i className="fas fa-envelope"></i> manualbadj@gmail.com
                    </a>
                    <a href="tel:+34651759534" className="contact-btn">
                        <i className="fas fa-phone"></i> +34 651759534
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
