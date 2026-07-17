import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-0 overflow-hidden">
      {/* Background - REAL Nairobi street with cars */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590701833289-e6283f6e46fc?w=1920&h=1200&fit=crop&auto=format"
          alt="Nairobi"
          className="w-full h-full object-cover"
        />
        {/* Dark navy overlay with warm tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/85 to-navy-950/95" />
        {/* African dot pattern overlay */}
        <div className="absolute inset-0 pattern-african-dots opacity-30" />
      </div>

      {/* Content area */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-5 gap-8 items-end">
          {/* Left — main message */}
          <div className="lg:col-span-3">
            {/* Kenyan flag accent line */}
            <div className="flag-ribbon w-24 mb-6" />

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-5 tracking-tight">
              Car Hire &amp; Transport{' '}
              <span className="text-orange-500 block sm:inline">in Nairobi</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              Clean, well-maintained vehicles with professional drivers. Airport transfers, 
              corporate transport, and car hire across Nairobi and beyond. 
              Available 24/7 — call or WhatsApp to book.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/book" className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2">
                Book Your Ride
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-8 py-3.5 rounded-lg transition-all shadow-md shadow-green-500/30 hover:shadow-lg hover:shadow-green-600/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Booking
              </a>
            </div>

            {/* Quick contact strip */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-300">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available 24/7
              </span>
              <span className="inline-flex items-center gap-2">
                📞 <span className="text-white font-semibold">0712 345 678</span>
              </span>
              <span className="inline-flex items-center gap-2">
                📍 <span>Nairobi, Kenya</span>
              </span>
            </div>
          </div>

          {/* Right — rate cards */}
          <div className="lg:col-span-2 space-y-3 hidden lg:block">
            {[
              { route: 'JKIA → Nairobi CBD', price: 'KSh 2,500', tag: 'Airport Pickup' },
              { route: 'Nairobi → Naivasha', price: 'KSh 12,000', tag: 'Intercity' },
              { route: 'Nairobi → Nakuru', price: 'KSh 15,000', tag: 'Popular Route' },
            ].map((item) => (
              <div
                key={item.route}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-4 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">{item.tag}</span>
                    <p className="text-white font-semibold text-sm mt-0.5">{item.route}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-400 font-extrabold text-lg">{item.price}</p>
                    <p className="text-gray-400 text-[10px]">with driver</p>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/pricing"
              className="block text-center text-orange-400 hover:text-orange-300 font-semibold text-sm py-2 transition-colors"
            >
              View all rates &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
