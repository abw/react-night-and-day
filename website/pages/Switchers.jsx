import React             from 'react'
import Switchers         from '../examples/Switchers.jsx'
import SwitchersSrc      from '../examples/Switchers.jsx?raw'
import SwitchCaption     from '../examples/SwitchCaption.jsx'
import SwitchCaptionSrc  from '../examples/SwitchCaption.jsx?raw'
import Example           from '../site/Example.jsx'

const SwitchersPage = () =>
  <div>
    <h1>Theme Switchers</h1>
    <p>
      The <code>Sunrise</code> and <code>Nightfall</code> components are
      theme switchers that use these icons.
    </p>
    <Example
      Element={Switchers}
      code={SwitchersSrc}
      caption="Sunrise and Nightfall"
      expand
    />

    <p>
      The <code>caption</code> property can be used to add a caption to these
      components.  They also support <code>className</code> (defaults to{' '}
      <code>night-and-day--switcher</code>), <code>iconClass</code> (defaults to{' '}
      <code>night-and-day--icon</code>), <code>captionClass</code> (defaults to{' '}
      <code>night-and-day--caption</code>), <code>style</code>, <code>iconStyle</code>{' '}
      and <code>captionStyle</code> properties to set CSS classes or styles
      for each of the elements.
    </p>
    <Example
      Element={SwitchCaption}
      code={SwitchCaptionSrc}
      caption="Switch Captions"
      expand
    />
  </div>

export default SwitchersPage