import React from 'react'
import { useTheme } from '../../lib/index.jsx'

export const Buttons = () => {
  const { setLight, setDark, toggleTheme } = useTheme()
  return (
    <>
      <button onClick={setLight} data-testid="setLight">Set Light</button>
      <button onClick={setDark} data-testid="setDark">Set Dark</button>
      <button onClick={toggleTheme} data-testid="toggleTheme">Toggle Theme</button>
    </>
  )
}

export default Buttons