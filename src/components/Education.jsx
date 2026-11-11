import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EducationCard = ({ item, index }) => (
    <motion.div
        className={`education-card ${item.minor ? 'minor' : ''}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
    >
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
            {item.note && <p className="edu-note">{item.note}</p>}
        </div>
    </motion.div>
);

const Education = () => {
    const { t } = useTranslation();

    const groups = [
        { title: t('education.courses_title'), items: t('education.courses', { returnObjects: true }), variant: 'courses' },
        { title: t('education.academic_title'), items: t('education.items', { returnObjects: true }), variant: 'academic' },
    ];

    return (
        <section id="education" className="section-padding">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <i className="fas fa-graduation-cap" aria-hidden="true"></i>{t('education.title')}
            </motion.h2>

            {groups.map((group) => (
                <div key={group.variant} className={`edu-group edu-group-${group.variant}`}>
                    <h3 className="edu-group-title">{group.title}</h3>
                    <div className="education-grid">
                        {Array.isArray(group.items) && group.items.map((item, index) => (
                            <EducationCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Education;
