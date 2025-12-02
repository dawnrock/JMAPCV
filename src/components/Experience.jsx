import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const jobs = [
        {
            title: "Desarrollador Full Stack",
            company: "Salutic S.L.",
            period: "Marzo 2022 - Actualidad",
            description: "Desarrollo integral de aplicaciones de gestión sanitaria y control horario.",
            projects: [
                {
                    name: "Proyecto Staffy",
                    tech: ["Angular 13", ".NET", "MySQL"],
                    desc: "Aplicación de gestión de fichajes y control horario."
                },
                {
                    name: "Plataforma Datos Sanitarios",
                    tech: ["Intersystems IRIS", "SQL", "jQuery"],
                    desc: "Plataforma de interoperabilidad para seguros médicos."
                }
            ]
        },
        {
            title: "Desarrollador Frontend",
            company: "Bimaxpro S.L.",
            period: "Nov 2021 - Feb 2022",
            description: "Desarrollo de aplicación web para gestión logística-pesquera.",
            projects: []
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
                Experiencia Laboral
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
                                            <h5>{proj.name}</h5>
                                            <p>{proj.desc}</p>
                                            <div className="tech-tags">
                                                {proj.tech.map((t, k) => <span key={k}>{t}</span>)}
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
