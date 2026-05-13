const serviceItems = [
  {
    title: 'Custom EPM Platforms',
    text: 'Purpose-built software for appointment flows, billing cycles, and patient relationship management.',
  },
  {
    title: 'Digital Transformation',
    text: 'End-to-end modernization of legacy clinical systems with cloud-ready architecture.',
  },
  {
    title: 'Data Intelligence',
    text: 'Operational dashboards and analytics to help medical leaders make faster, safer decisions.',
  },
]

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>What We Build</h2>
        <div className="cards">
          {serviceItems.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
