import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import {
  AboutSection,
  BookingBanner,
  ContactSection,
  FaqSection,
  FleetSection,
  HeroSection,
  PricingSection,
  ServicesSection,
  TrustSection,
} from './components/sections'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FleetSection />
        <PricingSection />
        <FaqSection />
        <TrustSection />
        <BookingBanner />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
