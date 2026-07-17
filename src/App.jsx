import './App.css'

const services = [
  {
    title: 'Airport Transfers',
    description:
      'JKIA pickups and drop-offs with flight-aware scheduling and professional meet & greet support.',
  },
  {
    title: 'City Transfers',
    description:
      'Reliable transport across Nairobi key zones including Westlands, Karen, Kilimani, Gigiri, and CBD.',
  },
  {
    title: 'Intercity Travel',
    description:
      'Comfortable long-distance rides from Nairobi to Naivasha, Nakuru, Kisumu, and Mombasa.',
  },
  {
    title: 'Corporate Transport',
    description:
      'VIP movement, recurring staff logistics, and event transport tailored for business teams.',
  },
]

const fleetPreview = [
  {
    name: 'Executive SUV',
    capacity: 'Up to 4 passengers',
    luggage: '3 large bags',
  },
  {
    name: 'Luxury Van',
    capacity: 'Up to 7 passengers',
    luggage: '6 medium bags',
  },
  {
    name: 'Business Sedan',
    capacity: 'Up to 3 passengers',
    luggage: '2 large bags',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <p className="brand">JAMBORYDE TRAVEL</p>
        <a className="whatsapp-btn" href="https://wa.me/254700000000" target="_blank" rel="noreferrer">
          WhatsApp Booking
        </a>
      </header>

      <main>
        <section className="hero-section">
          <p className="hero-tag">Nairobi Car Hire • Airport Transfers • Corporate Mobility</p>
          <h1>Your Journey, Our Priority</h1>
          <p className="hero-copy">
            Safe, punctual, and premium transport in Nairobi and beyond. From JKIA pickups to executive travel,
            Jamboryde keeps every trip smooth from first contact to final drop-off.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="primary-btn">
              Book Now
            </a>
            <a href="#services" className="ghost-btn">
              Explore Services
            </a>
          </div>
        </section>

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

        <section className="section fleet-section" id="fleet">
          <div className="section-head">
            <p className="kicker">Fleet Preview</p>
            <h2>Comfort-focused options for solo, family, and business travel</h2>
          </div>
          <div className="fleet-grid">
            {fleetPreview.map((vehicle) => (
              <article key={vehicle.name} className="fleet-card">
                <div className="vehicle-thumb" aria-hidden="true"></div>
                <h3>{vehicle.name}</h3>
                <p>{vehicle.capacity}</p>
                <p>{vehicle.luggage}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section trust-section">
          <div>
            <p className="kicker">Why Jamboryde</p>
            <h2>Professional drivers, dependable timing, and premium comfort</h2>
          </div>
          <ul>
            <li>Flight delay handling for airport pickups</li>
            <li>Route-ready local drivers with customer-first service</li>
            <li>Clear communication via WhatsApp, phone, and email</li>
            <li>Corporate-ready transport for teams, VIPs, and events</li>
          </ul>
        </section>

        <section className="booking-banner" id="booking">
          <h2>Need a ride now or planning ahead?</h2>
          <p>Share your route, date, and passenger details, and get a fast response from our team.</p>
          <a className="primary-btn" href="https://wa.me/254700000000" target="_blank" rel="noreferrer">
            Request Quote
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>Jamboryde Travel · Nairobi, Kenya</p>
        <p>Phone: +254 700 000 000 · Email: bookings@jamboryde.com</p>
      </footer>
    </div>
  )
}

export default App
