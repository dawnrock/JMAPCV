import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EMAIL = 'manualbadj@gmail.com';

const Contact = () => {
    const { t } = useTranslation();
    const [copied, setCopied] = React.useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard not available: select the address so it can be copied by hand
            const el = document.querySelector('.email-btn .email-text');
            if (el) window.getSelection()?.selectAllChildren(el);
        }
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
                <h2><i className="fas fa-envelope" aria-hidden="true"></i>{t('contact.title')}</h2>
                <p>{t('contact.subtitle')}</p>

                <div className="contact-grid">
                    <div className="email-row">
                        <a href={`mailto:${EMAIL}`} className="contact-btn email-btn">
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                            <span className="email-text">{EMAIL}</span>
                        </a>
                        <button
                            type="button"
                            onClick={copyEmail}
                            className={`icon-btn copy-btn ${copied ? 'copied' : ''}`}
                            title={t('contact.copy_email')}
                            aria-label={t('contact.copy_email')}
                        >
                            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`} aria-hidden="true"></i>
                        </button>
                    </div>
                    <p className="copy-feedback" aria-live="polite">
                        {copied ? t('contact.email_copied') : ''}
                    </p>

                    <div className="contact-secondary">
                        <a href="https://www.linkedin.com/in/manu-alba/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                            <i className="fab fa-linkedin" aria-hidden="true"></i> {t('contact.linkedin')}
                        </a>
                        <a href="https://github.com/dawnrock" target="_blank" rel="noopener noreferrer" className="social-btn github">
                            <i className="fab fa-github" aria-hidden="true"></i> {t('contact.github')}
                        </a>
                        <a href="tel:+34651759534" className="social-btn phone">
                            <i className="fas fa-phone" aria-hidden="true"></i> +34 651 759 534
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
