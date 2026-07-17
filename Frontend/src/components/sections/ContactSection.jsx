import { contactItems } from '../../data/siteContent'

function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-head">
        <p className="kicker">Contact</p>
        <h2>Reach us through your preferred channel</h2>
      </div>
      <div className="contact-grid">
        {contactItems.map((item) => (
          <article key={item.title} className="contact-card">
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
