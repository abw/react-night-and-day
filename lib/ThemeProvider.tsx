import React, { useState, useEffect } from 'react'
import Context from './Context.js'
import { DARK, LIGHT } from './Constants.js'
import {
  localStorage, prefersDark,
  getTheme, splitTheme, joinTheme
} from './Utils.js'
import { EffectCallback } from 'react'
import { doNothing } from '@abw/badger-utils'

export type ContextData = {
  isDark: boolean,
  isLight: boolean,
  setDark: () => void,
  setLight: () => void,
  setIsDark: (dark: boolean) => void,
  toggleTheme: () => void,
  theme: string,
  variant?: string,
  setVariant: (variant: string) => void
}

export const NULL_CONTEXT: ContextData = {
  isDark: false,
  isLight: true,
  setDark: doNothing,
  setLight: doNothing,
  setIsDark: doNothing,
  toggleTheme: doNothing,
  theme: LIGHT,
  variant: '',
  setVariant: doNothing
}

export type ThemeProviderProps = {
  storageKey?: string,
  defaultVariant?: string,
}

export const ThemeProvider = ({
  storageKey,
  defaultVariant,
  children
}: React.PropsWithChildren<ThemeProviderProps>) => {
  const saved = storageKey
    ? localStorage.getItem(storageKey)
    : null
  const [savedTheme, savedVariant=''] = saved
    ? splitTheme(saved)
    : [getTheme(), null]

  const [isDark, setIsDark] = useState(savedTheme === DARK)
  const [variant, setVariantState] = useState(savedVariant || defaultVariant)

  const saveDark = (dark: boolean)  => {
    setIsDark(dark)
    if (storageKey) {
      localStorage.setItem(
        storageKey,
        joinTheme(dark ? DARK : LIGHT, variant)
      )
    }
  }
  const setVariant = (variant: string)  => {
    setVariantState(variant)
    if (storageKey) {
      localStorage.setItem(
        storageKey,
        joinTheme(isDark ? DARK : LIGHT, variant)
      )
    }
  }

  // register a listener to watch for changes in preference
  const listener = e => saveDark(e.matches)
  useEffect(
    (): ReturnType<EffectCallback> => {
      prefersDark.addEventListener('change', listener)
      return (): void => {
        prefersDark.removeEventListener('change', listener)
      }
    },
    []
  )

  // function to set/toggle the theme
  const toggleTheme = () => saveDark(! isDark)
  const setLight    = () => saveDark(false)
  const setDark     = () => saveDark(true)
  const context: ContextData = {
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
