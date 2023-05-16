import React from 'react'
import Sidebar from './Sidebar.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../lib/NightAndDay.jsx'

const Layout = () => {
  const { theme, variant } = useTheme()

  return (
    <div id="page" className={`${theme} ${variant||''}`}>
      <div id="layout" className={theme}>
        <ScrollToTop/>
        <aside id="sidebar">
          <Sidebar/>
        </aside>
        <main id="content">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout