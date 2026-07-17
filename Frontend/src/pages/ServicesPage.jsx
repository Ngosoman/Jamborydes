import PageIntro from '../components/common/PageIntro'
import { BookingBanner, ServicesSection, TrustSection } from '../components/sections'
import SeoMeta from '../components/seo/SeoMeta'

function ServicesPage() {
  return (
    <>
      <SeoMeta
        title="Transport Services in Nairobi"
        description="Explore airport transfers, city trips, intercity routes, group travel, and corporate transport services from Jamboryde Travel."
        path="/services"
      />
      <PageIntro
        kicker="Services"
        title="Transport services for airport, city, intercity, and corporate travel"
        description="Choose the service category that fits your trip and request a tailored quote from our Nairobi operations team."
      />
      <ServicesSection />
      <TrustSection />
      <BookingBanner />
    </>
  )
}

export default ServicesPage
