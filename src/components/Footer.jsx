import React from 'react';

const Footer = () => {
    const technologies = [
        { name: 'React', url: 'https://react.dev/', icon: 'fa-react', iconClass: 'fab' },
        { name: 'Vite', url: 'https://vitejs.dev/', icon: 'fa-bolt-lightning', iconClass: 'fas' },
        { name: 'Framer Motion', url: 'https://www.framer.com/motion/', icon: 'fa-film', iconClass: 'fas' },
        { name: 'FontAwesome', url: 'https://fontawesome.com/', icon: 'fa-font-awesome', iconClass: 'fab' }
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-title">Construido con</p>
                <div className="tech-stack">
                    {technologies.map((tech, index) => (
                        <a
                            key={index}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tech-link"
                        >
                            <i className={`${tech.iconClass} ${tech.icon}`}></i>
                            <span>{tech.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
