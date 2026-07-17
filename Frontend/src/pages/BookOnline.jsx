import { useState } from 'react';

const vehicles = ['Sedan (Fielder)', 'SUV (Prado)', 'MPV (Voxy)', 'Van (Noah)', 'Luxury Van (Alphard)', '10-Seater (Hiace)'];
const services = ['Airport Transfer', 'Car Hire (Hourly)', 'City Transfer', 'Intercity Transfer', 'Corporate Transport', 'Group Transport'];
const paymentMethods = ['Cash', 'M-Pesa', 'Card at pickup', 'Corporate Invoice'];

export default function BookOnline() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: '', vehicle: '', pickup: '', destination: '',
    date: '', time: '', passengers: '1',
    name: '', phone: '', email: '', notes: '', payment: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&h=600&fit=crop&auto=format"
            alt="Nairobi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/80 to-navy-950/90" />
          <div className="absolute inset-0 pattern-african-dots opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative pt-8">
          <div className="flag-ribbon w-20 mx-auto mb-5" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Book Your Ride</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Fill in the form below. We will confirm via WhatsApp within 15 minutes. No payment required at this stage.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <span className="text-4xl block mb-3">✅</span>
              <h2 className="text-xl font-bold text-navy-900 mb-2">Booking Request Received!</h2>
              <p className="text-gray-600 text-sm mb-4">Thank you! We will confirm your booking via WhatsApp within 15 minutes.</p>
              <a href="https://wa.me/254700000000" className="text-orange-600 font-bold text-sm hover:text-orange-700">
                Need help? Chat on WhatsApp →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Trip Details */}
              <div className="bg-savannah-50 rounded-lg p-5 border border-savannah-200">
                <h3 className="text-sm font-bold text-navy-900 mb-4 uppercase tracking-wider">Trip Details</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Service Type *</label>
                    <select name="service" value={form.service} onChange={handleChange} required className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm">
                      <option value="">Select service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Vehicle *</label>
                    <select name="vehicle" value={form.vehicle} onChange={handleChange} required className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm">
                      <option value="">Select vehicle...</option>
                      {vehicles.map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Pickup Location *</label>
                    <input type="text" name="pickup" value={form.pickup} onChange={handleChange} required placeholder="e.g. JKIA Airport Terminal 1A" className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Destination *</label>
                    <input type="text" name="destination" value={form.destination} onChange={handleChange} required placeholder="e.g. Westlands, Nairobi" className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Date *</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Time *</label>
                    <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Passengers</label>
                    <select name="passengers" value={form.passengers} onChange={handleChange} className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm">
                      {[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'passenger' : 'passengers'}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Your Details */}
              <div className="bg-savannah-50 rounded-lg p-5 border border-savannah-200">
                <h3 className="text-sm font-bold text-navy-900 mb-4 uppercase tracking-wider">Your Details</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="0712 345 678" className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm" />
                  </div>
                </div>
              </div>

              {/* Payment & Notes */}
              <div className="bg-savannah-50 rounded-lg p-5 border border-savannah-200">
                <h3 className="text-sm font-bold text-navy-900 mb-4 uppercase tracking-wider">Additional Info</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Payment Method</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {paymentMethods.map((pm) => (
                        <button key={pm} type="button" onClick={() => setForm({ ...form, payment: pm })}
                          className={`py-2 px-2 rounded text-xs font-semibold transition-all ${
                            form.payment === pm ? 'bg-navy-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                          }`}>
                          {pm}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Special Requests</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={3}
                      placeholder="Flight number, child seat, extra stops, etc."
                      className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm resize-none" />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full text-base py-3.5">
                Submit Booking Request
              </button>
              <p className="text-center text-[11px] text-gray-400">
                We will confirm your booking via phone or WhatsApp. No payment required now.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
