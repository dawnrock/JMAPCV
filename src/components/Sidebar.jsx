import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-photo">
        <img src="/profile.jpg" alt="Jose Manuel Alba Peña" />
      </div>
      <div className="profile-header">
        <h1>Jose Manuel<br />Alba Peña</h1>
        <h2>Desarrollador Full Stack</h2>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:manualbadj@gmail.com">manualbadj@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <span>+34 651759534</span>
        </div>
        {/* Ubicación pendiente, se puede añadir luego */}
      </div>

      <section className="skills-section">
        <h3><i className="fas fa-code"></i> Habilidades</h3>

        <div className="skill-group">
          <h4>Frontend</h4>
          <div className="tags">
            <span>Angular 13+</span>
            <span>React</span>
            <span>JavaScript (ES6+)</span>
            <span>jQuery</span>
            <span>HTML5/CSS3</span>
          </div>
        </div>

        <div className="skill-group">
          <h4>Backend</h4>
          <div className="tags">
            <span>.NET Core / C#</span>
            <span>Entity Framework</span>
            <span>LINQ</span>
            <span>SQL Server</span>
            <span>MySQL</span>
            <span>Intersystems IRIS</span>
            <span>ObjectScript</span>
          </div>
        </div>

        <div className="skill-group">
          <h4>Herramientas & Cloud</h4>
          <div className="tags">
            <span>Git</span>
            <span>GitLab</span>
            <span>Azure</span>
            <span>SharePoint</span>
            <span>Jira</span>
            <span>Postman</span>
            <span>Kibana</span>
          </div>
        </div>
      </section>

      <section className="languages-section">
        <h3><i className="fas fa-globe"></i> Idiomas</h3>
        <ul>
          <li><strong>Español:</strong> Nativo</li>
          <li><strong>Inglés:</strong> Competencia Profesional</li>
        </ul>
      </section>

      <section className="interests-section">
        <h3><i className="fas fa-star"></i> Intereses</h3>
        <p>Deporte, ciencia, economía y nuevas tecnologías.</p>
      </section>
    </aside>
  );
};

export default Sidebar;
