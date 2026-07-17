import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import FleetPage from './pages/FleetPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/BookPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
