import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page-intro">
      <p className="kicker">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist. Return to the home page to continue browsing Jamboryde Travel.</p>
      <Link to="/" className="primary-btn">
        Go to Home
      </Link>
    </section>
  )
}

export default NotFoundPage
