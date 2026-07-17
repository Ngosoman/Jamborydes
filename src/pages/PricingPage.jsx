import PageIntro from '../components/common/PageIntro'
import { BookingBanner, FaqSection, PricingSection } from '../components/sections'
import SeoMeta from '../components/seo/SeoMeta'

function PricingPage() {
  return (
    <>
      <SeoMeta
        title="Nairobi Transfer Pricing"
        description="View popular route estimates for JKIA transfers and intercity rides, then request a custom quote based on your trip details."
        path="/pricing"
      />
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
