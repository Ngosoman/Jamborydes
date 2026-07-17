import { useEffect } from 'react'

const SITE_NAME = 'Jamboryde Travel'

function upsertMeta(key, value, attribute = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', value)
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

function SeoMeta({ title, description, path = '/', noindex = false }) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    const url = `${window.location.origin}${path}`

    document.title = fullTitle

    upsertMeta('description', description)
    upsertMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    upsertMeta('og:title', fullTitle, 'property')
    upsertMeta('og:description', description, 'property')
    upsertMeta('og:type', 'website', 'property')
    upsertMeta('og:url', url, 'property')
    upsertMeta('og:site_name', SITE_NAME, 'property')

    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:title', fullTitle)
    upsertMeta('twitter:description', description)

    upsertCanonical(url)
  }, [title, description, path, noindex])

  return null
}

export default SeoMeta
