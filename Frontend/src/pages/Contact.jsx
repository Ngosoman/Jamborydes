import { useState } from 'react';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1687992176093-6417a93fa3d0?w=1400&h=700&fit=crop&auto=format',
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState('self-drive');
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: 'mercedes-e', pickupDate: '', returnDate: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#F97316]/10 flex items-center justify-center mx-auto mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth={2} className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          </div>
          <h2 className="font-display text-3xl font-bold text-[#0A1128] mb-4">Request received</h2>
          <p className="text-[#334155] mb-6 leading-relaxed">Thank you for reaching out. We will confirm your booking via WhatsApp or phone within 15 minutes.</p>
          <button onClick={() => setSubmitted(false)} className="bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-8 py-4 rounded-xl text-sm tracking-wide transition-all duration-200">Book Another</button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A1128] py-32 md:py-40 overflow-hidden">
        <img src={IMG.hero} alt="Contact Jamboryde" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/95 via-[#0A1128]/70 to-[#0A1128]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F97316] mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">Book your car<br /><em className="italic">right now.</em></h1>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed">Fill out the form or call us directly. Confirmation in under a minute.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#F7F5F0] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-[#0A1128]/[0.06] shadow-sm">
                <h2 className="font-display text-2xl font-bold text-[#0A1128] mb-8">Booking Request</h2>

                {/* Mode toggle */}
                <div className="flex bg-[#F7F5F0] rounded-xl p-1 mb-6">
                  <button type="button" onClick={() => setMode('self-drive')} className={`flex-1 py-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${mode === 'self-drive' ? 'bg-[#F97316] text-white shadow-lg shadow-orange-500/15' : 'text-[#334155]/60 hover:text-[#334155]'}`}>Self-Drive</button>
                  <button type="button" onClick={() => setMode('chauffeur')} className={`flex-1 py-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${mode === 'chauffeur' ? 'bg-[#F97316] text-white shadow-lg shadow-orange-500/15' : 'text-[#334155]/60 hover:text-[#334155]'}`}>With Driver</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div><label className="block text-[11px] font-semibold text-[#0A1128]/40 mb-2 tracking-widest uppercase">Full Name *</label><input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-[#F7F5F0] border border-[#0A1128]/[0.08] rounded-xl px-4 py-3 text-[#0A1128] text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors" placeholder="John Doe" /></div>
                  <div><label className="block text-[11px] font-semibold text-[#0A1128]/40 mb-2 tracking-widest uppercase">Phone Number *</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-[#F7F5F0] border border-[#0A1128]/[0.08] rounded-xl px-4 py-3 text-[#0A1128] text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors" placeholder="0712 345 678" /></div>
                  <div><label className="block text-[11px] font-semibold text-[#0A1128]/40 mb-2 tracking-widest uppercase">Email</label><input type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-[#F7F5F0] border border-[#0A1128]/[0.08] rounded-xl px-4 py-3 text-[#0A1128] text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors" placeholder="you@email.com" /></div>
                  <div><label className="block text-[11px] font-semibold text-[#0A1128]/40 mb-2 tracking-widest uppercase">Vehicle</label><select name="vehicle" value={form.vehicle} onChange={handleChange} className="w-full bg-[#F7F5F0] border border-[#0A1128]/[0.08] rounded-xl px-4 py-3 text-[#0A1128] text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors appearance-none"><option value="mercedes-e">Mercedes E-Class</option><option value="mercedes-s">Mercedes S-Class</option><option value="prado">Toyota Prado</option><option value="minivan">Executive Minivan</option></select></div>
                  <div><label className="block text-[11px] font-semibold text-[#0A1128]/40 mb-2 tracking-widest uppercase">Pickup Date &amp; Time</label><input type="datetime-local" name="pickupDate" value={form.pickupDate} onChange={handleChange} className="w-full bg-[#F7F5F0] border border-[#0A1128]/[0.08] rounded-xl px-4 py-3 text-[#0A1128] text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors [color-scheme:light]" /></div>
                  <div><label className="block text-[11px] font-semibold text-[#0A1128]/40 mb-2 tracking-widest uppercase">Return Date &amp; Time</label><input type="datetime-local" name="returnDate" value={form.returnDate} onChange={handleChange} className="w-full bg-[#F7F5F0] border border-[#0A1128]/[0.08] rounded-xl px-4 py-3 text-[#0A1128] text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors [color-scheme:light]" /></div>
                </div>
                <div className="mb-6"><label className="block text-[11px] font-semibold text-[#0A1128]/40 mb-2 tracking-widest uppercase">Special Requests</label><textarea name="message" value={form.message} onChange={handleChange} rows="3" className="w-full bg-[#F7F5F0] border border-[#0A1128]/[0.08] rounded-xl px-4 py-3 text-[#0A1128] text-sm focus:outline-none focus:border-[#F97316]/40 transition-colors resize-none" placeholder="Child seat, meet & greet, delivery location..." /></div>

                {mode === 'self-drive' && (
                  <div className="flex items-start gap-2.5 mb-6 p-4 bg-[#F7F5F0] rounded-xl text-xs text-[#334155] leading-relaxed">
                    <span className="mt-0.5">&#9432;</span>
                    <span>Self-drive bookings require a valid driver&rsquo;s license, a refundable deposit (refunded upon return), and minimum age of 23. Comprehensive insurance is included.</span>
                  </div>
                )}

                <button type="submit" className="w-full bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold py-4 rounded-xl text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/25">{mode === 'self-drive' ? 'Book Self-Drive' : 'Book Chauffeur'}</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-[#0A1128]/[0.06] shadow-sm">
                <h3 className="font-display text-xl font-bold text-[#0A1128] mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <span className="text-lg mt-0.5">&#128222;</span>
                    <div><p className="text-sm font-semibold text-[#0A1128]">Call Us</p><a href="tel:+254700000000" className="text-sm text-[#334155] hover:text-[#F97316] transition-colors">+254 700 000 000</a></div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg mt-0.5">&#128172;</span>
                    <div><p className="text-sm font-semibold text-[#0A1128]">WhatsApp</p><a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="text-sm text-[#334155] hover:text-[#F97316] transition-colors">Chat on WhatsApp</a></div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg mt-0.5">&#9993;</span>
                    <div><p className="text-sm font-semibold text-[#0A1128]">Email</p><a href="mailto:info@jamboryde.co.ke" className="text-sm text-[#334155] hover:text-[#F97316] transition-colors">info@jamboryde.co.ke</a></div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-lg mt-0.5">&#128205;</span>
                    <div><p className="text-sm font-semibold text-[#0A1128]">Location</p><p className="text-sm text-[#334155] leading-snug">JKIA Terminal 1A<br />Nairobi, Kenya</p></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-[#0A1128]/[0.06] shadow-sm">
                <h3 className="font-display text-xl font-bold text-[#0A1128] mb-6">Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[#334155]">Monday &ndash; Friday</span><span className="font-semibold text-[#0A1128]">24 hours</span></div>
                  <div className="flex justify-between"><span className="text-[#334155]">Saturday</span><span className="font-semibold text-[#0A1128]">24 hours</span></div>
                  <div className="flex justify-between"><span className="text-[#334155]">Sunday</span><span className="font-semibold text-[#0A1128]">24 hours</span></div>
                </div>
                <p className="text-xs text-[#334155]/60 mt-4 leading-relaxed">We never close. Bookings, pickups, and returns — available any day, any time.</p>
              </div>

              <div className="bg-[#131E35] rounded-2xl p-8 text-white">
                <h3 className="font-display text-xl font-bold text-white mb-4">Need help choosing?</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">Not sure which vehicle or service fits your needs? Call or WhatsApp us. We will talk you through it — no pressure.</p>
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
