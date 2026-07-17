import PageIntro from '../components/common/PageIntro'
import { BookingBanner } from '../components/sections'
import SeoMeta from '../components/seo/SeoMeta'
import { testimonials } from '../data/siteContent'

function TestimonialsPage() {
  return (
    <>
      <SeoMeta
        title="Customer Testimonials"
        description="Read what travelers and corporate clients say about Jamboryde Travel's reliability, professionalism, and comfort."
        path="/testimonials"
      />
      <PageIntro
        kicker="Testimonials"
        title="What our customers say about their Jamboryde experience"
        description="Feedback from airport transfer riders, corporate teams, and families traveling in Nairobi and beyond."
      />
      <section className="section">
        <div className="card-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="card">
              <h3>{item.name}</h3>
              <p className="testimonial-role">{item.role}</p>
              <p>{item.quote}</p>
            </article>
          ))}
        </div>
      </section>
      <BookingBanner />
    </>
  )
}

export default TestimonialsPage
