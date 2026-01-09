import React from 'react';

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="summary">
                <h3><i className="fas fa-user"></i> Perfil Profesional</h3>
                <p>
                    Desarrollador Full Stack con más de 3 años de experiencia en el ciclo completo de desarrollo de
                    software.
                    Especializado en la creación y mantenimiento de aplicaciones web complejas.
                    Diseño de APIs y gestión de bases de datos, además de buenas capacidades para la resolución de
                    incidencias.
                    Me considero una persona constante, comunicativa y motivada por los retos técnicos que impulsan mi
                    crecimiento profesional.
                </p>
            </section>

            <section className="experience">
                <h3><i className="fas fa-briefcase"></i> Experiencia Laboral</h3>

                <div className="job-item">
                    <div className="job-header">
                        <h4>Desarrollador Full Stack</h4>
                        <span className="company">Salutic S.L.</span>
                        <span className="date">Marzo 2022 - Actualidad</span>
                    </div>
                    <div className="job-details">
                        <div className="project-highlight">
                            <h5>Proyecto fichaje Laboral</h5>
                            <span className="project-date">Oct 2025 - Dic 2025</span>
                            <p>Desarrollo integral de una aplicación de gestión de fichajes y control horario.</p>
                            <ul>
                                <li>Implementación del frontend con <strong>Angular 13</strong>.</li>
                                <li>Desarrollo del backend utilizando <strong>.NET</strong>, <strong>LINQ</strong> y
                                    <strong>Entity Framework</strong>.
                                </li>
                                <li>Diseño y gestión de base de datos <strong>MySQL</strong>.</li>
                            </ul>
                        </div>
                        <div className="project-highlight">
                            <h5>Plataforma de Gestión de Datos Sanitarios</h5>
                            <span className="project-date">Mar 2022 - Oct 2025</span>
                            <p>Administración y evolución de plataforma de interoperabilidad para el sector de seguros
                                médicos.</p>
                            <ul>
                                <li>Mantenimiento y desarrollo de nuevas funcionalidades en plataforma CMS.</li>
                                <li>Gestión de datos con <strong>Intersystems IRIS</strong> y <strong>SQL</strong>.</li>
                                <li>Desarrollo frontend con <strong>jQuery</strong> y resolución de incidencias de
                                    usuarios.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="job-item">
                    <div className="job-header">
                        <h4>Desarrollador Frontend</h4>
                        <span className="company">Bimaxpro S.L.</span>
                        <span className="date">Nov 2021 - Feb 2022</span>
                    </div>
                    <div className="job-details">
                        <p>Desarrollo de aplicación web para la gestión y envío de pruebas sanitarias en el sector
                            logístico-pesquero.</p>
                        <ul>
                            <li>Optimización de flujos de trabajo para procesamiento de datos.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="education">
                <h3><i className="fas fa-graduation-cap"></i> Educación</h3>

                <div className="edu-item">
                    <div className="edu-header">
                        <h4>Frontend Máster</h4>
                        <span className="institution">Lemoncode</span>
                    </div>
                    <span className="edu-date">Sep 2020 - May 2021</span>
                </div>

                <div className="edu-item">
                    <div className="edu-header">
                        <h4>Bootcamp Javascript</h4>
                        <span className="institution">Lemoncode</span>
                    </div>
                    <span className="edu-date">Mar 2020 - Oct 2020</span>
                </div>

                <div className="edu-item">
                    <div className="edu-header">
                        <h4>Bachillerato de Artes</h4>
                    </div>
                    <span className="edu-date">2002 - 2004</span>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
