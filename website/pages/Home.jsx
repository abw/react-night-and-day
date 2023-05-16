import React      from 'react'
import Link       from '../site/Link.jsx'
import Demo       from '../examples/Demo.jsx'
import { ReactComponent as Badger } from '../svg/badger.svg'
import { ReactComponent as NightAndDay } from '../svg/night-and-day.svg'

const Home = () =>
  <div className="">
    <h1>@abw/react-night-and-day</h1>
    <div className="pic-side">
      <div className="logo">
        <NightAndDay/>
      </div>
      <div className="blurb">
        <p className="intro">
          <code className="code">react-night-and-day</code> is a simple React
          library for switching between light and dark themes.
        </p>
        <p>
          It respects the user preference set in their browser, detects
          changes to that preference, and allows the theme to be toggled
          manually.  As well as toggling between <code>light</code> and{' '}
          <code>dark</code> themes it allows you to define your own theme
          variants. It also supports an option to store the user&apos;s
          selected theme (and any variant) in local storage so the site
          &quot;remembers&quot; their preferences for the next time they
          visit your site.
        </p>
      </div>
    </div>
    <h2>Demo</h2>
    <div className="demo">
      <Demo/>
    </div>
    <h2>Documentation</h2>
    <ul className="largish menu">
      <li><Link to="installation" text="Installation"/> - adding the code to your project</li>
      <li><Link to="theme-provider"><code>ThemeProvider</code></Link> - wrap this around your app</li>
      <li><Link to="use-theme"><code>useTheme()</code></Link> - access the themey goodness</li>
      <li><Link to="variants"><code>variant</code> and <code>setVariant</code></Link> - define variations on a theme</li>
      <li><Link to="storage-key"><code>storageKey</code></Link> - save theme selection in local storage</li>
      <li><Link to="css-properties">CSS Custom Properties</Link> - how to change styling based on the theme</li>
      <li><Link to="icons">Icons</Link> - icons to display and toggle theme</li>
    </ul>
    <div className="badger">
      <Badger/>
      <div className="caption">
        Built by Badgers
      </div>
    </div>
  </div>

export default Home

