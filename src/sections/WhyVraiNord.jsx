const highlights = [
  'Specialized expertise in MedTech systems for private healthcare organizations.',
  'Montreal-based perspective with bilingual operational context awareness.',
  'Security-first approach for sensitive patient and operational data.',
]

export function WhyVraiNord() {
  return (
    <section id="why" className="section section-muted">
      <div className="container">
        <h2>Why Vrai Nord EPM</h2>
        <ul className="highlight-list">
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
