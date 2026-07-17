import { useMemo, useState } from 'react'
import { bookingVehicleOptions, services } from '../../data/siteContent'
import { buildBookingWhatsAppMessage, buildWhatsAppUrl } from '../../utils/bookingMessage'
import { trackEvent } from '../../utils/analytics'

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  serviceType: '',
  vehicleType: '',
  pickupLocation: '',
  destination: '',
  travelDate: '',
  pickupTime: '',
  passengers: '1',
  flightNumber: '',
  notes: '',
}

function validate(formData) {
  const errors = {}

  if (!formData.fullName.trim()) errors.fullName = 'Enter your full name.'
  if (!formData.phone.trim()) errors.phone = 'Enter a phone number.'
  if (!formData.serviceType) errors.serviceType = 'Select a service type.'
  if (!formData.pickupLocation.trim()) errors.pickupLocation = 'Enter pickup location.'
  if (!formData.destination.trim()) errors.destination = 'Enter destination.'
  if (!formData.travelDate) errors.travelDate = 'Choose a travel date.'
  if (!formData.pickupTime) errors.pickupTime = 'Choose a pickup time.'

  return errors
}

function FieldError({ message }) {
  if (!message) return null
  return <p className="field-error">{message}</p>
}

function BookingForm() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = useMemo(() => services.map((service) => service.title), [])

  function updateField(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(formData)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      trackEvent('booking_submit_validation_failed', {
        fieldCount: Object.keys(nextErrors).length,
        fields: Object.keys(nextErrors),
      })
      return
    }

    const message = buildBookingWhatsAppMessage(formData)
    const whatsappUrl = buildWhatsAppUrl('254700000000', message)

    setIsSubmitted(true)
    trackEvent('booking_submit_success', {
      serviceType: formData.serviceType,
      vehicleType: formData.vehicleType || 'not_selected',
      passengers: formData.passengers,
      hasFlightNumber: Boolean(formData.flightNumber),
    })
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="booking-form-wrap">
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label>
            Full Name *
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={updateField}
              placeholder="e.g. Jane Wanjiku"
            />
            <FieldError message={errors.fullName} />
          </label>

          <label>
            Phone Number *
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={updateField}
              placeholder="e.g. +254 7XX XXX XXX"
            />
            <FieldError message={errors.phone} />
          </label>

          <label>
            Email (Optional)
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={updateField}
              placeholder="e.g. traveler@email.com"
            />
          </label>

          <label>
            Service Type *
            <select name="serviceType" value={formData.serviceType} onChange={updateField}>
              <option value="">Select service</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <FieldError message={errors.serviceType} />
          </label>

          <label>
            Vehicle Preference
            <select name="vehicleType" value={formData.vehicleType} onChange={updateField}>
              <option value="">No preference</option>
              {bookingVehicleOptions.map((vehicle) => (
                <option key={vehicle} value={vehicle}>
                  {vehicle}
                </option>
              ))}
            </select>
          </label>

          <label>
            Passengers
            <input
              type="number"
              name="passengers"
              min="1"
              max="40"
              value={formData.passengers}
              onChange={updateField}
            />
          </label>

          <label>
            Pickup Location *
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={updateField}
              placeholder="e.g. JKIA Terminal 1A"
            />
            <FieldError message={errors.pickupLocation} />
          </label>

          <label>
            Destination *
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={updateField}
              placeholder="e.g. Westlands"
            />
            <FieldError message={errors.destination} />
          </label>

          <label>
            Travel Date *
            <input type="date" name="travelDate" value={formData.travelDate} onChange={updateField} />
            <FieldError message={errors.travelDate} />
          </label>

          <label>
            Pickup Time *
            <input type="time" name="pickupTime" value={formData.pickupTime} onChange={updateField} />
            <FieldError message={errors.pickupTime} />
          </label>

          <label>
            Flight Number (Airport Trips)
            <input
              type="text"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={updateField}
              placeholder="e.g. KQ 101"
            />
          </label>

          <label className="full-width">
            Additional Notes
            <textarea
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={updateField}
              placeholder="Luggage details, child seat request, corporate account info, etc."
            ></textarea>
          </label>
        </div>

        <button type="submit" className="primary-btn submit-btn">
          Send Quote Request via WhatsApp
        </button>

        {isSubmitted ? (
          <p className="form-success">
            Your booking details are ready and WhatsApp has been opened. Please send the message to complete your
            request.
          </p>
        ) : null}
      </form>
    </section>
  )
}

export default BookingForm
