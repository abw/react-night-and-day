import React from 'react'
import { useTheme } from '../../lib/index'

export const Status = () => {
  const { theme, isDark, isLight } = useTheme()
  return (
    <>
      <div data-testid="theme">{theme}</div>
      <div data-testid="isDark">{isDark ? 'yes' : 'no'}</div>
      <div data-testid="isLight">{isLight ? 'yes' : 'no'}</div>
    </>
  )
}

export default Status