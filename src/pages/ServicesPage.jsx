import PageIntro from '../components/common/PageIntro'
import { BookingBanner, ServicesSection, TrustSection } from '../components/sections'

function ServicesPage() {
  return (
    <>
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
