import React from 'react'
import ReactDOM from 'react-dom/client'
import YourAppCode from './YourAppCode.jsx'
import { ThemeProvider } from '@abw/react-night-and-day'

ReactDOM
  .createRoot( document.getElementById('root') )
  .render(
    <React.StrictMode>
      <ThemeProvider>   {/* add this */}
        <YourAppCode/>
      </ThemeProvider>  {/* and this */}
    </React.StrictMode>,
  )
