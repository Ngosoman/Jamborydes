export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  FLEET: '/fleet',
  PRICING: '/pricing',
  FAQS: '/faqs',
  TESTIMONIALS: '/testimonials',
  CONTACT: '/contact',
  BOOK: '/book',
}

export const LEGACY_REDIRECTS = [
  { from: '/faq', to: ROUTES.FAQS },
  { from: '/book-online', to: ROUTES.BOOK },
]
