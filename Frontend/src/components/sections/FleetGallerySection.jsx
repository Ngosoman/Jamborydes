import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { fleetPreview } from '../../data/siteContent'
import { ROUTES } from '../../routes/paths'
import { getPrefetchHandlers } from '../../routes/prefetch'
import { trackEvent } from '../../utils/analytics'

function FleetGallerySection() {
  const vehiclesWithGallery = useMemo(
    () => fleetPreview.filter((vehicle) => Array.isArray(vehicle.gallery) && vehicle.gallery.length > 0),
    [],
  )

  const [activeVehicle, setActiveVehicle] = useState(vehiclesWithGallery[0]?.name || '')
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const currentVehicle =
    vehiclesWithGallery.find((vehicle) => vehicle.name === activeVehicle) || vehiclesWithGallery[0] || null
  const currentGallery = currentVehicle?.gallery || []
  const currentImage = currentGallery[activeImageIndex] || currentGallery[0] || null

  if (!currentVehicle || currentGallery.length === 0) {
    return null
  }

  function switchVehicle(vehicleName) {
    setActiveVehicle(vehicleName)
    setActiveImageIndex(0)
  }

  return (
    <section className="section fleet-gallery-section" id="fleet-gallery">
      <div className="section-head">
        <p className="kicker">Fleet Gallery</p>
        <h2>Real photos of our current rental vehicles</h2>
      </div>

      <div className="fleet-gallery-tabs" role="tablist" aria-label="Fleet gallery vehicle tabs">
        {vehiclesWithGallery.map((vehicle) => (
          <button
            key={vehicle.name}
            type="button"
            className={vehicle.name === currentVehicle.name ? 'fleet-tab is-active' : 'fleet-tab'}
            onClick={() => switchVehicle(vehicle.name)}
          >
            {vehicle.name}
          </button>
        ))}
      </div>

      <article className="fleet-gallery-card">
        <div className="fleet-gallery-main">
          {currentImage ? <img src={currentImage.src} alt={currentImage.alt} loading="lazy" /> : null}
        </div>

        <div className="fleet-gallery-meta">
          <h3>{currentVehicle.name}</h3>
          <p>{currentVehicle.capacity}</p>
          <p>{currentVehicle.luggage}</p>

          <div className="fleet-gallery-thumbs" aria-label={`${currentVehicle.name} gallery thumbnails`}>
            {currentGallery.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={index === activeImageIndex ? 'fleet-thumb is-active' : 'fleet-thumb'}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
            ))}
          </div>

          <Link
            to={ROUTES.BOOK}
            className="primary-btn fleet-book-btn"
            {...getPrefetchHandlers(ROUTES.BOOK)}
            onClick={() =>
              trackEvent('cta_click', {
                location: 'fleet_gallery',
                label: `Book ${currentVehicle.name}`,
                target: ROUTES.BOOK,
              })
            }
          >
            Book This Vehicle
          </Link>
        </div>
      </article>
    </section>
  )
}

export default FleetGallerySection
