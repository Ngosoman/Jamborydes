import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/paths'

function HeroSection() {
  return (
    <section className="hero-section">
      <p className="hero-tag">Nairobi Car Hire • Airport Transfers • Corporate Mobility</p>
      <h1>Your Journey, Our Priority</h1>
      <p className="hero-copy">
        Safe, punctual, and premium transport in Nairobi and beyond. From JKIA pickups to executive travel,
        Jamboryde keeps every trip smooth from first contact to final drop-off.
      </p>
      <div className="hero-actions">
        <Link to={ROUTES.BOOK} className="primary-btn">
          Book Now
        </Link>
        <Link to={ROUTES.SERVICES} className="ghost-btn">
          Explore Services
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
