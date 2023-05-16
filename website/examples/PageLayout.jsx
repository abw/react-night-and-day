import React from 'react'
import { useTheme } from '@abw/react-night-and-day'

const MainPageLayout = ({children}) => {
  const { theme } = useTheme()

  return (
    <div id="page" className={theme}>
      {children}
    </div>
  )
}

export default MainPageLayout