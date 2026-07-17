import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqCategories = [
  {
    category: 'Booking & Reservations',
    questions: [
      { q: 'How do I book a ride?', a: 'Book online through our website, send a WhatsApp message, or call us directly. For online bookings, fill out the form and we will confirm within 15 minutes.' },
      { q: 'How far in advance should I book?', a: 'We recommend at least 2 hours for city transfers and 24 hours for airport pickups. But we can often handle last-minute requests — just reach out.' },
      { q: 'Can I modify or cancel my booking?', a: 'Yes. Modifications and cancellations are free up to 2 hours before your scheduled pickup. Just contact us via phone or WhatsApp.' },
      { q: 'Do I need to pay when booking?', a: 'No payment is required at booking. You can pay at the end of your journey by cash, M-Pesa, or card. Corporate clients get monthly invoicing.' },
    ],
  },
  {
    category: 'Airport Transfers',
    questions: [
      { q: 'Do you track flights?', a: 'Yes. For all airport pickups, we monitor your flight in real-time and adjust the pickup time if there are delays. No extra charge for waiting.' },
      { q: 'Where do I meet my driver at JKIA?', a: 'Your driver meets you at the arrivals hall with a name sign. We send the driver\'s name, photo, phone number, and vehicle details before pickup.' },
      { q: 'What if my flight is delayed?', a: 'We track your flight and adjust. You will not be charged extra for delays. If your flight is significantly delayed, keep us updated via WhatsApp.' },
      { q: 'How much luggage can I bring?', a: 'Standard vehicles: 2-3 suitcases. Vans: 5-8 suitcases. For oversized luggage, please mention it when booking.' },
    ],
  },
  {
    category: 'Vehicles & Drivers',
    questions: [
      { q: 'What vehicles do you have?', a: 'Toyota Prado (Executive SUV), Toyota Voxy (Family MPV), Toyota Fielder (Economy), Toyota Noah (Family Van), Toyota Alphard (Luxury Van), Toyota Hiace (10-Seater).' },
      { q: 'Are your vehicles insured?', a: 'Yes. All our vehicles are fully insured with comprehensive cover. Your safety is our top priority.' },
      { q: 'Can I request a specific driver?', a: 'Absolutely. If you had a great experience with a particular driver, let us know when booking and we will assign them if available.' },
      { q: 'Do you provide child seats?', a: 'Yes, we provide child seats at no extra charge. Let us know your child\'s age and weight when booking.' },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      { q: 'How is pricing calculated?', a: 'We use flat-rate pricing based on the route and vehicle type. No surge pricing, no hidden fees. See our Pricing page for details.' },
      { q: 'What payment methods do you accept?', a: 'Cash (KES), M-Pesa, credit/debit cards (at pickup), and corporate invoicing for account clients.' },
      { q: 'Are there any hidden charges?', a: 'No. The price we quote is the price you pay. It includes all taxes, fuel, and driver charges. Additional stops may incur a small extra fee.' },
      { q: 'Do you offer corporate rates?', a: 'Yes. We offer discounted monthly contracts for businesses. Contact us to discuss a corporate package.' },
    ],
  },
  {
    category: 'Coverage & Availability',
    questions: [
      { q: 'What areas do you cover?', a: 'All of Nairobi and suburbs (CBD, Westlands, Karen, Kilimani, Gigiri, Runda, Eastlands). Intercity routes to Naivasha, Nakuru, Kisumu, Mombasa, and more.' },
      { q: 'Are you available 24/7?', a: 'Yes. We operate 24 hours a day, 7 days a week, 365 days a year including public holidays.' },
      { q: 'Can you provide service outside Nairobi?', a: 'Absolutely. We cover intercity routes across Kenya. Just tell us your destination and we will provide a quote.' },
    ],
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);
  let globalIdx = 0;

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about riding with Jamboryde. Can&apos;t find your answer? Call or WhatsApp us.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          {faqCategories.map((cat) => (
            <div key={cat.category} className="mb-10">
              <h2 className="text-lg font-bold text-navy-900 mb-3 pb-2 border-b-2 border-gray-100">{cat.category}</h2>
              <div className="space-y-2">
                {cat.questions.map((item) => {
                  const idx = globalIdx++;
                  return (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button onClick={() => toggle(idx)}
                        className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors">
                        <span className="font-semibold text-navy-900 text-sm">{item.q}</span>
                        <svg className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openIndex === idx && (
                        <div className="px-4 pb-4 border-t border-gray-100">
                          <p className="text-gray-600 text-sm pt-3 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-14 bg-navy-900 text-center relative">
        <div className="flag-ribbon absolute top-0 left-0 right-0" />
        <div className="container-max">
          <h2 className="text-xl font-black text-white mb-3">Didn&apos;t Find Your Answer?</h2>
          <p className="text-gray-400 text-sm mb-5">Reach out. We respond within minutes.</p>
          <div className="flex justify-center gap-3">
            <Link to="/contact" className="btn-primary text-sm px-8 py-3">Contact Us</Link>
            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
