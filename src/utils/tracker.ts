/* eslint-disable @typescript-eslint/no-explicit-any */

import { StringMap } from '../interfaces'

const dataLayerTrack = (eventParams: StringMap) => {
  if (window) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(eventParams)
  }
}

// Send tracking events for all Google Analytics Scripts active on the website
const gaTrack = (eventParams: StringMap) => {
  if (!window || !window.ga) {
    return
  }

  if (typeof window.ga.getAll === 'function') {
    const trackers = window.ga.getAll().filter((ga: any) => ga.I)

    trackers.forEach((tracker: any) => {
      tracker.send(eventParams)
    })
  } else {
    window.ga('send', eventParams)
  }
}

export function trackPageview(customProps: StringMap = {}) {
  if (typeof window === 'undefined') {
    return
  }

  gaTrack({
    hitType: 'pageview',
    ...customProps
  })
}

export function trackEvent({ name, category, action, label }: StringMap) {
  gaTrack({
    hitType: 'event',
    eventName: name,
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  })

  dataLayerTrack({
    event: name,
    category,
    action,
    label
  })
}
