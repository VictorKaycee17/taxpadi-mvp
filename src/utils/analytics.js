import posthog from 'posthog-js'

// Initialize PostHog
posthog.init('phc_knaBhRNNJvJe0gn9ysh1I1QoPpJ9rnxEnD82IoDltSx', {
    api_host: 'https://us.i.posthog.com',
    loaded: (posthog) => {
        if (import.meta.env.DEV) {
            console.log('PostHog initialized in development mode')
        }
    }
})

/**
 * Track custom events with PostHog
 * @param {string} eventName - The name of the event to track
 * @param {object} properties - Optional properties to include with the event
 */
export const trackEvent = (eventName, properties = {}) => {
    if (!eventName) {
        console.warn('trackEvent: eventName is required')
        return
    }

    posthog.capture(eventName, properties)
}

/**
 * Identify a user
 * @param {string} userId - Unique user identifier
 * @param {object} userProperties - Optional user properties
 */
export const identifyUser = (userId, userProperties = {}) => {
    posthog.identify(userId, userProperties)
}

/**
 * Reset user identification (e.g., on logout)
 */
export const resetUser = () => {
    posthog.reset()
}

export default posthog
