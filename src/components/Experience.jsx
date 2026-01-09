import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    // Mapping of technologies to their official documentation URLs
    const techDocs = {
        ".NET": "https://learn.microsoft.com/es-es/dotnet/",
        "LINQ": "https://learn.microsoft.com/es-es/dotnet/csharp/linq/",
        "Entity Framework": "https://learn.microsoft.com/es-es/ef/",
        "MySQL": "https://dev.mysql.com/doc/",
        "Angular 13": "https://v13.angular.io/docs",
        "Angular 12": "https://v12.angular.io/docs",
        "Intersystems IRIS": "https://docs.intersystems.com/iris/latest/",
        "ObjectScript": "https://docs.intersystems.com/iris/latest/csp/docbook/DocBook.UI.Page.cls",
        "SQL Server": "https://learn.microsoft.com/es-es/sql/sql-server/",
        "jQuery": "https://api.jquery.com/",
        "PostgreSQL": "https://www.postgresql.org/docs/"
    };

    const jobs = [
        {
            title: "Desarrollador Full Stack",
            company: "Salutic S.L.",
            description: "Desarrollo integral de aplicaciones de gestión sanitaria y control horario.",
            projects: [
                {
                    name: "Proyecto Staffy (Fichaje Laboral)",
                    date: "Oct 2025 - Actualidad",
                    tech: [".NET", "LINQ", "Entity Framework", "MySQL", "Angular 13"],
                    desc: "Desarrollo integral de aplicación web dedicada a la gestión de fichajes y control horario."
                },
                {
                    name: "Plataforma de Gestión de Datos Sanitarios",
                    date: "Mar 2022 - Oct 2025",
                    tech: ["Intersystems IRIS", ".NET", "ObjectScript", "SQL Server", "jQuery"],
                    desc: "Administración de plataforma de interoperabilidad para el sector de seguros médicos."
                }
            ]
        },
        {
            title: "Desarrollador Frontend",
            company: "Bimaxpro S.L.",
            description: "Desarrollo de aplicación web para la gestión y envío de pruebas sanitarias en el sector logístico-pesquero.",
            projects: [
                {
                    name: "Plataforma de gestión de análisis higienico-sanitarios",
                    date: "Nov 2021 - Feb 2022",
                    tech: [".NET", "LINQ", "Entity Framework", "PostgreSQL", "Angular 12"],
                    desc: "Desarrollo de aplicación para la gestión de pruebas sanitarias entre puertos pesqueros y laboratorios."
                }
            ]
        }
    ];

    return (
        <section id="experience" className="section-padding">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <i className="fas fa-briefcase" style={{ marginRight: '10px' }}></i>Experiencia Laboral
            </motion.h2>

            <div className="timeline">
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="timeline-content">
                            <span className="date">{job.period}</span>
                            <h3>{job.title}</h3>
                            <h4>{job.company}</h4>
                            <p>{job.description}</p>

                            {job.projects.length > 0 && (
                                <div className="projects-list">
                                    {job.projects.map((proj, i) => (
                                        <div key={i} className="project-card">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '5px' }}>
                                                <h5 style={{ margin: 0 }}>{proj.name}</h5>
                                                {proj.date && <span style={{ fontSize: '0.8rem', color: 'var(--accent)', whiteSpace: 'nowrap', marginLeft: '10px' }}>{proj.date}</span>}
                                            </div>
                                            <p>{proj.desc}</p>
                                            <div className="tech-tags">
                                                {proj.tech.map((t, k) => {
                                                    const docUrl = techDocs[t];
                                                    return docUrl ? (
                                                        <a
                                                            key={k}
                                                            href={docUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="tech-tag-link"
                                                            title={`Ver documentación de ${t}`}
                                                        >
                                                            {t}
                                                        </a>
                                                    ) : (
                                                        <span key={k}>{t}</span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
