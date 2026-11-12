import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const tools = [
    { name: 'GitHub Copilot', key: 'copilot' },
    { name: 'Google NotebookLM', key: 'notebook' },
    { name: 'Google Antigravity', key: 'antigravity' },
    { name: 'Claude Code', key: 'claude_code' },
    { name: 'Devin', key: 'devin' },
    { name: 'ChatGPT', key: 'chatgpt' },
];

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
                <h2 className="section-title"><i className="fas fa-robot" aria-hidden="true"></i>{t('ia.title')}</h2>
                <div className="about-content">
                    <p>{t('ia.intro')}</p>
                    <ul className="ia-list">
                        {tools.map((tool) => (
                            <li key={tool.key}>
                                <strong>{tool.name}:</strong> {t(`ia.${tool.key}`)}
                            </li>
                        ))}
                    </ul>
                    <div className="ia-note">
                        <h3>{t('ia.note_title')}</h3>
                        <p>{t('ia.note_desc')}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default IA;
