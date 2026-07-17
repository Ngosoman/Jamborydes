import { useState } from 'react';
import { Link } from 'react-router-dom';

const IMG = {
  mercedesS: 'https://images.unsplash.com/photo-1780296269675-169390638617?w=1200&h=680&fit=crop&auto=format',
  mercedesE: 'https://images.unsplash.com/photo-1780296270302-625bbda9362e?w=1200&h=680&fit=crop&auto=format',
  suv: 'https://images.unsplash.com/photo-1566124436323-1bfc77e208f5?w=1200&h=680&fit=crop&auto=format',
  interior: 'https://images.unsplash.com/photo-1780296269553-84ec2dd53065?w=1200&h=680&fit=crop&auto=format',
  fleetHero: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&h=700&fit=crop&auto=format',
};

function IconCheck() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>); }
function IconStar() { return (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FBBF24"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" /></svg>); }

export default function Fleet() {
  const [active, setActive] = useState(0);
  const vehicles = [
    { name: 'Mercedes E-Class', class: 'Business Sedan', passengers: '5', bags: '2', selfDrive: 'KES 7,500', chauffeur: 'KES 10,500', img: IMG.mercedesE, desc: 'The perfect business sedan for Nairobi. Smooth, composed, and efficient — ideal for corporate meetings, airport runs, or a weekend getaway.', amenities: ['Climate control', 'USB charging', 'Bluetooth audio', 'Parking sensors', '360&deg; camera', 'Leather interior'] },
    { name: 'Mercedes S-Class', class: 'Luxury Sedan', passengers: '5', bags: '3', selfDrive: 'KES 12,500', chauffeur: 'KES 16,000', img: IMG.mercedesS, desc: "The pinnacle of automotive luxury. When only the best will do — for board meetings, VIP guests, or a night out that demands an entrance.", amenities: ['Full leather interior', 'Massage seats', 'Onboard Wi-Fi', 'Privacy glass', 'Refrigerated console', 'Burmester sound'] },
    { name: 'Toyota Prado', class: 'Premium SUV', passengers: '7', bags: '5', selfDrive: 'KES 6,500', chauffeur: 'KES 9,500', img: IMG.suv, desc: 'Command the road with authority. The Prado handles Nairobi roads effortlessly and gives you space for the whole family or a group of colleagues.', amenities: ['4WD on demand', 'Leather interior', 'Reversing camera', 'Elevated ride height', '7-passenger capacity', 'Tow bar'] },
    { name: 'Executive Minivan', class: 'Group Transport', passengers: '8', bags: '8', selfDrive: 'KES 8,500', chauffeur: 'KES 14,000', img: IMG.interior, desc: 'Move your team or family in comfort. Captain chairs, dual-zone climate, and room for everyone. Airport runs, corporate events, or group outings.', amenities: ['Captain chairs', 'Rear privacy screens', 'Dual-zone AC', 'USB & power outlets', 'Luggage compartment', 'Sliding doors'] },
  ];
  const v = vehicles[active];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A1128] py-32 md:py-40 overflow-hidden">
        <img src={IMG.fleetHero} alt="Premium vehicle" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/95 via-[#0A1128]/70 to-[#0A1128]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">The Fleet</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">Premium vehicles<br /><em className="italic">for hire.</em></h1>
          <p className="text-white/60 text-lg max-w-md mb-8 leading-relaxed">Late-model Mercedes, Toyota, and executive vehicles. Fully insured and available for self-drive or with a professional driver.</p>
        </div>
      </section>

      {/* Vehicle selector */}
      <section className="bg-[#0A1128] pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide">
            {vehicles.map((veh, i) => (
              <button key={i} onClick={() => setActive(i)} className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${active === i ? 'bg-[#F97316] text-white' : 'bg-white/[0.06] text-white/65 hover:bg-white/[0.12] hover:text-white border border-white/[0.1]'}`}>{veh.name}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#131E35] sticky top-28">
              <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 to-transparent" />
              <div className="absolute bottom-5 left-5 flex gap-2 flex-wrap"><span className="bg-[#F97316] text-white text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wide">{v.selfDrive}/day self-drive</span><span className="bg-white/[0.15] backdrop-blur-sm text-white text-xs px-3.5 py-1.5 rounded-full tracking-wide">{v.chauffeur}/day with driver</span></div>
            </div>
            <div>
              <p className="text-[11px] text-white/50 tracking-[0.2em] uppercase mb-2">{v.class}</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{v.name}</h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">{v.desc}</p>
              <div className="flex gap-8 mb-10"><div><p className="text-3xl font-bold text-white">{v.passengers}</p><p className="text-[11px] text-white/50 tracking-widest uppercase mt-1">Seats</p></div><div className="w-px bg-white/10" /><div><p className="text-3xl font-bold text-white">{v.bags}</p><p className="text-[11px] text-white/50 tracking-widest uppercase mt-1">Bags</p></div><div className="w-px bg-white/10" /><div><p className="text-3xl font-bold text-white">24/7</p><p className="text-[11px] text-white/50 tracking-widest uppercase mt-1">Support</p></div></div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35 mb-4">Features &amp; Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                {v.amenities.map((a, i) => (<div key={i} className="flex items-center gap-2.5 text-sm text-white/65"><span className="text-[#F97316] flex-shrink-0"><IconCheck /></span><span dangerouslySetInnerHTML={{ __html: a }} /></div>))}
              </div>
              <Link to="/contact" className="inline-flex bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-8 py-4 rounded-xl text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25">Book This Vehicle</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet grid */}
      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14"><p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">All Vehicles</p><h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A1128] leading-tight">Every car in<br /><em className="italic">our fleet.</em></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vehicles.map((veh, i) => (
              <div key={i} onClick={() => setActive(i)} className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#0A1128]/[0.06] hover:shadow-2xl hover:shadow-[#0A1128]/10 transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[16/10] bg-[#131E35] overflow-hidden"><img src={veh.img} alt={veh.name} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${active === i ? 'ring-2 ring-[#F97316] ring-offset-2 ring-offset-white' : ''}`} /></div>
                <div className="p-5">
                  <p className="text-[10px] text-[#334155]/60 tracking-widest uppercase mb-1">{veh.class}</p>
                  <h3 className="font-display text-lg font-bold text-[#0A1128] mb-3">{veh.name}</h3>
                  <div className="flex items-center gap-3 mb-4 text-xs text-[#334155]"><span>{veh.passengers} seats</span><span className="text-[#0A1128]/15">&middot;</span><span>{veh.bags} bags</span></div>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center justify-between text-sm"><span className="text-[#334155]/60">Self-drive</span><span className="font-semibold text-[#0A1128]">{veh.selfDrive}/day</span></div>
                    <div className="flex items-center justify-between text-sm"><span className="text-[#334155]/60">With driver</span><span className="font-semibold text-[#0A1128]">{veh.chauffeur}/day</span></div>
                  </div>
                  <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <IconStar key={j} />)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-[#0A1128] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">Our Promise</p>
          <h3 className="font-display text-3xl font-bold text-white mb-16">Every hire includes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ emoji: '🛡️', label: 'Comprehensive Insurance' }, { emoji: '🔧', label: '24/7 Roadside Assist' }, { emoji: '🧼', label: 'Professional Detailing' }, { emoji: '📞', label: 'Dedicated Support Line' }].map((p, i) => (
              <div key={i}><span className="text-3xl block mb-3">{p.emoji}</span><p className="text-white/60 text-sm">{p.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F5F0] py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-[#0A1128] mb-4">Ready to book?</h2>
          <p className="text-[#334155] mb-8">Choose your vehicle and tell us when you need it. Self-drive or chauffeur — confirmation in under a minute.</p>
          <Link to="/contact" className="inline-flex bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-10 py-4 rounded-full text-base tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30">Book Now</Link>
        </div>
      </section>
    </>
  );
}
