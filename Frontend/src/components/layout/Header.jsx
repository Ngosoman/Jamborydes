import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/siteContent'
import { COMPANY_CONTACT } from '../../data/siteContent'
import { getPrefetchHandlers } from '../../routes/prefetch'
import { trackEvent } from '../../utils/analytics'

function Header() {
  return (
    <header className="topbar">
      <p className="brand">Jamborydes TRAVEL</p>
      <nav className="top-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) => (isActive ? 'is-active' : '')}
            end
            {...getPrefetchHandlers(link.href)}
            onClick={() =>
              trackEvent('cta_click', {
                location: 'header_nav',
                label: link.label,
                target: link.href,
              })
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <a className="whatsapp-btn" href={COMPANY_CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp Booking
      </a>
    </header>
  )
}

export default Header


