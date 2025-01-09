import React from 'react'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../lib/index'

const Layout = () => {
  const { theme, variant } = useTheme()

  return (
    <div id="page" className={`${theme} ${variant||''}`}>
      <Header/>
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