import React from 'react';
import { Trans } from 'react-i18next';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-line">
                <Trans i18nKey="footer.made_with">
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" />
                    <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" />
                </Trans>
                <span className="footer-sep" aria-hidden="true">·</span>
                © {year} José Manuel Alba Peña
            </p>
        </footer>
    );
};

export default Footer;
