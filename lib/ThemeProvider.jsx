import React, { useState, useEffect } from 'react'
import Context from './Context.jsx'
import { DARK, LIGHT } from './Constants.jsx'
import {
  localStorage, prefersDark,
  getTheme, splitTheme, joinTheme
} from './Utils.jsx'

export const ThemeProvider = ({storageKey, defaultVariant, children}) => {
  const saved = storageKey
    ? localStorage.getItem(storageKey)
    : null
  const [savedTheme, savedVariant=''] = saved
    ? splitTheme(saved)
    : [getTheme(), null]

  const [isDark, setIsDark] = useState(savedTheme === DARK)
  const [variant, setVariantState] = useState(savedVariant || defaultVariant)

  const saveDark = d  => {
    setIsDark(d)
    if (storageKey) {
      localStorage.setItem(storageKey, joinTheme(d ? DARK : LIGHT, variant))
    }
  }
  const setVariant = v  => {
    setVariantState(v)
    if (storageKey) {
      localStorage.setItem(storageKey, joinTheme(isDark ? DARK : LIGHT, v))
    }
  }

  // register a listener to watch for changes in preference
  const listener = e => saveDark(e.matches)
  useEffect(
    () => {
      prefersDark.addEventListener('change', listener)
      return () => prefersDark.removeEventListener('change', listener)
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
