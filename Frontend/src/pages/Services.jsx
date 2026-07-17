import { Link } from 'react-router-dom';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1687992176093-6417a93fa3d0?w=1400&h=700&fit=crop&auto=format',
};

function IconPlane() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" /></svg>); }
function IconBriefcase() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>); }
function IconClock() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>); }
function IconMap() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /></svg>); }
function IconUsers() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>); }
function IconShield() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>); }

export default function Services() {
  const services = [
    {
      icon: <IconShield />, title: 'Self-Drive Hire', tag: 'Most Popular',
      desc: 'Pick up a late-model car from our Nairobi yard and drive yourself. Every vehicle is comprehensively insured, serviced before each rental, and comes with unlimited mileage. 24/7 roadside assistance is included so you\'re never stranded.',
      includes: ['Comprehensive insurance', 'Unlimited mileage', '24/7 roadside assistance', 'Professional detailing', 'Spare tyre & tools', 'Flexible pickup & return'],
      pricing: 'From KES 3,500/day. Refundable deposit required.',
    },
    {
      icon: <IconBriefcase />, title: 'Chauffeur Service',
      desc: 'A professional, vetted driver at your disposal. Perfect for business meetings, corporate events, or when you simply want to relax and let someone else navigate Nairobi traffic. Your driver knows the city inside out.',
      includes: ['Professional vetted driver', 'Meet & greet service', 'Flight monitoring at JKIA', 'Flexible itinerary', 'Discretion guaranteed', 'Bottled water & amenities'],
      pricing: 'From KES 5,000/day + driver fee. No deposit for chauffeur bookings.',
    },
    {
      icon: <IconPlane />, title: 'Airport Pickup & Dropoff',
      desc: 'JKIA and Wilson Airport transfers — self-drive or with a driver. For chauffeur pickups, we track your flight and adjust for delays at no extra charge. Self-drivers can collect the car directly from the airport parking lot.',
      includes: ['Flight tracking & delay adjustment', 'Meet & greet inside terminal', '60 mins complimentary wait', 'Luggage assistance', 'Expressway toll included', 'Child seats on request'],
      pricing: 'From KES 2,500 one-way. No surge pricing — ever.',
    },
    {
      icon: <IconMap />, title: 'Long Distance Hire',
      desc: 'Nairobi to Mombasa, Naivasha, Nakuru, Kisumu, or anywhere in Kenya. Self-drive or with a driver — the same competitive rates apply across the country. Perfect for weekend getaways, business trips, or family visits.',
      includes: ['Unlimited mileage', 'Multi-day discounts', 'One-way drop-off available', 'Driver accommodation arranged', 'SGR station transfers', 'Custom itineraries'],
      pricing: 'From KES 7,500/day. Multi-day discounts from 3+ days.',
    },
    {
      icon: <IconClock />, title: 'Hourly Charter',
      desc: 'Need a car and driver for a few hours? Ideal for meetings across town, shopping, or a dinner engagement. Pay only for the hours you need, not a full day. Available with any vehicle in our fleet.',
      includes: ['Minimum 3 hours', 'Flexible extensions', 'Multiple stops allowed', 'Driver waits at each stop', 'Evening/late night available', 'Same fleet, same quality'],
      pricing: 'From KES 1,500/hour. Minimum 3-hour booking.',
    },
    {
      icon: <IconUsers />, title: 'Group Transport',
      desc: 'Moving a team, family, or group? Our executive minivans seat up to 8 passengers comfortably with luggage. Perfect for airport group pickups, corporate events, weddings, or church outings.',
      includes: ['Up to 8 passengers', 'Captain chairs', 'Luggage compartment', 'Dual-zone AC', 'USB charging for all seats', 'Privacy screens'],
      pricing: 'From KES 8,500/day. Available self-drive or with driver.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A1128] py-32 md:py-40 overflow-hidden">
        <img src={IMG.hero} alt="Nairobi service" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/95 via-[#0A1128]/70 to-[#0A1128]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">Our Services</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">Everything you need<br /><em className="italic">to move.</em></h1>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed">Self-drive or chauffeur. Airport transfers or long distance. Hourly charters or group transport — one fleet, one number to call.</p>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12 md:space-y-16">
            {services.map((s, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:rtl' : ''}`}>
                <div className={`bg-white rounded-2xl p-10 md:p-12 border border-[#0A1128]/[0.06] shadow-sm ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-[#F97316]">{s.icon}</span>
                    {s.tag && <span className="text-[10px] font-semibold bg-[#F97316]/10 text-[#F97316] px-3 py-1 rounded-full tracking-wide uppercase">{s.tag}</span>}
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[#0A1128] mb-4">{s.title}</h2>
                  <p className="text-[#334155] text-base leading-relaxed mb-8">{s.desc}</p>
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0A1128]/40 mb-4">What&rsquo;s included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.includes.map((inc, j) => (
                        <div key={j} className="flex items-center gap-2.5 text-sm text-[#334155]">
                          <span className="w-1 h-1 rounded-full bg-[#F97316] flex-shrink-0" />
                          {inc}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#F7F5F0] rounded-xl p-5 mb-6">
                    <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#0A1128]/40 mb-1">Pricing</p>
                    <p className="text-sm font-semibold text-[#0A1128]">{s.pricing}</p>
                  </div>
                  <Link to="/contact" className="inline-flex bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-8 py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200">Book This Service</Link>
                </div>
                <div className="lg:flex lg:items-center lg:justify-center">
                  <div className="text-center lg:text-left" style={{ direction: 'ltr' }}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F97316]/10 text-[#F97316] mb-6">{s.icon}</div>
                    <h3 className="font-display text-2xl font-bold text-[#0A1128] mb-3">{s.title}</h3>
                    <p className="text-sm text-[#334155]/70 leading-relaxed max-w-sm">Available for self-drive or with a professional driver. Book online, by phone, or on WhatsApp.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1128] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
          <p className="text-white/60 mb-8">Call or WhatsApp us. We&rsquo;ll help you choose the right car and service — no pressure, just answers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-10 py-4 rounded-full text-base tracking-wide transition-all duration-200">Get in Touch</Link>
            <a href="tel:+254700000000" className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.15] text-white font-medium px-10 py-4 rounded-full text-base tracking-wide transition-all duration-200 text-center">+254 700 000 000</a>
          </div>
        </div>
      </section>
    </>
  );
}
