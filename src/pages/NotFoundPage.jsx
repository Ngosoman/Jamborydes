import { Link, useLocation } from 'react-router-dom'
import SeoMeta from '../components/seo/SeoMeta'

function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <>
      <SeoMeta
        title="Page Not Found"
        description="The requested page could not be found on Jamboryde Travel."
        path={pathname}
        noindex
      />
      <section className="page-intro">
        <p className="kicker">404</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist. Return to the home page to continue browsing Jamboryde Travel.</p>
        <Link to="/" className="primary-btn">
          Go to Home
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage
