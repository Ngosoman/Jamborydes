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
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema'
import SeoMeta from '../components/seo/SeoMeta'

function HomePage() {
  return (
    <>
      <SeoMeta
        title="Airport Transfers and Car Hire in Nairobi"
        description="Jamboryde Travel provides reliable airport transfers, city rides, intercity travel, and corporate transport in Nairobi and beyond."
        path="/"
      />
      <LocalBusinessSchema />
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
