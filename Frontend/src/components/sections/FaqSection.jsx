import { faqs } from '../../data/siteContent'

function FaqSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-head">
        <p className="kicker">FAQs</p>
        <h2>Common questions before booking</h2>
      </div>
      <div className="faq-grid">
        {faqs.map((item) => (
          <article key={item.question} className="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FaqSection
