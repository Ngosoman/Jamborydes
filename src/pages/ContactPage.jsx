import PageIntro from '../components/common/PageIntro'
import { ContactSection, FaqSection } from '../components/sections'

function ContactPage() {
  return (
    <>
      <PageIntro
        kicker="Contact"
        title="Talk to Jamboryde and plan your next trip with confidence"
        description="Reach our team by phone, email, or WhatsApp and get quick support for personal, family, and corporate bookings."
      />
      <ContactSection />
      <FaqSection />
    </>
  )
}

export default ContactPage
