import { serviceAreas } from '../../data/siteContent'

function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-head">
        <p className="kicker">About</p>
        <h2>Nairobi transport built on reliability, safety, and professionalism</h2>
      </div>
      <p>
        Jamborydes Travel provides airport transfers, city rides, intercity travel, and corporate transport with a
        clear service promise: punctual pickups, experienced drivers, and customer-first communication.
      </p>
      <div className="area-chips" role="list" aria-label="Service areas">
        {serviceAreas.map((area) => (
          <span key={area} role="listitem" className="chip">
            {area}
          </span>
        ))}
      </div>
    </section>
  )
}

export default AboutSection


