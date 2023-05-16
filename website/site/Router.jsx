import React from 'react'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import { createBrowserRouter } from 'react-router-dom'
import GettingStarted from '../pages/GettingStarted.jsx'
import Installation from '../pages/Installation.jsx'
import ThemeProvider from '../pages/ThemeProvider.jsx'
import UseTheme from '../pages/UseTheme.jsx'
import StorageKey from '../pages/storageKey.jsx'
import Variants from '../pages/Variants.jsx'
import CSSProperties from '../pages/CSSProperties.jsx'
import Icons from '../pages/Icons.jsx'

export const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: [
        { path: '/', element: <Home/> },
        { path: 'getting-started', element: <GettingStarted/> },
        { path: 'installation', element: <Installation/> },
        { path: 'theme-provider', element: <ThemeProvider/> },
        { path: 'use-theme', element: <UseTheme/> },
        { path: 'storage-key', element: <StorageKey/> },
        { path: 'variants', element: <Variants/> },
        { path: 'css-properties', element: <CSSProperties/> },
        { path: 'icons', element: <Icons/> },
      ]
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router