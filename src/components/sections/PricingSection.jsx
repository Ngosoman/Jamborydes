import { popularRoutes } from '../../data/siteContent'

function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="section-head">
        <p className="kicker">Pricing Snapshot</p>
        <h2>Popular route estimates to reduce back-and-forth questions</h2>
      </div>
      <div className="pricing-grid">
        {popularRoutes.map((item) => (
          <article key={item.route} className="pricing-card">
            <h3>{item.route}</h3>
            <p className="fare">{item.fare}</p>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        Final price can vary by vehicle class, waiting time, and time of day. Corporate and event rates are quoted
        separately.
      </p>
    </section>
  )
}

export default PricingSection
