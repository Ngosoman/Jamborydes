export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  FLEET: '/fleet',
  PRICING: '/pricing',
  CONTACT: '/contact',
  BOOK: '/book',
}

export const LEGACY_REDIRECTS = [
  { from: '/about', to: ROUTES.HOME },
  { from: '/faqs', to: ROUTES.PRICING },
  { from: '/faq', to: ROUTES.PRICING },
  { from: '/testimonials', to: ROUTES.HOME },
  { from: '/book-online', to: ROUTES.BOOK },
]
