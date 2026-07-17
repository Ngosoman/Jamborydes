import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AnalyticsDebugPanel from './components/common/AnalyticsDebugPanel'
import { LEGACY_REDIRECTS, ROUTES } from './routes/paths'
import {
  loadAboutPage,
  loadBookPage,
  loadContactPage,
  loadFaqsPage,
  loadFleetPage,
  loadHomePage,
  loadNotFoundPage,
  loadPricingPage,
  loadServicesPage,
  loadTestimonialsPage,
} from './routes/prefetch'
import { trackPageView } from './utils/analytics'

const HomePage = lazy(loadHomePage)
const AboutPage = lazy(loadAboutPage)
const ServicesPage = lazy(loadServicesPage)
const FleetPage = lazy(loadFleetPage)
const PricingPage = lazy(loadPricingPage)
const FaqsPage = lazy(loadFaqsPage)
const TestimonialsPage = lazy(loadTestimonialsPage)
const ContactPage = lazy(loadContactPage)
const BookPage = lazy(loadBookPage)
const NotFoundPage = lazy(loadNotFoundPage)

function App() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname, {
      search: location.search,
    })
  }, [location.pathname, location.search])

  return (
    <div className="site-shell">
      <Header />

      <main>
        <Suspense fallback={<div className="route-loader">Loading page...</div>}>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.FLEET} element={<FleetPage />} />
            <Route path={ROUTES.PRICING} element={<PricingPage />} />
            <Route path={ROUTES.FAQS} element={<FaqsPage />} />
            <Route path={ROUTES.TESTIMONIALS} element={<TestimonialsPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            <Route path={ROUTES.BOOK} element={<BookPage />} />
            {LEGACY_REDIRECTS.map((redirect) => (
              <Route key={redirect.from} path={redirect.from} element={<Navigate to={redirect.to} replace />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <AnalyticsDebugPanel />
    </div>
  )
}

export default App
