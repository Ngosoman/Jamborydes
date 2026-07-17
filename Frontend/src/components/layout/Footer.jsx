import { COMPANY_CONTACT } from '../../data/siteContent'

function Footer() {
  return (
    <footer className="footer">
      <p>Jamboryde Travel · Nairobi, Kenya</p>
      <p>
        Phone: {COMPANY_CONTACT.phoneDisplay} · Email: {COMPANY_CONTACT.email}
      </p>
    </footer>
  )
}

export default Footer
