import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Official documentation URLs. {lang} is replaced by the docs locale (es-es / en-us).
const techDocs = {
    ".NET": "https://learn.microsoft.com/{lang}/dotnet/",
    "C#": "https://learn.microsoft.com/{lang}/dotnet/csharp/",
    "SQL": "https://learn.microsoft.com/{lang}/sql/",
    "LINQ": "https://learn.microsoft.com/{lang}/dotnet/csharp/linq/",
    "Entity Framework": "https://learn.microsoft.com/{lang}/ef/",
    "MySQL": "https://dev.mysql.com/doc/",
    "Angular 13": "https://v13.angular.io/docs",
    "Angular 12": "https://v12.angular.io/docs",
    "Intersystems IRIS": "https://docs.intersystems.com/iris/latest/",
    "ObjectScript": "https://docs.intersystems.com/iris/latest/csp/docbook/DocBook.UI.Page.cls",
    "SQL Server": "https://learn.microsoft.com/{lang}/sql/sql-server/",
    "jQuery": "https://api.jquery.com/",
    "PostgreSQL": "https://www.postgresql.org/docs/"
};

const jobsData = [
    {
        key: 'knowmadmood',
        company: "Knowmad Mood (Banco Santander)",
        projects: [
            { key: 'p1', tech: [".NET", "C#", "SQL Server", "SQL"] }
        ]
    },
    {
        key: 'salutic',
        company: "Salutic S.L.",
        projects: [
            { key: 'p1', tech: [".NET", "LINQ", "Entity Framework", "MySQL", "Angular 13"] },
            { key: 'p2', tech: ["Intersystems IRIS", ".NET", "ObjectScript", "SQL Server", "jQuery"], hasAchievement: true }
        ]
    },
    {
        key: 'bimaxpro',
        company: "Bimaxpro S.L.",
        projects: [
            { key: 'p1', tech: [".NET", "LINQ", "Entity Framework", "PostgreSQL", "Angular 12"] }
        ]
    }
];

const Experience = () => {
    const { t, i18n } = useTranslation();
    const docsLang = (i18n.resolvedLanguage || 'es').startsWith('es') ? 'es-es' : 'en-us';

    return (
        <section id="experience" className="section-padding">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <i className="fas fa-briefcase" aria-hidden="true"></i>{t('experience.title')}
            </motion.h2>

            <div className="timeline">
                {jobsData.map((job, index) => {
                    const base = `experience.jobs.${job.key}`;
                    return (
                        <motion.div
                            key={job.key}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-content">
                                <div className="job-header">
                                    <div>
                                        <h3>{t(`${base}.title`)}</h3>
                                        <h4>{job.company}</h4>
                                    </div>
                                    <span className="date">{t(`${base}.period`)}</span>
                                </div>
                                <p>{t(`${base}.description`)}</p>

                                <div className="projects-list">
                                    {job.projects.map((proj) => {
                                        const pBase = `${base}.${proj.key}`;
                                        return (
                                            <div key={proj.key} className="project-card">
                                                <div className="project-header">
                                                    <h5>{t(`${pBase}.name`)}</h5>
                                                    <span className="project-date">{t(`${pBase}.date`)}</span>
                                                </div>
                                                <p>{t(`${pBase}.desc`)}</p>
                                                {proj.hasAchievement && (
                                                    <p className="achievement">
                                                        <i className="fas fa-check" aria-hidden="true"></i>
                                                        <span>{t(`${pBase}.achievement`)}</span>
                                                    </p>
                                                )}
                                                <div className="tech-tags">
                                                    {proj.tech.map((techName) => {
                                                        const docUrl = techDocs[techName]?.replace('{lang}', docsLang);
                                                        return docUrl ? (
                                                            <a
                                                                key={techName}
                                                                href={docUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="tech-tag-link"
                                                                title={t('experience.doc_title', { tech: techName })}
                                                            >
                                                                {techName}
                                                            </a>
                                                        ) : (
                                                            <span key={techName}>{techName}</span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;
