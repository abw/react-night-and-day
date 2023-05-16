import React from 'react'
import Link from './Link.jsx'
import { Toggle } from '../../lib/index.jsx'
import Palette from './Palette.jsx'
import { ReactComponent as Github } from '../svg/github.svg'

const Header = () =>
  <header className="site">
    <div className="container">
      <div>
        <Link to="/" text="@abw/react-night-and-day"/>
      </div>
      <div className="controls">
        <Palette/>
        <Toggle/>
        <a href="https://github.com/abw/react-night-and-day" className="github">
          <Github/>
        </a>
      </div>
    </div>
  </header>

export default Header