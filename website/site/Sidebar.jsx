import React from 'react'
import Link from './Link.jsx'
import { date, version } from './Utils.jsx'
import { ReactComponent as Abw } from '../svg/abw.svg'

const Sidebar = () =>
  <>
    <div className="menu">
      {/* <h4>@abw/react-night-and-day</h4> */}
      <ul className="menu">
        {/* <li><Link to="/" end text="Home"/></li> */}
        {/* <li><Link to="getting-started" end text="Getting Started"/></li> */}
        <li><Link to="installation" end text="Installation"/></li>
        <li><Link to="theme-provider">ThemeProvider</Link></li>
        <li><Link to="use-theme">useTheme()</Link></li>
        <li><Link to="variants">variant and setVariant()</Link></li>
        <li><Link to="storage-key">storageKey</Link></li>
        <li><Link to="css-properties">CSS Custom Properties</Link></li>
        <li><Link to="icons">Theme Icons</Link></li>
        <li><Link to="switchers">Theme Switchers</Link></li>
      </ul>
    </div>
    <footer>
      <div className="notes">
        <div>
          Version {version}
        </div>
        <a href="https://github.com/abw">
          <Abw/>
        </a>
        <div>
          {date}
        </div>
      </div>
    </footer>
  </>


export default Sidebar