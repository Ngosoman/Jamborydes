import PageIntro from '../components/common/PageIntro'
import { BookingBanner, FleetDetailsSection, FleetGallerySection, FleetSection } from '../components/sections'
import SeoMeta from '../components/seo/SeoMeta'

function FleetPage() {
  return (
    <>
      <SeoMeta
        title="Fleet Options for Nairobi Transfers"
        description="Browse Jamboryde vehicle options for solo, family, and corporate transport including sedans, SUVs, and luxury vans."
        path="/fleet"
      />
      <PageIntro
        kicker="Fleet"
        title="Vehicle options designed for comfort, class, and capacity"
        description="From executive sedans to luxury vans, our fleet supports solo travel, families, and corporate movement."
      />
      <FleetSection />
      <FleetDetailsSection />
      <FleetGallerySection />
      <BookingBanner />
    </>
  )
}

export default FleetPage
