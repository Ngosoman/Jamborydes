import PageIntro from '../components/common/PageIntro'
import { ContactSection, FaqSection } from '../components/sections'
import SeoMeta from '../components/seo/SeoMeta'

function ContactPage() {
  return (
    <>
      <SeoMeta
        title="Contact Jamborydes Travel"
        description="Reach Jamborydes Travel by phone, email, or WhatsApp for airport transfers, car hire, and corporate bookings in Nairobi."
        path="/contact"
      />
      <PageIntro
        kicker="Contact"
        title="Talk to Jamborydes and plan your next trip with confidence"
        description="Reach our team by phone, email, or WhatsApp and get quick support for personal, family, and corporate bookings."
      />
      <ContactSection />
      <FaqSection />
    </>
  )
}

export default ContactPage


