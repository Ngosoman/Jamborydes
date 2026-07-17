import { Link } from 'react-router-dom'
import { fleetPreview } from '../../data/siteContent'
import { ROUTES } from '../../routes/paths'
import { getPrefetchHandlers } from '../../routes/prefetch'
import { trackEvent } from '../../utils/analytics'

function FleetDetailsSection() {
  return (
    <section className="section fleet-details-section" id="fleet-details">
      <div className="section-head">
        <p className="kicker">Fleet Details</p>
        <h2>Choose the right vehicle for your route, comfort needs, and group size</h2>
      </div>

      <div className="fleet-details-grid">
        {fleetPreview.map((vehicle) => (
          <article key={vehicle.name} className="fleet-details-card">
            {vehicle.image ? (
              <img className="vehicle-thumb" src={vehicle.image} alt={vehicle.imageAlt || vehicle.name} loading="lazy" />
            ) : (
              <div className="vehicle-thumb" aria-hidden="true"></div>
            )}

            <p className="fleet-category">{vehicle.category}</p>
            <h3>{vehicle.name}</h3>
            <p>{vehicle.capacity}</p>
            <p>{vehicle.luggage}</p>
            <p className="fleet-best-for">Best for: {vehicle.bestFor}</p>

            <ul className="fleet-feature-list">
              {(vehicle.features || []).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <Link
              to={ROUTES.BOOK}
              className="primary-btn fleet-book-btn"
              {...getPrefetchHandlers(ROUTES.BOOK)}
              onClick={() =>
                trackEvent('cta_click', {
                  location: 'fleet_details',
                  label: `Book ${vehicle.name}`,
                  target: ROUTES.BOOK,
                })
              }
            >
              Book This Vehicle
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FleetDetailsSection
