import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="section-padding">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title"><i className="fas fa-user" style={{ marginRight: '10px' }}></i>{t('about.title')}</h2>
                <div className="about-content">
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
