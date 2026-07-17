import PageIntro from '../components/common/PageIntro'
import { BookingBanner, FaqSection, PricingSection } from '../components/sections'

function PricingPage() {
  return (
    <>
      <PageIntro
        kicker="Pricing"
        title="Transparent route estimates for popular Nairobi and intercity trips"
        description="Get a quick estimate from our common routes, then receive your final quote based on vehicle type and trip timing."
      />
      <PricingSection />
      <FaqSection />
      <BookingBanner />
    </>
  )
}

export default PricingPage
