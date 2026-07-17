const STORAGE_KEY = 'jamboryde_analytics_events'
const MAX_EVENTS = 300

function getStoredEvents() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function setStoredEvents(events) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  } catch {
    // Ignore storage quota and serialization errors.
  }
}

export function trackEvent(eventName, payload = {}) {
  if (typeof window === 'undefined') {
    return
  }

  const entry = {
    event: eventName,
    payload,
    timestamp: new Date().toISOString(),
  }

  const next = [...getStoredEvents(), entry].slice(-MAX_EVENTS)
  setStoredEvents(next)

  if (import.meta.env.DEV) {
    // Keep this visible during development for quick funnel checks.
    // eslint-disable-next-line no-console
    console.info('[analytics]', entry)
  }
}

export function trackPageView(path, meta = {}) {
  trackEvent('page_view', {
    path,
    ...meta,
  })
}

export function getAnalyticsEvents() {
  return getStoredEvents()
}

export function clearAnalyticsEvents() {
  setStoredEvents([])
}

if (typeof window !== 'undefined') {
  window.jamborydeAnalytics = {
    getEvents: getAnalyticsEvents,
    clearEvents: clearAnalyticsEvents,
  }
}
