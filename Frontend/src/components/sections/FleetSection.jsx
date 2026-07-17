import { fleetPreview } from '../../data/siteContent'

function FleetSection() {
  return (
    <section className="section fleet-section" id="fleet">
      <div className="section-head">
        <p className="kicker">Fleet Preview</p>
        <h2>Comfort-focused options for solo, family, and business travel</h2>
      </div>
      <div className="fleet-grid">
        {fleetPreview.map((vehicle) => (
          <article key={vehicle.name} className="fleet-card">
            {vehicle.image ? (
              <img className="vehicle-thumb" src={vehicle.image} alt={vehicle.imageAlt || vehicle.name} loading="lazy" />
            ) : (
              <div className="vehicle-thumb" aria-hidden="true"></div>
            )}
            <h3>{vehicle.name}</h3>
            <p>{vehicle.capacity}</p>
            <p>{vehicle.luggage}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FleetSection
