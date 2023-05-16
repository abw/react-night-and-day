import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './site/Router.jsx'
import { RouterProvider, } from 'react-router-dom'
import { ThemeProvider } from '../lib/NightAndDay.jsx'
import './styles/website.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider storageKey="dark-theme">
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
)
