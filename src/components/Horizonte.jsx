import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const Horizonte = () => {
    const { t } = useTranslation();

    return (
        <section id="horizonte" className="section-padding">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title"><i className="fas fa-rocket" style={{ marginRight: '10px' }}></i>{t('horizonte.title')}</h2>
                <div className="about-content">
                    <p>
                        <Trans i18nKey="horizonte.p1">
                            Mi objetivo es unirme a una empresa que comparta la visión de crecimiento continuo del desarrollador. Entornos que ofrezcan acceso a <strong>certificaciones oficiales</strong> y capacitación avanzada en tecnologías de vanguardia.
                        </Trans>
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        {t('horizonte.p2')}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Horizonte;
