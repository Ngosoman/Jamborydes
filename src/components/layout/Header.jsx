import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/siteContent'

function Header() {
  return (
    <header className="topbar">
      <p className="brand">JAMBORYDE TRAVEL</p>
      <nav className="top-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink key={link.href} to={link.href} className={({ isActive }) => (isActive ? 'is-active' : '')} end>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <a className="whatsapp-btn" href="https://wa.me/254700000000" target="_blank" rel="noreferrer">
        WhatsApp Booking
      </a>
    </header>
  )
}

export default Header
