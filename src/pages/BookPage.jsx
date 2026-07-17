import PageIntro from '../components/common/PageIntro'
import BookingForm from '../components/forms/BookingForm'
import SeoMeta from '../components/seo/SeoMeta'

function BookPage() {
  return (
    <>
      <SeoMeta
        title="Book Airport Transfer or Car Hire"
        description="Submit your transfer details online and send your quote request to Jamboryde Travel via WhatsApp for fast confirmation."
        path="/book"
      />
      <PageIntro
        kicker="Book Online"
        title="Request your transfer or car hire quote in under two minutes"
        description="Submit your trip details and we will confirm your booking via WhatsApp with vehicle options, timing, and final fare."
      />
      <BookingForm />
    </>
  )
}

export default BookPage
