import PageIntro from '../components/common/PageIntro'
import BookingForm from '../components/forms/BookingForm'

function BookPage() {
  return (
    <>
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
