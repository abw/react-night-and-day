import React             from 'react'
import Icons             from '../examples/Icons.jsx'
import IconsSrc          from '../examples/Icons.jsx?raw'
import Switchers         from '../examples/Switchers.jsx'
import SwitchersSrc      from '../examples/Switchers.jsx?raw'
import SwitchCaption     from '../examples/SwitchCaption.jsx'
import SwitchCaptionSrc  from '../examples/SwitchCaption.jsx?raw'
import IconStyles        from '../examples/IconStyles.jsx'
import IconStylesSrc     from '../examples/IconStyles.jsx?raw'
import ImportCSS         from '../examples/ImportCSS?raw'
import CSSStyles         from '../../public/styles/night-and-day.css?raw'
import Example           from '../site/Example.jsx'
import CodeBlock from '../site/CodeBlock.jsx'

const IconsPage = () =>
  <div>
    <h1>Icons</h1>
    <p>
      The <code>Sun</code> and <code>Moon</code> components are provided to
      render icons of the Sun and Moon, respectively.  These icons are from
      the <a href="https://fontawesome.com/">Fontawesome</a> solid collection.
    </p>
    <Example
      Element={Icons}
      code={IconsSrc}
      caption="Sun and Moon"
      expand
    />

    <p>
      They support all the usual properties: <code>className</code> to add a
      CSS class (the default is <code>night-and-day--icon</code> ),{' '}
      <code>style</code> to define some inline styling, and
      <code>onClick</code> to define a click handler.  The <code>fill</code>{' '}
      property can be set to define the fill color for the icon path.  It
      defaults to <code>currentColor</code> and the icon will inherit the
      current text color.
    </p>
    <Example
      Element={IconStyles}
      code={IconStylesSrc}
      caption="Icons with Style"
      expand
    />

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
    <p>
      If you&apos;re using the default CSS classes then you&apos;ll need to
      add (and possibly adapt) some CSS rules to target them.
      You can import the default CSS rules into your application with something
      like this.
    </p>
    <CodeBlock
      code={ImportCSS}
      language="jsx"
      expand
    />

    <p>
      Or you can just copy and paste this CSS into your stylesheet.
    </p>
    <CodeBlock
      code={CSSStyles}
      language="css"
      expand
    />
  </div>

export default IconsPage