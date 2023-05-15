import React from 'react'
import { useTheme } from '@abw/react-night-and-day'

const UseThemeExample = () => {
  const {
    theme,        // 'light' or 'dark'
    isDark,       // true if dark theme selected
    isLight,      // true if light theme selected
    setDark,      // set theme to 'dark'
    setLight,     // set theme to 'light'
    toggleTheme,  // toggle theme between 'light' and 'dark'
  } = useTheme()

  return (
    <>
      <p>
        The theme is currently {theme}.<br/>
        It {isLight ? 'is' : 'is not'} light.<br/>
        It {isDark  ? 'is' : 'is not'} dark.<br/>
      </p>
      <button onClick={setLight}>Set Light</button>
      <button onClick={setDark}>Set Dark</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default UseThemeExample