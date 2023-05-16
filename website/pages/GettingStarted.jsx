import React       from 'react'
import CodeBlock   from '../site/CodeBlock.jsx'
import Example     from '../site/Example.jsx'
import ProviderSrc from '../examples/Provider.jsx?raw'
import StorageKey  from '../examples/StorageKey.jsx?raw'
import PageLayout  from '../examples/PageLayout.jsx?raw'
import CSSProps    from '../examples/CSSProps.css?raw'
import Demo        from '../examples/Demo.jsx'
import DemoSrc     from '../examples/Demo.jsx?raw'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
    <h2>Add the Module</h2>
    <p>
      Add the <code className="code">@abw/react-night-and-day</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash">
      {`## using npm
$ npm add @abw/react-night-and-day

## using yarn
$ yarn add @abw/react-night-and-day

## using pnpm
$ pnpm add @abw/react-night-and-day
`}
    </CodeBlock>

    <h2>Include the <code>ThemeProvider</code></h2>
    <p>
      Somewhere near the &quot;top&quot; of your code, load the{' '}
      <code>ThemeProvider</code> from <code>@abw/react-night-and-day</code>{' '}
      and wrap your application code with it.
    </p>
    <CodeBlock code={ProviderSrc} caption="Provider"/>

    <h2>Access the Theme with <code>useTheme</code></h2>
    <p>
      Anywhere in your application code you can import the <code>useTheme</code>{' '}
      function <code>@abw/react-night-and-day</code>.  When called it returns
      an object contains various data items indicating the current theme and
      functions to change it.
    </p>

    <Example Element={Demo} code={DemoSrc} caption="Using Theme"/>

    <h2>The <code>storageKey</code> Option</h2>
    <p>
      You can pass the <code>storageKey</code> option to the{' '}
      <code>ThemeProvider</code> to have the selected theme stored in local
      storage.  The user&apos;s chosen theme will then be stored locally on
      their browser and automatically reloaded when they visit your site again.
    </p>
    <CodeBlock code={StorageKey} caption="storageKey"/>

    <h2>CSS Custom Properties</h2>
    <p>
      How you change the styling of your site based on the theme depends on
      how you&apos;re implementing the styling for the site.  My preferred
      way is to add a CSS class to a container element for the site.
      For example, if your site has a main page layout component you can
      set it up something like this.
    </p>
    <CodeBlock code={PageLayout} caption="Page Layout"/>
    <p>
      Then your CSS stylesheet might look something like this.
      Define the default properties for the light theme and provide
      alternatives to them for when the dark theme is selected.
    </p>
    <CodeBlock code={CSSProps} caption="CSS Properties" language="css"/>
  </div>

export default GettingStarted