import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import FleetPage from './pages/FleetPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/BookPage'
import NotFoundPage from './pages/NotFoundPage'
import { LEGACY_REDIRECTS, ROUTES } from './routes/paths'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
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
      </main>

      <Footer />
    </div>
  )
}

export default App
