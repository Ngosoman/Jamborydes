import PageIntro from '../components/common/PageIntro'
import { BookingBanner, ContactSection, FaqSection } from '../components/sections'
import SeoMeta from '../components/seo/SeoMeta'

function FaqsPage() {
  return (
    <>
      <SeoMeta
        title="Frequently Asked Questions"
        description="Find answers about booking, airport delays, pricing, routes, and transport coverage from Jamboryde Travel."
        path="/faqs"
      />
      <PageIntro
        kicker="FAQs"
        title="Answers to common booking and travel questions"
        description="Get quick clarity on flight delays, confirmations, route coverage, and service expectations before you book."
      />
      <FaqSection />
      <ContactSection />
      <BookingBanner />
    </>
  )
}

export default FaqsPage
