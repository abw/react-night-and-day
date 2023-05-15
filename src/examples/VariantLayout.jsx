import React from 'react'
import { useTheme } from '@abw/react-night-and-day'

const MainPageLayout = ({children}) => {
  const { theme, variant } = useTheme()

  return (
    <div id="page" className={`${theme} ${variant}`}>
      {children}
    </div>
  )
}

export default MainPageLayout