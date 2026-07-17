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
} from '../components/sections'

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FleetSection />
      <PricingSection />
      <FaqSection />
      <TrustSection />
      <BookingBanner />
      <ContactSection />
    </>
  )
}

export default HomePage
