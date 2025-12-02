import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: "fa-code",
            skills: ["Angular 13+", "React", "JavaScript (ES6+)", "HTML5/CSS3", "jQuery"]
        },
        {
            title: "Backend",
            icon: "fa-server",
            skills: [".NET Core / C#", "Entity Framework", "SQL Server", "MySQL", "Intersystems IRIS"]
        },
        {
            title: "Tools & Cloud",
            icon: "fa-cloud",
            skills: ["Git / GitLab", "Azure", "Jira", "Postman", "Kibana"]
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
                Habilidades Técnicas
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
                                <span key={i} className="tag">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
