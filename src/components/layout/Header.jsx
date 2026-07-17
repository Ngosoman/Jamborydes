import { navLinks } from '../../data/siteContent'

function Header() {
  return (
    <header className="topbar">
      <p className="brand">JAMBORYDE TRAVEL</p>
      <nav className="top-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="whatsapp-btn" href="https://wa.me/254700000000" target="_blank" rel="noreferrer">
        WhatsApp Booking
      </a>
    </header>
  )
}

export default Header
