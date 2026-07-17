import { Link } from 'react-router-dom'

function BookingBanner() {
  return (
    <section className="booking-banner" id="booking">
      <h2>Need a ride now or planning ahead?</h2>
      <p>Share your route, date, and passenger details, and get a fast response from our team.</p>
      <Link className="primary-btn" to="/book">
        Request Quote
      </Link>
    </section>
  )
}

export default BookingBanner
