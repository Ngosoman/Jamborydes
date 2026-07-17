import { trustPoints } from '../../data/siteContent'

function TrustSection() {
  return (
    <section className="section trust-section">
      <div>
        <p className="kicker">Why Jamborydes</p>
        <h2>Professional drivers, dependable timing, and premium comfort</h2>
      </div>
      <ul>
        {trustPoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  )
}

export default TrustSection


