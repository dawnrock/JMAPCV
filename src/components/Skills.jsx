import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();
    // Technology URL mappings
    const techUrls = {
        // Frontend
        "Angular 13+": "https://angular.io/",
        "React": "https://react.dev/",
        "JavaScript (ES6+)": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "HTML5/CSS3": "https://developer.mozilla.org/en-US/docs/Web/HTML",
        "jQuery": "https://jquery.com/",
        // Backend
        ".NET Core / C#": "https://dotnet.microsoft.com/",
        "Entity Framework": "https://docs.microsoft.com/en-us/ef/",
        "SQL Server": "https://www.microsoft.com/en-us/sql-server",
        "MySQL": "https://www.mysql.com/",
        "Intersystems IRIS": "https://www.intersystems.com/products/intersystems-iris/",
        // Tools & Cloud
        "Git / GitLab": "https://about.gitlab.com/",
        "Azure": "https://azure.microsoft.com/",
        "Jira": "https://www.atlassian.com/software/jira",
        "Postman": "https://www.postman.com/",
        "Kibana": "https://www.elastic.co/kibana",
        // AI
        "GitHub Copilot": "https://github.com/features/copilot",
        "Google NotebookLM": "https://notebooklm.google.com/",
        "AI Agents (Antigravity)": "https://deepmind.google/",
        "ChatGPT": "https://openai.com/chatgpt",
        "Claude": "https://www.anthropic.com/claude"
    };

    const skillCategories = [
        {
            title: t('skills.categories.frontend'),
            icon: "fa-code",
            skills: ["Angular 13+", "React", "JavaScript (ES6+)", "HTML5/CSS3", "jQuery"]
        },
        {
            title: t('skills.categories.backend'),
            icon: "fa-server",
            skills: [".NET Core / C#", "Entity Framework", "SQL Server", "MySQL", "Intersystems IRIS"]
        },
        {
            title: t('skills.categories.tools'),
            icon: "fa-cloud",
            skills: ["Git / GitLab", "Azure", "Jira", "Postman", "Kibana"]
        },
        {
            title: t('skills.categories.ai'),
            icon: "fa-robot",
            skills: ["GitHub Copilot", "Google NotebookLM", "AI Agents (Antigravity)", "ChatGPT", "Claude"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section-padding">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <i className="fas fa-code" style={{ marginRight: '10px' }}></i>{t('skills.title')}
            </motion.h2>

            <motion.div
                className="skills-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skillCategories.map((category, index) => (
                    <motion.div key={index} className="skill-card" variants={item}>
                        <div className="card-icon">
                            <i className={`fas ${category.icon}`}></i>
                        </div>
                        <h3>{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, i) => (
                                <a
                                    key={i}
                                    href={techUrls[skill]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="tag tag-link"
                                >
                                    {skill}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
