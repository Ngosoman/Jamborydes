import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoMark from '../common/LogoMark';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] shadow-2xl shadow-black/40" style={{ backgroundColor: 'rgba(10, 17, 40, 0.98)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <LogoMark size={30} />
          <span className="font-display text-xl font-bold text-white tracking-widest">
            JAMBORYDES
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 tracking-wide ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+254700000000" className="text-sm text-white/50 hover:text-white transition-colors">
            +254 700 000 000
          </a>
          <Link
            to="/contact"
            className="bg-[#F97316] hover:bg-[#EA6C0A] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 tracking-wide hover:shadow-lg hover:shadow-orange-500/25"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A1128]/98 border-t border-white/[0.06] px-6 py-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-4 text-white/70 hover:text-white border-b border-white/[0.06] text-base tracking-wide transition-colors"
            >
              {link.label}
              <span className="text-white/20">&rarr;</span>
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 w-full bg-[#F97316] text-white font-semibold py-4 rounded-full text-sm tracking-wide block text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
