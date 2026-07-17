function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jamboryde Travel',
    slogan: 'Your Journey, Our Priority',
    description:
      'Jamboryde Travel offers airport transfers, city rides, intercity travel, and corporate transport in and around Nairobi.',
    areaServed: ['Nairobi', 'Westlands', 'Karen', 'Kilimani', 'Gigiri', 'Naivasha', 'Nakuru'],
    telephone: '+254700000000',
    email: 'bookings@jamboryde.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: ['https://wa.me/254700000000'],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default LocalBusinessSchema
