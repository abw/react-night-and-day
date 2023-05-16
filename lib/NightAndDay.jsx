import React, { useState, useEffect, createContext, useContext } from 'react'

const DARK         = 'dark'
const LIGHT        = 'light'
const CHANGE       = 'change'
const PREFERS_DARK = '(prefers-color-scheme: dark)'
const getTheme     = () => window?.matchMedia?.(PREFERS_DARK).matches
const Storage      = window?.localStorage
const splitTheme   = saved => saved.split(' ')
const joinTheme    = (theme, variant='') => `${theme} ${variant}`
const Context      = createContext()

const NightAndDay = ({storageKey, defaultVariant}) => {
  const saved = storageKey
    ? Storage?.getItem(storageKey)
    : null
  const [savedTheme, savedVariant=''] = saved
    ? splitTheme(saved)
    : [getTheme(), null]

  const [isDark, setIsDark] = useState(savedTheme === DARK)
  const [variant, setVariantState] = useState(savedVariant || defaultVariant)

  const saveDark = d  => {
    setIsDark(d)
    if (storageKey && Storage) {
      Storage.setItem(storageKey, joinTheme(d ? DARK : LIGHT, variant))
    }
  }
  const setVariant = v  => {
    setVariantState(v)
    if (storageKey && Storage) {
      Storage.setItem(storageKey, joinTheme(isDark ? DARK : LIGHT, v))
    }
  }

  // register a listener to watch for changes in preference
  const listener = e  => saveDark(e.matches)
  useEffect(
    () => {
      if (window && window.matchMedia) {
        const darkThemeMq = window.matchMedia(PREFERS_DARK)
        darkThemeMq.addEventListener(CHANGE, listener)
        return () => darkThemeMq?.removeEventListener(CHANGE, listener)
      }
    },
    []
  )

  // function to set/toggle the theme
  const toggleTheme = () => saveDark(! isDark)
  const setLight    = () => saveDark(false)
  const setDark     = () => saveDark(true)

  return {
    isDark,
    isLight: ! isDark,
    setDark, setLight, setIsDark,
    toggleTheme,
    theme: isDark ? DARK : LIGHT,
    variant, setVariant
  }
}

export const ThemeProvider = ({children, ...props}) =>
  <Context.Provider value={NightAndDay(props)}>
    {children}
  </Context.Provider>

export const useTheme = () => useContext(Context)

export default NightAndDay
