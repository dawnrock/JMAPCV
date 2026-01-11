import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [copied, setCopied] = React.useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('manualbadj@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section-padding contact-section">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2><i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>{t('contact.title')}</h2>
                <p>{t('contact.subtitle')}</p>

                <div className="contact-grid">
                    <div className="contact-main">
                        <a href="mailto:manualbadj@gmail.com" className="contact-btn email-btn">
                            <i className="fas fa-envelope"></i> manualbadj@gmail.com
                        </a>
                        <button onClick={copyEmail} className={`contact-btn copy-btn ${copied ? 'copied' : ''}`}>
                            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                            {copied ? t('contact.email_copied') : t('contact.copy_email')}
                        </button>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/manu-alba/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                            <i className="fab fa-linkedin"></i> {t('contact.linkedin')}
                        </a>
                        <a href="https://github.com/dawnrock" target="_blank" rel="noopener noreferrer" className="social-btn github">
                            <i className="fab fa-github"></i> {t('contact.github')}
                        </a>
                    </div>

                    <a href="tel:+34651759534" className="contact-btn phone-btn">
                        <i className="fas fa-phone"></i> +34 651759534
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
