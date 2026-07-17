import { services } from '../../data/siteContent'

function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="section-head">
        <p className="kicker">Services</p>
        <h2>Transport solutions built around real travel needs</h2>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
