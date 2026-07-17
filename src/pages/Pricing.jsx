import { Link } from 'react-router-dom';

const airportRoutes = [
  { from: 'JKIA', to: 'Nairobi CBD', sedan: 2500, suv: 3000, van: 4000 },
  { from: 'JKIA', to: 'Westlands', sedan: 3000, suv: 3500, van: 4500 },
  { from: 'JKIA', to: 'Karen', sedan: 4000, suv: 4500, van: 6000 },
  { from: 'JKIA', to: 'Kilimani', sedan: 3000, suv: 3500, van: 4500 },
  { from: 'JKIA', to: 'Gigiri / UN', sedan: 3500, suv: 4000, van: 5500 },
  { from: 'JKIA', to: 'Runda', sedan: 3500, suv: 4000, van: 5500 },
  { from: 'JKIA', to: 'Eastlands', sedan: 2500, suv: 3000, van: 4000 },
];

const intercityRoutes = [
  { from: 'Nairobi', to: 'Naivasha', suv: 8000, van: 12000 },
  { from: 'Nairobi', to: 'Nakuru', suv: 12000, van: 18000 },
  { from: 'Nairobi', to: 'Kisumu', suv: 18000, van: 28000 },
  { from: 'Nairobi', to: 'Mombasa', suv: 25000, van: 38000 },
  { from: 'Nairobi', to: 'Nanyuki', suv: 10000, van: 15000 },
  { from: 'Nairobi', to: 'Eldoret', suv: 15000, van: 22000 },
];

const hourlyRates = [
  { vehicle: 'Sedan / Fielder', rate: 500, minHours: 5, desc: 'Town running, meetings, errands' },
  { vehicle: 'SUV / Prado', rate: 750, minHours: 5, desc: 'Business meetings, events' },
  { vehicle: 'MPV / Voxy', rate: 750, minHours: 5, desc: 'Family outings, airport runs' },
  { vehicle: 'Van / Noah', rate: 1000, minHours: 5, desc: 'Group transport, events' },
  { vehicle: 'Van / Alphard', rate: 1200, minHours: 5, desc: 'Executive, VIP, weddings' },
  { vehicle: 'Hiace / 10-Seater', rate: 1200, minHours: 5, desc: 'Church, school, group trips' },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=800&fit=crop&auto=format"
            alt="Nairobi city"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/80 to-navy-950/90" />
          <div className="absolute inset-0 pattern-african-dots opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative pt-8">
          <div className="flag-ribbon w-20 mx-auto mb-5" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Pricing &amp; Rates
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Transparent fixed rates. No hidden fees, no surge pricing. All prices include driver, 
            fuel, and comprehensive insurance.
          </p>
        </div>
      </section>

      {/* Airport Transfer Rates */}
      <section className="section-padding bg-white relative">
        <div className="container-max">
          <div className="mb-8">
            <span className="section-badge">Airport</span>
            <h2 className="text-xl sm:text-2xl font-black text-navy-900 mt-3">JKIA Airport Transfer Rates</h2>
            <p className="text-gray-500 text-sm mt-1">Fixed rates from Jomo Kenyatta International Airport to Nairobi.</p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="table-kenyan">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th className="text-center">Sedan</th>
                  <th className="text-center">SUV</th>
                  <th className="text-center">Van/MPV</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {airportRoutes.map((r) => (
                  <tr key={r.to}>
                    <td className="font-semibold text-navy-900 text-xs">{r.from}</td>
                    <td className="text-xs">{r.to}</td>
                    <td className="text-center text-xs font-semibold">KES {r.sedan.toLocaleString()}</td>
                    <td className="text-center text-xs font-semibold">KES {r.suv.toLocaleString()}</td>
                    <td className="text-center text-xs font-semibold">KES {r.van.toLocaleString()}</td>
                    <td>
                      <Link to="/book" className="text-orange-600 font-bold text-[10px] hover:text-orange-700">BOOK</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Intercity Routes */}
      <section className="section-padding bg-savannah-50 relative pattern-african-lines">
        <div className="absolute top-0 left-0 right-0 flag-divider"><div /><div /><div /></div>
        <div className="container-max relative pt-4">
          <div className="mb-8">
            <span className="section-badge">Intercity</span>
            <h2 className="text-xl sm:text-2xl font-black text-navy-900 mt-3">Long Distance Travel Rates</h2>
            <p className="text-gray-500 text-sm mt-1">Nairobi to destinations across Kenya. Fixed price, comfortable ride.</p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
            <table className="table-kenyan">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th className="text-center">SUV/Prado</th>
                  <th className="text-center">Van/MPV</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {intercityRoutes.map((r) => (
                  <tr key={r.to}>
                    <td className="font-semibold text-navy-900 text-xs">{r.from}</td>
                    <td className="text-xs">{r.to}</td>
                    <td className="text-center text-xs font-semibold">KES {r.suv.toLocaleString()}</td>
                    <td className="text-center text-xs font-semibold">KES {r.van.toLocaleString()}</td>
                    <td>
                      <Link to="/book" className="text-orange-600 font-bold text-[10px] hover:text-orange-700">BOOK</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mb-8">
            <span className="section-badge">Hourly Hire</span>
            <h2 className="text-xl sm:text-2xl font-black text-navy-900 mt-3">Hourly Car Hire Rates</h2>
            <p className="text-gray-500 text-sm mt-1">Need a car for a few hours? All rates include driver and fuel. Minimum booking applies.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hourlyRates.map((item) => (
              <div key={item.vehicle} className="card-kenyan p-5 text-center">
                <h3 className="text-sm font-bold text-navy-900 mb-1">{item.vehicle}</h3>
                <p className="text-[11px] text-gray-500 mb-3">{item.desc}</p>
                <div className="text-2xl font-black text-orange-600 mb-1">KES {item.rate.toLocaleString()}</div>
                <p className="text-[10px] text-gray-400 mb-3">per hour · {item.minHours}h minimum</p>
                <Link to="/book" className="text-[11px] font-bold bg-navy-900 text-white px-6 py-2 rounded hover:bg-navy-800 transition-colors inline-block">
                  Hire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M-Pesa */}
      <section className="section-padding bg-kenya-green/5 border-y border-kenya-green/20">
        <div className="container-max text-center">
          <span className="text-3xl block mb-3">📱</span>
          <h2 className="text-xl font-black text-navy-900 mb-2">Pay with M-Pesa</h2>
          <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
            Lipa Na M-Pesa. Fast, secure, and convenient. Till number shared when you confirm your booking.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-5 py-2.5">
            <span className="text-green-700 font-bold text-sm">M-Pesa Till: 000000</span>
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="section-padding bg-navy-950 relative">
        <div className="absolute inset-0 pattern-african-dots opacity-10" />
        <div className="container-max relative text-center">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-3">Need a Custom Quote?</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Don&apos;t see your route? Call or WhatsApp us for a personalized quote within minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/book" className="btn-primary text-sm px-8 py-3">Book Online</Link>
            <a href="tel:+254712345678" className="bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              📞 Call Now
            </a>
            <a href="https://wa.me/254700000000" className="bg-green-500 text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
