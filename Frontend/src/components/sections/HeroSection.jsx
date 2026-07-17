import { Link } from 'react-router-dom'
import { heroSlides } from '../../data/siteContent'
import { ROUTES } from '../../routes/paths'
import { getPrefetchHandlers } from '../../routes/prefetch'
import { trackEvent } from '../../utils/analytics'

const SLIDE_INTERVAL_SECONDS = 5

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-slideshow" aria-hidden="true">
        {heroSlides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className="hero-slide"
            style={{
              '--slide-index': index,
              '--slide-count': heroSlides.length,
              '--slide-interval': `${SLIDE_INTERVAL_SECONDS}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-tag">Nairobi Car Hire • Airport Transfers • Corporate Mobility</p>
        <h1>Your Journey, Our Priority</h1>
        <p className="hero-copy">
          Safe, punctual, and premium transport in Nairobi and beyond. From JKIA pickups to executive travel,
          Jamborydes keeps every trip smooth from first contact to final drop-off.
        </p>
        <div className="hero-actions">
          <Link
            to={ROUTES.BOOK}
            className="primary-btn"
            {...getPrefetchHandlers(ROUTES.BOOK)}
            onClick={() =>
              trackEvent('cta_click', {
                location: 'hero',
                label: 'Book Now',
                target: ROUTES.BOOK,
              })
            }
          >
            Book Now
          </Link>
          <Link
            to={ROUTES.SERVICES}
            className="ghost-btn"
            {...getPrefetchHandlers(ROUTES.SERVICES)}
            onClick={() =>
              trackEvent('cta_click', {
                location: 'hero',
                label: 'Explore Services',
                target: ROUTES.SERVICES,
              })
            }
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
