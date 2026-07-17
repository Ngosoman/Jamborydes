import { useState } from 'react';
import { Link } from 'react-router-dom';

// ═══════════════════════════════════════════════════════════════════════════════
const IMG = {
  hero: 'https://images.unsplash.com/photo-1779025313068-b4a11d86bf0d?w=1920&h=1080&fit=crop&auto=format',
  mercedesS: 'https://images.unsplash.com/photo-1780296269675-169390638617?w=1200&h=680&fit=crop&auto=format',
  mercedesE: 'https://images.unsplash.com/photo-1780296270302-625bbda9362e?w=1200&h=680&fit=crop&auto=format',
  interior: 'https://images.unsplash.com/photo-1780296269553-84ec2dd53065?w=1200&h=680&fit=crop&auto=format',
  suv: 'https://images.unsplash.com/photo-1566124436323-1bfc77e208f5?w=1200&h=680&fit=crop&auto=format',
  airport: 'https://images.unsplash.com/photo-1687992176093-6417a93fa3d0?w=1400&h=800&fit=crop&auto=format',
  nairobi: 'https://images.unsplash.com/photo-1781504798134-31600e8579ba?w=1400&h=900&fit=crop&auto=format',
};

// ═══════════════════════════════════════════════════════════════════════════════
function IconPlane() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" /></svg>); }
function IconBriefcase() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>); }
function IconClock() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>); }
function IconMap() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /></svg>); }
function IconShield() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>); }
function IconCheck() { return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>); }
function IconStar() { return (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FBBF24"><path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" /></svg>); }

// ═══════════════════════════════════════════════════════════════════════════════
function BookingWidget() {
  const [mode, setMode] = useState('self-drive');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [vehicle, setVehicle] = useState('sedan');

  return (
    <div className="bg-white/[0.07] backdrop-blur-xl border border-white/[0.15] rounded-2xl p-6 md:p-8 max-w-3xl">
      <div className="flex bg-white/[0.05] rounded-xl p-1 mb-5">
        <button onClick={() => setMode('self-drive')} className={`flex-1 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${mode === 'self-drive' ? 'bg-[#F97316] text-white shadow-lg shadow-orange-500/20' : 'text-white/50 hover:text-white/75'}`}>Self-Drive</button>
        <button onClick={() => setMode('chauffeur')} className={`flex-1 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${mode === 'chauffeur' ? 'bg-[#F97316] text-white shadow-lg shadow-orange-500/20' : 'text-white/50 hover:text-white/75'}`}>With Driver</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div><label className="block text-[11px] text-white/40 mb-2 tracking-widest uppercase">Pickup Date &amp; Time</label><input type="datetime-local" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors [color-scheme:dark]" /></div>
        <div><label className="block text-[11px] text-white/40 mb-2 tracking-widest uppercase">Return Date &amp; Time</label><input type="datetime-local" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors [color-scheme:dark]" /></div>
        <div className="sm:col-span-2"><label className="block text-[11px] text-white/40 mb-2 tracking-widest uppercase">Vehicle</label><select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors [color-scheme:dark] appearance-none"><option value="sedan">Mercedes E-Class — KES 7,500/day</option><option value="s-class">Mercedes S-Class — KES 12,500/day</option><option value="prado">Toyota Prado — KES 6,500/day</option><option value="minivan">Executive Minivan — KES 8,500/day</option></select></div>
      </div>
      {mode === 'self-drive' && (<div className="flex items-center gap-2 mb-5 text-[11px] text-white/40"><IconShield /><span>Valid driver&rsquo;s license &amp; refundable deposit required. Insurance included.</span></div>)}
      <Link to="/contact" className="block w-full bg-[#F97316] hover:bg-[#EA6C0A] text-white text-center font-semibold py-4 rounded-xl text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30">{mode === 'self-drive' ? 'Book Now — From KES 6,500/day' : 'Book Now — With Professional Driver'}</Link>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0A1128] overflow-hidden">
      <img src={IMG.hero} alt="Luxury Mercedes sedan in Nairobi" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/92 via-[#0A1128]/70 to-[#0A1128]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-[#0A1128]/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-[11px] font-medium text-white/85 tracking-[0.15em] uppercase">Premium Car Rental &middot; Nairobi</span>
          </div>
          <h1 className="font-display text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-6">Your Keys<br />Are<br /><em className="italic text-white/85">Ready.</em></h1>
          <p className="text-lg text-white/75 font-light leading-relaxed mb-8 max-w-md">Premium cars for self-drive or with a driver across Nairobi. Well-maintained, insured, and ready when you need them.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/40 mb-12">
            <span className="flex items-center gap-1.5"><IconShield /> Fully Insured</span>
            <span className="text-white/15">&middot;</span>
            <span>Self-Drive or Chauffeur</span>
            <span className="text-white/15">&middot;</span>
            <span>24/7 Roadside Support</span>
          </div>
        </div>
        <BookingWidget />
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/35">
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/35 to-transparent" />
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function ServicesPreview() {
  const services = [
    { icon: <IconPlane />, title: 'Self-Drive Hire', desc: 'Pick up a late-model car and drive yourself. Fully insured, unlimited mileage, 24/7 roadside assistance included.', tag: 'Most Popular' },
    { icon: <IconBriefcase />, title: 'Chauffeur Service', desc: 'A professional driver at your disposal — perfect for business, events, or when you want to relax.' },
    { icon: <IconClock />, title: 'Airport Pickup & Dropoff', desc: 'JKIA and Wilson Airport transfers. Self-drive from the airport lot or meet inside with a driver.' },
    { icon: <IconMap />, title: 'Long Distance Hire', desc: 'Nairobi to Mombasa, Naivasha, Nakuru — self-drive or with a driver at competitive rates.' },
  ];

  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">Our Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A1128] max-w-xl leading-tight">Your keys,<br /><em className="italic">or your driver.</em></h2>
          </div>
          <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#0A1128] hover:text-[#F97316] transition-colors mt-4">All Services <span>&rarr;</span></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={i} className="group relative bg-white rounded-2xl p-8 border border-[#0A1128]/[0.06] hover:shadow-2xl hover:shadow-[#0A1128]/10 transition-all duration-400 hover:-translate-y-1">
              {s.tag && <span className="absolute top-5 right-5 text-[10px] font-semibold bg-[#F97316]/10 text-[#F97316] px-2.5 py-1 rounded-full tracking-wide uppercase">{s.tag}</span>}
              <div className="text-[#F97316] mb-6">{s.icon}</div>
              <h3 className="font-display text-xl font-bold text-[#0A1128] mb-3">{s.title}</h3>
              <p className="text-sm text-[#334155] leading-relaxed mb-8">{s.desc}</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1128] group-hover:gap-3 transition-all duration-200">Learn more <span>&rarr;</span></Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1128] hover:text-[#F97316] transition-colors">View All Services <span>&rarr;</span></Link>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function FleetPreview() {
  const [active, setActive] = useState(0);
  const vehicles = [
    { name: 'Mercedes E-Class', class: 'Business Sedan', passengers: '5', bags: '2', selfDrive: 'KES 7,500', chauffeur: 'KES 10,500', img: IMG.mercedesE, amenities: ['Climate control', 'USB charging', 'Bluetooth audio', 'Parking sensors'] },
    { name: 'Mercedes S-Class', class: 'Luxury Sedan', passengers: '5', bags: '3', selfDrive: 'KES 12,500', chauffeur: 'KES 16,000', img: IMG.mercedesS, amenities: ['Full leather interior', 'Massage seats', 'Onboard Wi-Fi', 'Privacy glass'] },
    { name: 'Toyota Prado', class: 'Premium SUV', passengers: '7', bags: '5', selfDrive: 'KES 6,500', chauffeur: 'KES 9,500', img: IMG.suv, amenities: ['4WD on demand', 'Leather interior', 'Reversing camera', 'Elevated ride height'] },
  ];
  const v = vehicles[active];

  return (
    <section className="bg-[#0A1128] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">The Fleet</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">Choose your car.</h2>
          </div>
          <Link to="/fleet" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors mt-4">View Full Fleet <span>&rarr;</span></Link>
        </div>
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {vehicles.map((veh, i) => (
            <button key={i} onClick={() => setActive(i)} className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${active === i ? 'bg-[#F97316] text-white' : 'bg-white/[0.06] text-white/65 hover:bg-white/[0.12] hover:text-white border border-white/[0.1]'}`}>{veh.name}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#131E35]">
            <img src={v.img} alt={v.name} className="w-full h-full object-cover transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/50 to-transparent" />
            <div className="absolute bottom-5 left-5 flex gap-2"><span className="bg-[#F97316] text-white text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wide">{v.selfDrive}/day self-drive</span><span className="bg-white/[0.15] backdrop-blur-sm text-white text-xs px-3.5 py-1.5 rounded-full tracking-wide">{v.chauffeur}/day with driver</span></div>
          </div>
          <div className="lg:pl-4">
            <p className="text-[11px] text-white/50 tracking-[0.2em] uppercase mb-2">{v.class}</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">{v.name}</h3>
            <div className="flex gap-8 mb-10"><div><p className="text-3xl font-bold text-white">{v.passengers}</p><p className="text-[11px] text-white/50 tracking-widest uppercase mt-1">Seats</p></div><div className="w-px bg-white/10" /><div><p className="text-3xl font-bold text-white">{v.bags}</p><p className="text-[11px] text-white/50 tracking-widest uppercase mt-1">Bags</p></div><div className="w-px bg-white/10" /><div><p className="text-3xl font-bold text-white">24/7</p><p className="text-[11px] text-white/50 tracking-widest uppercase mt-1">Support</p></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {v.amenities.map((a, i) => (<div key={i} className="flex items-center gap-2.5 text-sm text-white/65"><span className="text-[#F97316] flex-shrink-0"><IconCheck /></span>{a}</div>))}
            </div>
            <div className="flex gap-3">
              <Link to="/contact" className="flex-1 bg-[#F97316] hover:bg-[#EA6C0A] text-white text-center font-semibold py-4 rounded-xl text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25">Book This Vehicle</Link>
              <Link to="/fleet" className="px-6 bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/[0.1] rounded-xl text-sm flex items-center transition-all duration-200">View All</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors">View Full Fleet <span>&rarr;</span></Link>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function WhyUs() {
  const features = [
    { title: 'Fully Insured Fleet', desc: "Every car is comprehensively insured and road-ready. 24/7 roadside assistance included — if anything happens, we handle it." },
    { title: 'Self-Drive or Chauffeur', desc: 'Drive yourself or have a professional driver take the wheel. Same fleet, same quality, your choice — every time.' },
    { title: 'Late-Model Vehicles Only', desc: 'We retire cars at 5 years old. You drive a current-model Mercedes, Toyota, or executive van — never a tired fleet car.' },
    { title: "No Hidden Charges", desc: "The price you see is the price you pay. Unlimited mileage, insurance, and roadside assistance are all included." },
  ];

  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden h-[480px] md:h-[600px] bg-[#131E35]"><img src={IMG.mercedesS} alt="Mercedes available for hire" className="w-full h-full object-cover" /></div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-2xl shadow-black/10 p-6 w-52"><p className="font-display text-4xl font-bold text-[#0A1128]">KES 6,500</p><p className="text-sm text-[#334155] mt-1 leading-snug">per day<br />self-drive</p><div className="flex gap-0.5 mt-3">{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}</div></div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A1128] leading-tight mb-6">The car you want,<br /><em className="italic">the way you want it.</em></h2>
            <p className="text-[#334155] text-base md:text-lg leading-relaxed mb-10 max-w-lg">Whether you drive yourself or prefer a chauffeur, Jamboryde gives you the same fleet of late-model, fully-insured vehicles — at fair, transparent prices.</p>
            <div className="space-y-7">
              {features.map((f, i) => (<div key={i} className="flex gap-4"><div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316]"><IconCheck /></div><div><h4 className="font-semibold text-[#0A1128] mb-1">{f.title}</h4><p className="text-sm text-[#334155] leading-relaxed">{f.desc}</p></div></div>))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link to="/contact" className="bg-[#0A1128] hover:bg-[#131E35] text-white text-center font-semibold px-8 py-4 rounded-xl text-sm tracking-wide transition-all duration-200">Book Your Car</Link>
              <Link to="/about" className="text-[#0A1128] font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200 px-2">About us &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function NairobiStrip() {
  return (
    <div className="relative h-72 md:h-96 overflow-hidden bg-[#0A1128]">
      <img src={IMG.nairobi} alt="Nairobi skyline at dusk" className="w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/80 via-transparent to-[#0A1128]/80" />
      <div className="absolute inset-0 flex items-center justify-center"><p className="font-display text-2xl md:text-4xl font-bold text-white/85 tracking-wide italic text-center px-6">&ldquo;We know Nairobi.&rdquo;</p></div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function Testimonials() {
  const reviews = [
    { quote: "I hired the Mercedes E-Class for a week self-drive while my car was in the garage. The process was smooth, insurance was sorted, and the car was spotless. Returned it on Sunday and they processed my deposit refund the same day.", name: 'David Mwangi', role: 'Self-Drive Customer, Nairobi', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format&crop=face' },
    { quote: "Booked the Prado with a driver for my parents visiting from the UK. The driver was on time, professional, and handled their luggage at JKIA. My parents called it 'VIP treatment.' Worth every shilling.", name: 'Priya Sharma', role: 'Chauffeur Customer, Westlands', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format&crop=face' },
    { quote: "Our company stopped maintaining a fleet and now uses Jamboryde for all executive hire. Self-drive for local meetings, chauffeur for client pickups. The vehicles are consistently clean and late-model.", name: 'James Odhiambo', role: 'Corporate Account, Upper Hill', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format&crop=face' },
  ];

  return (
    <section className="bg-[#0A1128] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16"><p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">Testimonials</p><h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">What our clients say.</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#131E35] rounded-2xl p-8 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
              <div className="font-display text-7xl text-[#F97316]/15 leading-none -mt-3 mb-3 select-none">&ldquo;</div>
              <div className="flex gap-0.5 mb-5">{Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}</div>
              <p className="text-white/75 text-sm leading-relaxed mb-8 italic">&ldquo;{r.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/[0.07]"><img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover bg-[#1A2845]" /><div><p className="text-white font-semibold text-sm">{r.name}</p><p className="text-white/35 text-xs mt-0.5">{r.role}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Book in 60 Seconds', desc: 'Use our form, call, or WhatsApp. Tell us which car, when, and whether you want self-drive or a driver.' },
    { n: '02', title: 'Choose Self-Drive or Chauffeur', desc: "Drive yourself? We'll have the car ready. Prefer a driver? A professional will be at your pickup on time." },
    { n: '03', title: 'Pick Up & Drive', desc: "Collect your keys from our yard or have the car delivered to JKIA, your hotel, or home. Quick walkaround — you're off." },
    { n: '04', title: 'Return or Get Dropped Off', desc: "Return the car to our yard or have your driver drop you. Refuel and we settle the deposit — that's it." },
  ];

  return (
    <section className="bg-[#F7F5F0] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20"><p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">The Process</p><h2 className="font-display text-4xl md:text-5xl font-bold text-[#0A1128] leading-tight">Four steps to<br /><em className="italic">getting your keys.</em></h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-[#0A1128]/10" />
          {steps.map((s, i) => (
            <div key={i} className="text-center relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border border-[#0A1128]/10 shadow-sm mb-6 relative z-10"><span className="font-display text-2xl font-bold text-[#0A1128]">{s.n}</span></div>
              <h3 className="font-display text-xl font-bold text-[#0A1128] mb-3">{s.title}</h3>
              <p className="text-sm text-[#334155] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function FinalCTA() {
  return (
    <section className="relative bg-[#0A1128] py-32 md:py-44 overflow-hidden">
      <img src={IMG.airport} alt="Airport arrivals" className="absolute inset-0 w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/60 via-[#0A1128]/70 to-[#0A1128]" />
      <div className="relative z-10 text-center max-w-xl mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-6">Ready?</p>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">Your next journey<br />starts <em className="italic">here.</em></h2>
        <p className="text-white/60 text-lg mb-12 leading-relaxed">Book your car now. Self-drive or with a driver — confirmation in under a minute.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-10 py-4 rounded-full text-base tracking-wide transition-all duration-200 hover:shadow-2xl hover:shadow-orange-500/30">Book Your Car</Link>
          <a href="tel:+254700000000" className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.15] text-white font-medium px-10 py-4 rounded-full text-base tracking-wide transition-all duration-200 text-center">Call +254 700 000 000</a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A1128]/97 backdrop-blur-xl border-t border-white/[0.08] px-4 py-3 pb-safe">
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3"><p className="text-[10px] text-white/35 tracking-wide uppercase">From</p><p className="text-sm text-white mt-0.5">KES 6,500 / day</p></div>
        <Link to="/contact" className="bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-6 py-4 rounded-xl text-sm tracking-wide whitespace-nowrap transition-colors">Book Now</Link>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
function WhatsAppFAB() {
  return (
    <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-[88px] md:bottom-8 right-5 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-xl shadow-green-600/30 transition-all duration-200 hover:scale-110">
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    </a>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FleetPreview />
      <WhyUs />
      <NairobiStrip />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
      <MobileBar />
      <WhatsAppFAB />
    </>
  );
}
