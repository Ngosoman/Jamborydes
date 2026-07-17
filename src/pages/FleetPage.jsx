import PageIntro from '../components/common/PageIntro'
import { BookingBanner, FleetSection } from '../components/sections'

function FleetPage() {
  return (
    <>
      <PageIntro
        kicker="Fleet"
        title="Vehicle options designed for comfort, class, and capacity"
        description="From executive sedans to luxury vans, our fleet supports solo travel, families, and corporate movement."
      />
      <FleetSection />
      <BookingBanner />
    </>
  )
}

export default FleetPage
