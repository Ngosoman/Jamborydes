import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Wanjiku M.',
    role: 'Business Traveler',
    text: 'The best car hire service in Nairobi. Always on time, super professional drivers, and spotless vehicles. Their WhatsApp updates make everything so easy. I use them weekly.',
    rating: 5,
  },
  {
    name: 'David O.',
    role: 'Corporate Client',
    text: 'Monthly contract for our executive team. Reliable, flexible, and crystal-clear invoicing. They feel less like a vendor and more like part of our company.',
    rating: 5,
  },
  {
    name: 'James & Sarah K.',
    role: 'Regular Clients, Karen',
    text: 'Used them for airport runs, city transfers, and a weekend trip to Naivasha. Every single ride was flawless. Clean cars, polite drivers, fair prices.',
    rating: 5,
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="section-padding bg-savannah-50 relative pattern-african-dots">
      <div className="absolute top-0 left-0 right-0 flag-divider">
        <div /><div /><div />
      </div>

      <div className="container-max relative pt-4">
        <div className="mb-10">
          <span className="section-badge">Client Reviews</span>
          <h2 className="section-title mt-3">What Our Clients Say</h2>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl">
            Real feedback from people who ride with us across Nairobi and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="card-kenyan p-5 relative">
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">★</span>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center shadow">
                  <span className="text-orange-400 font-bold text-xs">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-bold text-navy-900 text-xs">{t.name}</p>
                  <p className="text-[10px] text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/testimonials" className="btn-secondary text-sm px-8">
            Read All Reviews &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
