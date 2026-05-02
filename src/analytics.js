import mixpanel from 'mixpanel-browser'

mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, { persistence: 'localStorage' })

export function track(event, properties) {
  mixpanel.track(event, properties)
}
