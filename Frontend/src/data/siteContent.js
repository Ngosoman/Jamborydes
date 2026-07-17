import { ROUTES } from '../routes/paths'

export const navLinks = [
  { href: ROUTES.HOME, label: 'Home' },
  { href: ROUTES.ABOUT, label: 'About' },
  { href: ROUTES.SERVICES, label: 'Services' },
  { href: ROUTES.FLEET, label: 'Fleet' },
  { href: ROUTES.PRICING, label: 'Pricing' },
  { href: ROUTES.FAQS, label: 'FAQs' },
  { href: ROUTES.TESTIMONIALS, label: 'Testimonials' },
  { href: ROUTES.CONTACT, label: 'Contact' },
  { href: ROUTES.BOOK, label: 'Book' },
]

export const bookingVehicleOptions = [
  'Toyota Prado TX',
  'Toyota Alphard',
  'Business Sedan',
  'Group Shuttle Van',
]

export const services = [
  {
    title: 'Airport Transfers',
    description:
      'JKIA pickups and drop-offs with flight-aware scheduling and professional meet & greet support.',
  },
  {
    title: 'City Transfers',
    description:
      'Reliable transport across Nairobi key zones including Westlands, Karen, Kilimani, Gigiri, and CBD.',
  },
  {
    title: 'Intercity Travel',
    description:
      'Comfortable long-distance rides from Nairobi to Naivasha, Nakuru, Kisumu, and Mombasa.',
  },
  {
    title: 'Corporate Transport',
    description:
      'VIP movement, recurring staff logistics, and event transport tailored for business teams.',
  },
  {
    title: 'Group Transfers',
    description:
      'Large-capacity movement for schools, churches, tour groups, and event attendees.',
  },
  {
    title: 'Car Hire',
    description:
      'Chauffeur-driven and executive hire options designed for comfort, flexibility, and style.',
  },
]

export const fleetPreview = [
  {
    name: 'Toyota Prado TX',
    category: 'Executive SUV',
    capacity: 'Up to 7 passengers',
    luggage: '4 large bags',
    bestFor: 'Family transfers, executive movement, and intercity comfort',
    features: ['Spacious cabin', 'Raised seating comfort', 'Smooth road handling'],
    image: '/fleet/prado-tx.jpg',
    imageAlt: 'Toyota Prado TX available for rental',
  },
  {
    name: 'Toyota Alphard',
    category: 'Luxury Van',
    capacity: 'Up to 7 passengers',
    luggage: '6 medium bags',
    bestFor: 'VIP pickups, airport transfers, and premium group travel',
    features: ['Executive interior', 'Wide rear seating', 'Premium arrival experience'],
    image: '/fleet/alphard.jpg',
    imageAlt: 'Toyota Alphard available for rental',
  },
  {
    name: 'Business Sedan',
    category: 'City Comfort Sedan',
    capacity: 'Up to 3 passengers',
    luggage: '2 large bags',
    bestFor: 'Daily city transfers and efficient business travel',
    features: ['Compact convenience', 'Comfortable ride quality', 'Ideal for urban movement'],
  },
]

export const popularRoutes = [
  {
    route: 'JKIA -> Westlands',
    fare: 'From KES 4,500',
    note: 'Standard sedan, daytime rate',
  },
  {
    route: 'JKIA -> Karen',
    fare: 'From KES 5,500',
    note: 'Includes meet & greet support',
  },
  {
    route: 'Nairobi -> Naivasha',
    fare: 'From KES 13,500',
    note: 'One-way, sedan category',
  },
  {
    route: 'Nairobi -> Nakuru',
    fare: 'From KES 18,000',
    note: 'One-way, intercity service',
  },
]

export const faqs = [
  {
    question: 'What happens if my flight is delayed?',
    answer:
      'For airport transfers, we monitor flight updates and adjust pickup timing so you are not charged for standard delays.',
  },
  {
    question: 'Can I book for corporate teams and VIP guests?',
    answer:
      'Yes. We support recurring company transport, executive pickups, and event logistics with dedicated coordination.',
  },
  {
    question: 'How do I confirm my booking?',
    answer:
      'You can request via WhatsApp or phone, then our team confirms your route, vehicle, and final fare before dispatch.',
  },
  {
    question: 'Do you offer intercity transfers outside Nairobi?',
    answer:
      'Yes. Common routes include Naivasha, Nakuru, Kisumu, and Mombasa. Custom routes are also available on request.',
  },
]

export const serviceAreas = [
  'Nairobi CBD',
  'Westlands',
  'Karen',
  'Kilimani',
  'Gigiri',
  'JKIA',
  'Naivasha',
  'Nakuru',
]

export const trustPoints = [
  'Flight delay handling for airport pickups',
  'Route-ready local drivers with customer-first service',
  'Clear communication via WhatsApp, phone, and email',
  'Corporate-ready transport for teams, VIPs, and events',
]

export const contactItems = [
  { title: 'Phone', value: '+254 700 000 000' },
  { title: 'Email', value: 'bookings@jamboryde.com' },
  { title: 'Operating Hours', value: 'Mon - Sun: 24/7 by booking' },
  { title: 'Office Base', value: 'Nairobi, Kenya' },
]

export const companyValues = [
  {
    title: 'Reliability',
    description: 'Consistent pickups, accurate timing, and proactive updates for every trip.',
  },
  {
    title: 'Safety',
    description: 'Professional drivers, maintained vehicles, and customer-first travel standards.',
  },
  {
    title: 'Professionalism',
    description: 'Clear communication, polished service, and corporate-ready operations.',
  },
]

export const testimonials = [
  {
    name: 'Nancy W.',
    role: 'Business Traveler',
    quote:
      'Jamboryde is always on time for my airport transfers. The WhatsApp coordination and driver professionalism are excellent.',
  },
  {
    name: 'Karanja M.',
    role: 'Corporate Admin',
    quote:
      'We use Jamboryde for executive pickups and client movement. They are dependable and easy to work with.',
  },
  {
    name: 'Amina T.',
    role: 'Family Traveler',
    quote:
      'Our intercity trip was comfortable and smooth. The team handled timing and luggage details perfectly.',
  },
]
