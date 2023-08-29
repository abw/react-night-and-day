import { PREFERS_DARK } from './Constants.jsx'

const doNothing = () => false

const fakeLocalStorage = () => {
  let store = { }
  return {
    clear: () => (store = {}),
    getItem: (key) => store[key],
    setItem: (key, value) => (store[key] = value),
    removeItem: (key) => delete store[key],
  }
}

const fakeMatchMedia = () => ({
  matches: doNothing,
  addEventListener: doNothing,
  removeEventListener: doNothing,
})

export const hasWindow    = typeof window !== 'undefined'
export const localStorage = (hasWindow && window.localStorage)
  ? window.localStorage
  : fakeLocalStorage()
export const matchMedia   = (hasWindow && window.matchMedia)
  ? item => window.matchMedia(item)
  : fakeMatchMedia
export const prefersDark  = matchMedia(PREFERS_DARK)
export const getTheme     = () => prefersDark.matches
export const splitTheme   = saved => saved.split(' ')
export const joinTheme    = (theme, variant='') => `${theme} ${variant}`
