import { Link } from 'react-router-dom';

const services = [
  {
    icon: '✈️',
    title: 'Airport Transfers',
    desc: 'JKIA pickup and drop-off. Meet & greet, flight tracking, on-time guarantee. Your driver waits even if your flight doesn\'t.',
  },
  {
    icon: '🚗',
    title: 'Car Hire with Driver',
    desc: 'Chauffeur-driven vehicles for business, errands, events. Hourly, half-day, or full-day. Clean cars, professional drivers.',
  },
  {
    icon: '🏙️',
    title: 'City Transfers',
    desc: 'Point-to-point across Nairobi — CBD, Westlands, Karen, Kilimani, Gigiri, Runda, Eastlands. Available 24/7.',
  },
  {
    icon: '🛣️',
    title: 'Intercity Travel',
    desc: 'Nairobi to Naivasha, Nakuru, Kisumu, Mombasa and beyond. Fixed pricing. Comfort stops along the way.',
  },
  {
    icon: '🏢',
    title: 'Corporate Transport',
    desc: 'Monthly contracts, VIP logistics, event transport. Dedicated account management. Invoicing available.',
  },
  {
    icon: '👥',
    title: 'Group Transport',
    desc: 'Churches, schools, weddings, harambees, corporate events. Vans and buses for groups of any size.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white relative pattern-african-lines">
      <div className="container-max relative">
        <div className="mb-10">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title mt-3">
            What We Offer
          </h2>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl">
            From a quick airport run to a full corporate transport contract — we handle it all. 
            All services come with a professional driver, clean vehicle, and fixed pricing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.title} className="card-kenyan p-5 group hover:border-orange-300">
              <span className="text-3xl block mb-3">{service.icon}</span>
              <h3 className="text-sm font-bold text-navy-900 mb-1.5">{service.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.desc}</p>
              <Link
                to="/services"
                className="text-orange-600 font-bold text-xs hover:text-orange-700 transition-colors inline-flex items-center gap-1"
              >
                More details
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
