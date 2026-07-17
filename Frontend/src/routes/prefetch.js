import { ROUTES } from './paths'

export const loadHomePage = () => import('../pages/HomePage')
export const loadAboutPage = () => import('../pages/AboutPage')
export const loadServicesPage = () => import('../pages/ServicesPage')
export const loadFleetPage = () => import('../pages/FleetPage')
export const loadPricingPage = () => import('../pages/PricingPage')
export const loadFaqsPage = () => import('../pages/FaqsPage')
export const loadTestimonialsPage = () => import('../pages/TestimonialsPage')
export const loadContactPage = () => import('../pages/ContactPage')
export const loadBookPage = () => import('../pages/BookPage')
export const loadNotFoundPage = () => import('../pages/NotFoundPage')

const prefetchMap = {
  [ROUTES.HOME]: loadHomePage,
  [ROUTES.ABOUT]: loadAboutPage,
  [ROUTES.SERVICES]: loadServicesPage,
  [ROUTES.FLEET]: loadFleetPage,
  [ROUTES.PRICING]: loadPricingPage,
  [ROUTES.FAQS]: loadFaqsPage,
  [ROUTES.TESTIMONIALS]: loadTestimonialsPage,
  [ROUTES.CONTACT]: loadContactPage,
  [ROUTES.BOOK]: loadBookPage,
}

const prefetchedRoutes = new Set()

export function prefetchRoute(route) {
  if (!route || prefetchedRoutes.has(route)) {
    return
  }

  const loadPage = prefetchMap[route]
  if (!loadPage) {
    return
  }

  prefetchedRoutes.add(route)
  loadPage().catch(() => {
    prefetchedRoutes.delete(route)
  })
}

export function getPrefetchHandlers(route) {
  return {
    onMouseEnter: () => prefetchRoute(route),
    onFocus: () => prefetchRoute(route),
    onTouchStart: () => prefetchRoute(route),
  }
}
