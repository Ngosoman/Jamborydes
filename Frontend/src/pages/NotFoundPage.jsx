import { Link, useLocation } from 'react-router-dom'
import SeoMeta from '../components/seo/SeoMeta'
import { getPrefetchHandlers } from '../routes/prefetch'
import { ROUTES } from '../routes/paths'

function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <>
      <SeoMeta
        title="Page Not Found"
        description="The requested page could not be found on Jamborydes Travel."
        path={pathname}
        noindex
      />
      <section className="page-intro">
        <p className="kicker">404</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist. Return to the home page to continue browsing Jamborydes Travel.</p>
        <Link to={ROUTES.HOME} className="primary-btn" {...getPrefetchHandlers(ROUTES.HOME)}>
          Go to Home
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage


