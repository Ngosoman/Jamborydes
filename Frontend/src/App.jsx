import './App.css'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { LEGACY_REDIRECTS, ROUTES } from './routes/paths'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const FleetPage = lazy(() => import('./pages/FleetPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const BookPage = lazy(() => import('./pages/BookPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Suspense fallback={<div className="route-loader">Loading page...</div>}>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.FLEET} element={<FleetPage />} />
            <Route path={ROUTES.PRICING} element={<PricingPage />} />
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
    </div>
  )
}

export default App
