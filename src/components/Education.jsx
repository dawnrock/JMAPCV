import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Education = () => {
    const { t } = useTranslation();
    const educationItems = t('education.items', { returnObjects: true });

    return (
        <section id="education" className="section-padding">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <i className="fas fa-graduation-cap" style={{ marginRight: '10px' }}></i>{t('education.title')}
            </motion.h2>

            <div className="education-grid">
                {Array.isArray(educationItems) && educationItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="education-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="edu-icon">
                            <i className="fas fa-certificate"></i>
                        </div>
                        <div className="edu-content">
                            <span className="edu-date">{item.date}</span>
                            <h3>{item.degree}</h3>
                            {item.url ? (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="school school-link">
                                    {item.school}
                                </a>
                            ) : (
                                <p className="school">{item.school}</p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
