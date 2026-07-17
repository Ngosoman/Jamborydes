import { useMemo, useState } from 'react'
import { clearAnalyticsEvents, getAnalyticsEvents } from '../../utils/analytics'

function toCsvValue(value) {
  const text = String(value ?? '')
  const escaped = text.replace(/"/g, '""')
  return `"${escaped}"`
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

function shouldShowPanel() {
  if (typeof window === 'undefined') {
    return false
  }

  const params = new URLSearchParams(window.location.search)
  return import.meta.env.DEV || params.get('debug') === 'analytics'
}

function AnalyticsDebugPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [events, setEvents] = useState(() => getAnalyticsEvents())

  const eventSummary = useMemo(() => {
    const summary = {}

    for (const entry of events) {
      summary[entry.event] = (summary[entry.event] || 0) + 1
    }

    return Object.entries(summary).sort((a, b) => b[1] - a[1])
  }, [events])

  if (!shouldShowPanel()) {
    return null
  }

  function refresh() {
    setEvents(getAnalyticsEvents())
  }

  function clearAll() {
    clearAnalyticsEvents()
    refresh()
  }

  function exportJson() {
    const payload = JSON.stringify(events, null, 2)
    downloadFile('jamboryde-analytics-events.json', payload, 'application/json;charset=utf-8')
  }

  function exportCsv() {
    const rows = [
      ['timestamp', 'event', 'path', 'location', 'label', 'target', 'payload'],
      ...events.map((entry) => [
        entry.timestamp || '',
        entry.event || '',
        entry.payload?.path || '',
        entry.payload?.location || '',
        entry.payload?.label || '',
        entry.payload?.target || '',
        JSON.stringify(entry.payload || {}),
      ]),
    ]

    const content = rows.map((row) => row.map((cell) => toCsvValue(cell)).join(',')).join('\n')
    downloadFile('jamboryde-analytics-events.csv', content, 'text/csv;charset=utf-8')
  }

  return (
    <aside className="analytics-debug" aria-label="Analytics debug panel">
      <button
        type="button"
        className="analytics-toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        Analytics ({events.length})
      </button>

      {isOpen ? (
        <div className="analytics-panel">
          <p className="analytics-title">Event Summary</p>
          <div className="analytics-actions">
            <button type="button" onClick={refresh}>
              Refresh
            </button>
            <button type="button" onClick={exportJson}>
              Export JSON
            </button>
            <button type="button" onClick={exportCsv}>
              Export CSV
            </button>
            <button type="button" onClick={clearAll}>
              Clear
            </button>
          </div>
          <ul className="analytics-summary">
            {eventSummary.length === 0 ? <li>No analytics events yet.</li> : null}
            {eventSummary.map(([eventName, count]) => (
              <li key={eventName}>
                <span>{eventName}</span>
                <strong>{count}</strong>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  )
}

export default AnalyticsDebugPanel
