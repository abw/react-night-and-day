import { PREFERS_DARK } from './Constants'

// const doNothing = () => false

const fakeLocalStorage = () => {
  let store: Record<string, unknown> = { }
  return {
    clear: () => (store = {}),
    getItem: (key: string) => store[key],
    setItem: (key: string, value: unknown) => (store[key] = value),
    removeItem: (key: string) => delete store[key],
  }
}

/*
const fakeMatchMedia = () => ({
  matches: false,
  media: '',
  addEventListener: doNothing,
  removeEventListener: doNothing,
})
*/

export const hasWindow    = typeof window !== 'undefined'
export const localStorage = (hasWindow && window.localStorage)
  ? window.localStorage
  : fakeLocalStorage()
export const matchMedia   = (hasWindow && window.matchMedia)
  ? (item: string) => window.matchMedia(item)
  : null
  //fakeMatchMedia
// export const matchMedia   = (item: string) => window.matchMedia(item)
export const prefersDark  = matchMedia && matchMedia(PREFERS_DARK)
export const getTheme     = () => prefersDark ? prefersDark.matches : null
export const splitTheme   = (saved: string) => saved.split(' ')
export const joinTheme    = (theme: string, variant='') => `${theme} ${variant}`
