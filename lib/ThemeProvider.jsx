import React, { useState, useEffect } from 'react'
import Context from './Context.jsx'
// import { CHANGE, DARK, LIGHT, PREFERS_DARK } from './Constants.jsx'

const DARK       = 'dark'
const LIGHT      = 'light'
const CHANGE     = 'change'
const PREFERS    = '(prefers-color-scheme: dark)'
const getTheme   = () => window?.matchMedia?.(PREFERS).matches
const Storage    = window?.localStorage
const splitTheme = saved => saved.split(' ')
const joinTheme  = (theme, variant='') => `${theme} ${variant}`

export const ThemeProvider = ({storageKey, defaultVariant, children}) => {
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
        const darkThemeMq = window.matchMedia(PREFERS)
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
  const context     = {
    isDark,
    isLight: ! isDark,
    setDark, setLight, setIsDark,
    toggleTheme,
    theme: isDark ? DARK : LIGHT,
    variant, setVariant
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}
