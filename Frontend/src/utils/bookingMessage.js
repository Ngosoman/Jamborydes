function formatField(label, value) {
  return `*${label}:* ${value || 'N/A'}`
}

export function buildBookingWhatsAppMessage(formData) {
  const lines = [
    '*Jamborydes BOOKING REQUEST*',
    '',
    formatField('Full Name', formData.fullName),
    formatField('Phone Number', formData.phone),
    formatField('Email', formData.email),
    formatField('Service Type', formData.serviceType),
    formatField('Vehicle Preference', formData.vehicleType),
    formatField('Pickup Location', formData.pickupLocation),
    formatField('Destination', formData.destination),
    formatField('Travel Date', formData.travelDate),
    formatField('Pickup Time', formData.pickupTime),
    formatField('Passengers', formData.passengers),
    formatField('Flight Number', formData.flightNumber),
    formatField('Additional Notes', formData.notes),
  ]

  return lines.join('\n')
}

export function buildWhatsAppUrl(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}


