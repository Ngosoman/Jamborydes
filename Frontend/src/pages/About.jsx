import { Link } from 'react-router-dom';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1781504798134-31600e8579ba?w=1400&h=700&fit=crop&auto=format',
  team: 'https://images.unsplash.com/photo-1627285886624-5cd637dafb50?w=600&h=800&fit=crop&auto=format',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A1128] py-32 md:py-40 overflow-hidden">
        <img src={IMG.hero} alt="Nairobi skyline" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/95 via-[#0A1128]/70 to-[#0A1128]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">Built for<br /><em className="italic">Nairobi.</em></h1>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed">Jamboryde has been providing premium car rental and chauffeur services in Nairobi since we opened our doors. Here is our story.</p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">Our Story</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A1128] leading-tight mb-8">How it<br /><em className="italic">all started.</em></h2>
              <div className="space-y-5 text-[#334155] leading-relaxed text-base">
                <p>Jamboryde was born from a simple frustration: the gap between what Nairobi professionals wanted from a car hire experience and what the market offered. You could either rent a tired fleet car with unreliable service, or pay hotel concierge rates for a luxury vehicle.</p>
                <p>We set out to bridge that gap. A fleet of late-model Mercedes, Toyotas, and executive vans. Fully insured, professionally maintained, and available for self-drive or with a vetted professional driver — at transparent prices with no hidden charges.</p>
                <p>Today, Jamboryde serves individual travellers, families, corporate clients, and tour operators across Nairobi and beyond. Our clients trust us because we do exactly what we say we will — every time.</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[500px] bg-[#131E35]"><img src={IMG.team} alt="Professional driver" className="w-full h-full object-cover" /></div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl shadow-black/10 p-5">
                <p className="font-display text-3xl font-bold text-[#0A1128]">7+</p>
                <p className="text-sm text-[#334155]">Years of<br />service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16"><p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">Our Values</p><h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A1128] leading-tight">What we<br /><em className="italic">stand for.</em></h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Reliability', desc: 'When we say a car will be ready at 7:00 AM, it is ready at 7:00 AM. Flight delayed? We adjust. Schedule changes? We adapt. Our word is our bond.' },
              { title: 'Transparency', desc: 'The price you see is the price you pay. No hidden fees, no surprise charges, no last-minute additions. Insurance, roadside assistance, unlimited mileage — all included.' },
              { title: 'Quality', desc: 'We retire vehicles at 5 years old. Every car is serviced on schedule. Every detail matters — from the cleanliness of the interior to the tread on the tyres.' },
            ].map((v, i) => (
              <div key={i} className="bg-[#F7F5F0] rounded-2xl p-8 border border-[#0A1128]/[0.04]">
                <div className="w-2 h-2 rounded-full bg-[#F97316] mb-6" />
                <h3 className="font-display text-xl font-bold text-[#0A1128] mb-3">{v.title}</h3>
                <p className="text-sm text-[#334155] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1128] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to experience the difference?</h2>
          <p className="text-white/60 mb-8">Book a car today. Self-drive or chauffeur — the same quality fleet, the same transparent pricing.</p>
          <Link to="/contact" className="inline-flex bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-10 py-4 rounded-full text-base tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30">Book Now</Link>
        </div>
      </section>
    </>
  );
}
