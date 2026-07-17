import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 pattern-african-dots opacity-15" />
      <div className="absolute top-0 left-0 right-0 flag-divider">
        <div /><div /><div />
      </div>

      <div className="container-max relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            Ready to Book a Ride?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Airport pickup, business meeting, weekend road trip, or a ride across town — we are ready when you are. Call, WhatsApp, or book online.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link to="/book" className="btn-primary text-base px-10 py-3.5">
              Book Online
            </Link>
            <a
              href="tel:+254712345678"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-3.5 rounded-lg border border-white/20 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0712 345 678
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base px-8 py-3.5 rounded-lg transition-all shadow-md shadow-green-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Quick contact strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 bg-white/5 rounded-lg px-6 py-3 border border-white/10">
            <span>📞 0712 345 678</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>✉️ info@jamborydetravel.co.ke</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>📍 Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
