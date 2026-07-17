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
  const [eventFilter, setEventFilter] = useState('all')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const eventTypes = useMemo(() => {
    const types = new Set(events.map((entry) => entry.event).filter(Boolean))
    return ['all', ...Array.from(types).sort()]
  }, [events])

  const filteredEvents = useMemo(() => {
    return events.filter((entry) => {
      if (eventFilter !== 'all' && entry.event !== eventFilter) {
        return false
      }

      const timestampMs = Date.parse(entry.timestamp || '')
      if (Number.isNaN(timestampMs)) {
        return false
      }

      if (startDate) {
        const startMs = Date.parse(startDate)
        if (!Number.isNaN(startMs) && timestampMs < startMs) {
          return false
        }
      }

      if (endDate) {
        const endMs = Date.parse(endDate)
        if (!Number.isNaN(endMs) && timestampMs > endMs) {
          return false
        }
      }

      return true
    })
  }, [events, eventFilter, startDate, endDate])

  const eventSummary = useMemo(() => {
    const summary = {}

    for (const entry of filteredEvents) {
      summary[entry.event] = (summary[entry.event] || 0) + 1
    }

    return Object.entries(summary).sort((a, b) => b[1] - a[1])
  }, [filteredEvents])

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

  function resetFilters() {
    setEventFilter('all')
    setStartDate('')
    setEndDate('')
  }

  function exportJson() {
    const payload = JSON.stringify(filteredEvents, null, 2)
    downloadFile('Jamborydes-analytics-events.json', payload, 'application/json;charset=utf-8')
  }

  function exportCsv() {
    const rows = [
      ['timestamp', 'event', 'path', 'location', 'label', 'target', 'payload'],
      ...filteredEvents.map((entry) => [
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
    downloadFile('Jamborydes-analytics-events.csv', content, 'text/csv;charset=utf-8')
  }

  return (
    <aside className="analytics-debug" aria-label="Analytics debug panel">
      <button
        type="button"
        className="analytics-toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        Analytics ({filteredEvents.length}/{events.length})
      </button>

      {isOpen ? (
        <div className="analytics-panel">
          <p className="analytics-title">Event Summary</p>
          <div className="analytics-filters">
            <label>
              Event
              <select value={eventFilter} onChange={(event) => setEventFilter(event.target.value)}>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All events' : type}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Start
              <input type="datetime-local" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
            </label>
            <label>
              End
              <input type="datetime-local" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
            </label>
          </div>
          <div className="analytics-actions">
            <button type="button" onClick={refresh}>
              Refresh
            </button>
            <button type="button" onClick={resetFilters}>
              Reset Filters
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


