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
  {
    title: 'Group Transfers',
    description:
      'Large-capacity movement for schools, churches, tour groups, and event attendees.',
  },
  {
    title: 'Car Hire',
    description:
      'Chauffeur-driven and executive hire options designed for comfort, flexibility, and style.',
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

const popularRoutes = [
  {
    route: 'JKIA -> Westlands',
    fare: 'From KES 4,500',
    note: 'Standard sedan, daytime rate',
  },
  {
    route: 'JKIA -> Karen',
    fare: 'From KES 5,500',
    note: 'Includes meet & greet support',
  },
  {
    route: 'Nairobi -> Naivasha',
    fare: 'From KES 13,500',
    note: 'One-way, sedan category',
  },
  {
    route: 'Nairobi -> Nakuru',
    fare: 'From KES 18,000',
    note: 'One-way, intercity service',
  },
]

const faqs = [
  {
    question: 'What happens if my flight is delayed?',
    answer:
      'For airport transfers, we monitor flight updates and adjust pickup timing so you are not charged for standard delays.',
  },
  {
    question: 'Can I book for corporate teams and VIP guests?',
    answer:
      'Yes. We support recurring company transport, executive pickups, and event logistics with dedicated coordination.',
  },
  {
    question: 'How do I confirm my booking?',
    answer:
      'You can request via WhatsApp or phone, then our team confirms your route, vehicle, and final fare before dispatch.',
  },
  {
    question: 'Do you offer intercity transfers outside Nairobi?',
    answer:
      'Yes. Common routes include Naivasha, Nakuru, Kisumu, and Mombasa. Custom routes are also available on request.',
  },
]

const serviceAreas = ['Nairobi CBD', 'Westlands', 'Karen', 'Kilimani', 'Gigiri', 'JKIA', 'Naivasha', 'Nakuru']

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <p className="brand">JAMBORYDE TRAVEL</p>
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#fleet">Fleet</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>
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

        <section className="section about-section" id="about">
          <div className="section-head">
            <p className="kicker">About</p>
            <h2>Nairobi transport built on reliability, safety, and professionalism</h2>
          </div>
          <p>
            Jamboryde Travel provides airport transfers, city rides, intercity travel, and corporate transport with a
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

        <section className="section contact-section" id="contact">
          <div className="section-head">
            <p className="kicker">Contact</p>
            <h2>Reach us through your preferred channel</h2>
          </div>
          <div className="contact-grid">
            <article className="contact-card">
              <h3>Phone</h3>
              <p>+254 700 000 000</p>
            </article>
            <article className="contact-card">
              <h3>Email</h3>
              <p>bookings@jamboryde.com</p>
            </article>
            <article className="contact-card">
              <h3>Operating Hours</h3>
              <p>Mon - Sun: 24/7 by booking</p>
            </article>
            <article className="contact-card">
              <h3>Office Base</h3>
              <p>Nairobi, Kenya</p>
            </article>
          </div>
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
