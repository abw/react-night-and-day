import React from 'react'
import { ThemeProvider } from '../../lib/index'

export const Provider = ({children}) =>
  <ThemeProvider>
    {children}
  </ThemeProvider>

export default Provider