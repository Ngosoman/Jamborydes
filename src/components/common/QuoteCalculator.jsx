import { useState } from 'react';
import { Link } from 'react-router-dom';

const routes = [
  { from: 'JKIA Airport', to: 'Nairobi CBD', price: 2500 },
  { from: 'JKIA Airport', to: 'Westlands', price: 3000 },
  { from: 'JKIA Airport', to: 'Karen', price: 4000 },
  { from: 'JKIA Airport', to: 'Gigiri', price: 3500 },
  { from: 'Nairobi CBD', to: 'JKIA Airport', price: 2500 },
  { from: 'Nairobi', to: 'Naivasha', price: 8000 },
  { from: 'Nairobi', to: 'Nakuru', price: 12000 },
  { from: 'Nairobi', to: 'Kisumu', price: 18000 },
  { from: 'Nairobi', to: 'Mombasa', price: 25000 },
];

export default function QuoteCalculator({ compact = false }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [vehicle, setVehicle] = useState('standard');
  const [quote, setQuote] = useState(null);

  const calculateQuote = () => {
    const route = routes.find((r) => r.from === from && r.to === to);
    if (!route) {
      setQuote({ found: false, message: 'Please contact us for a custom quote on this route.' });
      return;
    }
    const multiplier = vehicle === 'executive' ? 1.5 : vehicle === 'van' ? 1.8 : 1;
    const price = Math.round(route.price * multiplier);
    setQuote({ found: true, price, route: `${from} → ${to}`, vehicle });
  };

  const uniqueFrom = [...new Set(routes.map((r) => r.from))];
  const uniqueTo = [...new Set(routes.map((r) => r.to))];

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 ${compact ? '' : 'max-w-lg mx-auto'}`}>
      <h3 className="text-xl font-bold text-navy-900 mb-6">Instant Quote Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Pickup Location</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
          >
            <option value="">Select pickup...</option>
            {uniqueFrom.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Destination</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
          >
            <option value="">Select destination...</option>
            {uniqueTo.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Vehicle Type</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'standard', label: 'Standard' },
              { value: 'executive', label: 'Executive' },
              { value: 'van', label: 'Luxury Van' },
            ].map((v) => (
              <button
                key={v.value}
                onClick={() => setVehicle(v.value)}
                className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                  vehicle === v.value
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={calculateQuote}
          disabled={!from || !to}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          Calculate Quote
        </button>
      </div>

      {quote && (
        <div className={`mt-6 p-4 rounded-xl ${quote.found ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
          {quote.found ? (
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">{quote.route}</p>
              <p className="text-3xl font-bold text-navy-900">
                KES {quote.price.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">Estimated fare · {quote.vehicle} vehicle</p>
              <Link
                to="/book"
                className="inline-block mt-3 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Book this route →
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm text-gray-700">{quote.message}</p>
              <Link
                to="/contact"
                className="inline-block mt-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Contact us →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
