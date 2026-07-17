import { Link } from 'react-router-dom';

const testimonials = [
  { name: 'Wanjiku M.', role: 'Business Traveler, Nairobi', text: 'I travel weekly for work and Jamboryde has changed the game. Always on time, professional drivers, spotless vehicles. WhatsApp updates keep me informed. Best transport service in Nairobi.', rating: 5, date: '2 weeks ago' },
  { name: 'James & Sarah T.', role: 'Tourists, United Kingdom', text: 'Used Jamboryde for our entire 10-day Kenya trip — airport pickup, city tour, Naivasha day trip. Every ride was flawless. Our driver was incredibly knowledgeable. Absolutely recommend.', rating: 5, date: '1 month ago' },
  { name: 'Amina K.', role: 'Corporate Client, Westlands', text: 'Monthly contract for our executive team. Reliable, flexible, and clear billing. Our account manager responds to last-minute changes within minutes. A true partner for any Kenyan business.', rating: 5, date: '3 weeks ago' },
  { name: 'Peter O.', role: 'Family Traveler, Kilimani', text: 'Booked a family trip to Naivasha with a toddler and baby. They provided two child seats without us asking. The Alphard was perfect — so much space! Patient driver, smooth journey. Book again for Christmas.', rating: 5, date: '1 month ago' },
  { name: 'Grace N.', role: 'Wedding Planner, Karen', text: 'Organized guest transport for a wedding of 80 people across three venues. Jamboryde coordinated four vans, everything ran like clockwork. Drivers smartly dressed, vehicles immaculate. The bride mentioned it in her speech!', rating: 5, date: '2 months ago' },
  { name: 'David O.', role: 'Frequent Flyer, Runda', text: 'I use Jamboryde for airport runs twice a month. They track my flights and are always waiting — even when KQ is delayed. Meet & greet at JKIA makes arrivals genuinely stress-free. Nobody comes close.', rating: 5, date: '1 week ago' },
  { name: 'Emily C.', role: 'NGO Director, Gigiri', text: 'Our NGO relies on Jamboryde for field visits across rural Kenya. Safe, reliable intercity service. Drivers handle rough terrain like pros. Consolidated invoicing makes admin easy too.', rating: 5, date: '3 weeks ago' },
  { name: 'Tom M.', role: 'Tech Founder, Nairobi', text: 'Booked the executive sedan for a full day of investor meetings across Nairobi. The driver knew every shortcut, avoided every jam, got me to all six meetings on time. Impressive Mercedes. My investors noticed.', rating: 5, date: '1 month ago' },
  { name: 'Faith W.', role: 'Tour Operator, Mombasa', text: 'We partner with Jamboryde for clients flying into JKIA. Seamless handover — they pick up guests, handle luggage, deliver them fresh to their hotel. Our clients consistently mention the warm welcome.', rating: 5, date: '2 months ago' },
];

export default function Testimonials() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580060839135-75a1f0a3f47b?w=1920&h=800&fit=crop&auto=format"
            alt="Nairobi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/80 to-navy-950/90" />
          <div className="absolute inset-0 pattern-african-dots opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative pt-8">
          <div className="flag-ribbon w-20 mx-auto mb-5" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Client Reviews</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Real stories from real people across Kenya. Your satisfaction drives everything we do.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-savannah-50 relative pattern-african-lines">
        <div className="absolute top-0 left-0 right-0 flag-divider"><div /><div /><div /></div>
        <div className="container-max relative pt-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="card-kenyan p-5">
                <div className="flex gap-0.5 mb-2.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-xs">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-xs">{t.name}</p>
                    <p className="text-[10px] text-gray-400">{t.role} &middot; {t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary stats */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-xl font-black text-navy-900 mb-8">Trusted Across Kenya</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: '4.9 / 5', label: 'Google Rating', sub: '200+ reviews' },
              { value: '98%', label: 'On-Time Rate', sub: 'Punctuality is our pride' },
              { value: '95%', label: 'Repeat Clients', sub: 'Most come back again & again' },
            ].map((stat) => (
              <div key={stat.label} className="bg-savannah-50 rounded-lg p-5 border border-savannah-200">
                <p className="text-2xl font-black text-orange-600 mb-1">{stat.value}</p>
                <p className="font-bold text-navy-900 text-sm">{stat.label}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy-900 text-center relative">
        <div className="flag-ribbon absolute top-0 left-0 right-0" />
        <div className="container-max">
          <h2 className="text-xl font-black text-white mb-3">Join Hundreds of Happy Clients</h2>
          <p className="text-gray-400 text-sm mb-5">Experience the Jamboryde difference. Karibu!</p>
          <Link to="/book" className="btn-primary text-sm px-10 py-3.5">Hire a Car</Link>
        </div>
      </section>
    </>
  );
}
