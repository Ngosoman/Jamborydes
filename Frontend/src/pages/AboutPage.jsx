import PageIntro from '../components/common/PageIntro'
import { BookingBanner, AboutSection, TrustSection } from '../components/sections'
import SeoMeta from '../components/seo/SeoMeta'
import { companyValues } from '../data/siteContent'

function AboutPage() {
  return (
    <>
      <SeoMeta
        title="About Jamborydes Travel"
        description="Learn about Jamborydes Travel's mission, service standards, and commitment to safe, reliable, professional transport in Nairobi."
        path="/about"
      />
      <PageIntro
        kicker="About"
        title="A Nairobi transport brand built on trust, punctuality, and comfort"
        description="Jamborydes Travel serves individual travelers, families, and corporate clients with airport transfers, city rides, and intercity travel."
      />
      <AboutSection />
      <section className="section">
        <div className="section-head">
          <p className="kicker">Our Values</p>
          <h2>How we run every trip and every client interaction</h2>
        </div>
        <div className="card-grid">
          {companyValues.map((value) => (
            <article key={value.title} className="card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>
      <TrustSection />
      <BookingBanner />
    </>
  )
}

export default AboutPage


