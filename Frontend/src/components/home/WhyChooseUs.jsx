const reasons = [
  {
    icon: '🛡️',
    title: 'Safety First',
    desc: 'Every vehicle inspected before each trip. All drivers background-checked, trained, and certified. Your safety is our priority.',
  },
  {
    icon: '⏰',
    title: 'Always On Time',
    desc: 'We arrive 15 minutes early. We track your flight in real-time. Delayed? No problem — we adjust. You won\'t be left waiting.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Updates',
    desc: 'Driver photo, vehicle details, and live location sent straight to your phone. Always know who\'s coming and when.',
  },
  {
    icon: '💰',
    title: 'No Hidden Charges',
    desc: 'The price we quote is the price you pay. Taxes and fuel included. Pay via M-Pesa, cash, or card — your choice.',
  },
  {
    icon: '✨',
    title: 'Spotless Vehicles',
    desc: 'Clean inside and out, every trip. Complimentary water, WiFi, and phone chargers in every vehicle.',
  },
  {
    icon: '🗺️',
    title: 'Nairobi Experts',
    desc: 'Our drivers know every shortcut and back route. From Karen to Kilimani, Gigiri to Eastlands — we navigate Nairobi like no one else.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* African pattern */}
      <div className="absolute inset-0 pattern-african-grid opacity-10" />
      <div className="absolute inset-0 pattern-kitenge opacity-20" />

      {/* Kenyan tricolor divider at top */}
      <div className="absolute top-0 left-0 right-0 flag-divider">
        <div /><div /><div />
      </div>

      <div className="container-max relative pt-4">
        {/* Section header */}
        <div className="mb-10">
          <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded border border-orange-500/20">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-4 tracking-tight">
            Why Our Customers Choose Jamboryde
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-2xl">
            Over 500 trips completed every month. Here&apos;s why Nairobi trusts us for car hire and transport.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors group">
              <span className="text-2xl mb-3 block">{reason.icon}</span>
              <h3 className="text-white font-bold text-sm mb-1.5">{reason.title}</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Counter row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-10 border-t border-white/10">
          {[
            { value: '500+', label: 'Trips Monthly' },
            { value: '4.9', label: 'Google Rating' },
            { value: '50+', label: 'Vehicles' },
            { value: '24/7', label: 'Availability' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-orange-500">{stat.value}</div>
              <div className="text-gray-400 text-[11px] uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
