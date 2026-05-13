export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Montreal • Private Medical Sector</p>
          <h1>Software Solutions & Innovation for MedTech Operations</h1>
          <p className="lead">
            Vrai Nord EPM helps private clinics modernize workflows, improve patient experience, and unlock
            better performance with secure digital platforms.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Book a Discovery Call
            </a>
            <a className="btn btn-secondary" href="mailto:info@vrainord.ca">
              Email Us
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <h3>Core Focus Areas</h3>
          <ul>
            <li>Clinic management software</li>
            <li>Interoperable MedTech integrations</li>
            <li>Automation & reporting dashboards</li>
            <li>Compliance-aware data workflows</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
