import { COMPANY_CONTACT } from '../../data/siteContent'

function Footer() {
  return (
    <footer className="footer">
      <p>Jamborydes Travel Â· Nairobi, Kenya</p>
      <p>
        Phone: {COMPANY_CONTACT.phoneDisplay} Â· Email: {COMPANY_CONTACT.email}
      </p>
    </footer>
  )
}

export default Footer


