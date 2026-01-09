import React from 'react';
import { motion } from 'framer-motion';

const IA = () => {
    return (
        <section id="ia" className="section-padding">
            <motion.div
                className="about-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title"><i className="fas fa-robot" style={{ marginRight: '10px' }}></i>Inteligencia Artificial</h2>
                <div className="about-content">
                    <p style={{ marginBottom: '1.5rem' }}>
                        Estoy familiarizado con el uso de diversos asistentes de Inteligencia Artificial para potenciar el desarrollo y la productividad. Estas herramientas me han permitido adaptarme rápidamente a nuevas tecnologías y aprender de una forma más eficiente. A continuación, detallo las que utilizo habitualmente:
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '1rem', paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                            <strong>GitHub Copilot:</strong> Asistente de código en tiempo real para acelerar la escritura, sugerir optimizaciones y refactorizar funciones complejas.
                        </li>
                        <li style={{ marginBottom: '1rem', paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                            <strong>Google NotebookLM:</strong> Herramienta para crear presentaciones, generar resúmenes y estructurar documentación técnica de manera eficiente.
                        </li>
                        <li style={{ marginBottom: '1rem', paddingLeft: '20px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>•</span>
                            <strong>Antigravity (Google DeepMind):</strong> Colaborador en el desarrollo de esta aplicación. Esta tecnología ha permitido mejorar la calidad del código y agilizar la implementación de funcionalidades, demostrando el potencial de la programación asistida por IA.
                        </li>
                    </ul>
                    <div style={{ marginTop: '1.5rem', borderLeft: '4px solid var(--accent)', paddingLeft: '1rem' }}>
                        <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Nota importante:</h4>
                        <p style={{ fontWeight: 500, margin: 0 }}>
                            Hago un uso responsable de estas herramientas, verificando siempre la validez de los datos y consultando la documentación oficial en caso de que la respuesta de la IA no sea totalmente convincente. La supervisión humana es clave para garantizar la calidad y corrección del software.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default IA;
