import { ROUTES } from '../routes/paths'

export const COMPANY_CONTACT = {
  phoneRaw: '254143300151',
  phoneDisplay: '+254143300151',
  whatsappUrl: 'https://wa.me/254143300151',
  email: 'bookings@Jamborydes.com',
}

export const navLinks = [
  { href: ROUTES.HOME, label: 'Jamborydes TRAVEL' },
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

function buildLabeledFleetGallery(prefix, total, altLabel) {
  return Array.from({ length: total }, (_, index) => {
    const imageNumber = String(index + 1).padStart(2, '0')
    return {
      src: `/fleet/${prefix}-${imageNumber}.jpg`,
      alt: `${altLabel} photo ${index + 1}`,
    }
  })
}

function mergeUniqueImages(...groups) {
  const seen = new Set()
  return groups
    .flat()
    .filter((item) => item && item.src && !seen.has(item.src) && seen.add(item.src))
}

const pradoExcludedImages = new Set([
  '/fleet/prado-tx-08.jpg',
  '/fleet/prado-tx-09.jpg',
  '/fleet/prado-tx-10.jpg',
  '/fleet/prado-tx-11.jpg',
])

const pradoLabeledGallery = buildLabeledFleetGallery('prado-tx', 15, 'Toyota Prado TX').filter(
  (item) => !pradoExcludedImages.has(item.src)
)
const alphardLabeledGallery = buildLabeledFleetGallery('alphard', 15, 'Toyota Alphard')

const pradoExteriorGallery = [
  {
    src: '/fleet/prado-tx.jpg',
    alt: 'Toyota Prado TX exterior view',
  },
]

const pradoInteriorGallery = [
  {
    src: '/fleet/prado-interior-seat.jpg',
    alt: 'Toyota Prado TX interior seating',
  },
]

const alphardExteriorGallery = [
  {
    src: '/fleet/alphard.jpg',
    alt: 'Toyota Alphard exterior side view',
  },
  {
    src: '/fleet/alphard-exterior-front.jpg',
    alt: 'Toyota Alphard exterior front view',
  },
]

const alphardInteriorGallery = [
  {
    src: '/fleet/alphard-interior-driver.jpg',
    alt: 'Toyota Alphard driver interior view',
  },
  {
    src: '/fleet/alphard-dashboard.jpg',
    alt: 'Toyota Alphard dashboard interior view',
  },
  {
    src: '/fleet/alphard-cabin.jpg',
    alt: 'Toyota Alphard cabin interior seating',
  },
]

const pradoGallery = mergeUniqueImages(pradoExteriorGallery, pradoInteriorGallery, pradoLabeledGallery)
const alphardGallery = mergeUniqueImages(
  alphardExteriorGallery,
  alphardInteriorGallery,
  alphardLabeledGallery
)

export const heroSlides = [
  pradoExteriorGallery[0]?.src,
  alphardExteriorGallery[0]?.src,
  alphardExteriorGallery[1]?.src,
  pradoInteriorGallery[0]?.src,
  alphardInteriorGallery[0]?.src,
  alphardInteriorGallery[1]?.src,
  alphardInteriorGallery[2]?.src,
  pradoLabeledGallery[4]?.src,
  alphardLabeledGallery[5]?.src,
].filter(Boolean)

export const fleetPreview = [
  {
    name: 'Toyota Prado TX',
    category: 'Executive SUV',
    capacity: 'Up to 7 passengers',
    luggage: '4 large bags',
    bestFor: 'Family transfers, executive movement, and intercity comfort',
    features: ['Spacious cabin', 'Raised seating comfort', 'Smooth road handling'],
    image: pradoGallery[0].src,
    imageAlt: 'Toyota Prado TX available for rental',
    gallery: pradoGallery,
  },
  {
    name: 'Toyota Alphard',
    category: 'Luxury Van',
    capacity: 'Up to 7 passengers',
    luggage: '6 medium bags',
    bestFor: 'VIP pickups, airport transfers, and premium group travel',
    features: ['Executive interior', 'Wide rear seating', 'Premium arrival experience'],
    image: alphardGallery[0].src,
    imageAlt: 'Toyota Alphard available for rental',
    gallery: alphardGallery,
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
  { title: 'Phone', value: COMPANY_CONTACT.phoneDisplay },
  { title: 'Email', value: COMPANY_CONTACT.email },
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
      'Jamborydes is always on time for my airport transfers. The WhatsApp coordination and driver professionalism are excellent.',
  },
  {
    name: 'Karanja M.',
    role: 'Corporate Admin',
    quote:
      'We use Jamborydes for executive pickups and client movement. They are dependable and easy to work with.',
  },
  {
    name: 'Amina T.',
    role: 'Family Traveler',
    quote:
      'Our intercity trip was comfortable and smooth. The team handled timing and luggage details perfectly.',
  },
]


