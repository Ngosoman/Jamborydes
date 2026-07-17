import { Link } from 'react-router-dom';

const steps = [
  { number: '1', title: 'WhatsApp or Call', desc: 'Tell us your route, date, and vehicle preference. Get a price in minutes.', icon: '💬' },
  { number: '2', title: 'Confirm Booking', desc: 'Review details, confirm, and we send a confirmation to your phone.', icon: '✅' },
  { number: '3', title: 'Driver Arrives', desc: 'Driver photo and vehicle details sent to you. On time, every time.', icon: '🚘' },
  { number: '4', title: 'Enjoy the Ride', desc: 'Relax. Clean car, cold water, WiFi, smooth driving to your destination.', icon: '😊' },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-max relative">
        <div className="mb-10">
          <span className="section-badge">How It Works</span>
          <h2 className="section-title mt-3">Book in Four Simple Steps</h2>
          <p className="text-gray-600 text-sm mt-2">
            From request to ride — it takes less than 5 minutes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={step.number} className="text-center relative">
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%]">
                  <div className="border-t-2 border-dashed border-gray-200" />
                </div>
              )}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy-900 text-white flex items-center justify-center text-2xl relative shadow-lg">
                {step.icon}
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow">
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-bold text-navy-900 mb-1">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/book" className="btn-primary text-sm">
            Book Your Ride Now
          </Link>
        </div>
      </div>
    </section>
  );
}
