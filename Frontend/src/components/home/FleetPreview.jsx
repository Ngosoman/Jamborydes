import { Link } from 'react-router-dom';

const vehicles = [
  {
    name: 'Toyota Prado TX',
    type: 'Executive SUV',
    capacity: '5 Passengers',
    luggage: '3 Bags',
    price: 'KSh 7,000/day',
    image: 'https://images.unsplash.com/photo-1533473359331-6a3b1f3c3d19?w=500&h=350&fit=crop&auto=format',
    badge: 'Most Popular',
    badgeColor: 'bg-orange-500',
  },
  {
    name: 'Toyota Voxy',
    type: 'MPV / Family',
    capacity: '7 Passengers',
    luggage: '4 Bags',
    price: 'KSh 5,000/day',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=350&fit=crop&auto=format',
    badge: 'Airport Favorite',
    badgeColor: 'bg-kenya-green',
  },
  {
    name: 'Toyota Fielder',
    type: 'Economy Wagon',
    capacity: '5 Passengers',
    luggage: '3 Bags',
    price: 'KSh 3,500/day',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=350&fit=crop&auto=format',
    badge: 'Budget Friendly',
    badgeColor: 'bg-navy-700',
  },
  {
    name: 'Toyota Alphard',
    type: 'Luxury Van',
    capacity: '7 Passengers',
    luggage: '5 Bags',
    price: 'KSh 7,000/day',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=350&fit=crop&auto=format',
    badge: 'Executive',
    badgeColor: 'bg-kenya-red',
  },
];

export default function FleetPreview() {
  return (
    <section className="section-padding bg-savannah-50 relative pattern-african-lines">
      {/* Kenyan tricolor divider */}
      <div className="flag-divider absolute top-0 left-0 right-0">
        <div /><div /><div />
      </div>

      <div className="container-max relative pt-4">
        <div className="mb-10">
          <span className="section-badge mb-3">Our Fleet</span>
          <h2 className="section-title mt-3">
            Vehicles Available for Hire
          </h2>
          <p className="text-gray-600 text-sm mt-2 max-w-2xl">
            Clean, well-maintained cars with professional drivers. All rates include driver, fuel, 
            and comprehensive insurance. Daily, weekly, and monthly hire available.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="card-kenyan group">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {vehicle.badge && (
                  <span className={`absolute top-2.5 left-2.5 ${vehicle.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded`}>
                    {vehicle.badge}
                  </span>
                )}
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-[9px] font-semibold uppercase tracking-widest bg-black/50 backdrop-blur-sm rounded px-2 py-0.5">
                    {vehicle.type}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3.5">
                <h3 className="text-sm font-bold text-navy-900 mb-2.5">{vehicle.name}</h3>
                
                <div className="flex gap-3 text-[11px] text-gray-500 mb-2.5 pb-2.5 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857" />
                    </svg>
                    {vehicle.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    {vehicle.luggage}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block">From</span>
                    <span className="text-base font-extrabold text-orange-600">{vehicle.price}</span>
                  </div>
                  <Link
                    to="/book"
                    className="text-[11px] font-bold text-navy-900 hover:text-orange-600 transition-colors inline-flex items-center gap-0.5"
                  >
                    HIRE
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/fleet" className="btn-secondary text-sm px-8">
            See All Vehicles &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
