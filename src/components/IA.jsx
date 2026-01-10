import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const IA = () => {
    const { t } = useTranslation();

    return (
        <section id="ia" className="section-padding">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title"><i className="fas fa-robot" style={{ marginRight: '10px' }}></i>{t('ia.title')}</h2>
                <div className="about-content">
                    <p style={{ marginBottom: '1.5rem' }}>
                        {t('ia.intro')}
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '1rem', paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                            <strong>GitHub Copilot:</strong> {t('ia.copilot')}
                        </li>
                        <li style={{ marginBottom: '1rem', paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                            <strong>Google NotebookLM:</strong> {t('ia.notebook')}
                        </li>
                        <li style={{ marginBottom: '1rem', paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                            <strong>Antigravity (Google DeepMind):</strong> {t('ia.antigravity')}
                        </li>
                    </ul>
                    <div style={{ marginTop: '1.5rem', borderLeft: '4px solid var(--accent)', paddingLeft: '1rem' }}>
                        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t('ia.note_title')}</h4>
                        <p style={{ fontWeight: 500, margin: 0 }}>
                            {t('ia.note_desc')}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default IA;
