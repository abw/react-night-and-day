import React       from 'react'
import CodeBlock   from '../site/CodeBlock.jsx'
import ProviderSrc from '../examples/Provider.jsx?raw'

const ThemeProvider = () =>
  <div>
    <h1><code>ThemeProvider</code></h1>
    <p>
      Somewhere near the &quot;top&quot; of your code, load the{' '}
      <code>ThemeProvider</code> from <code>@abw/react-night-and-day</code>{' '}
      and wrap your application code with it.  The theme will be
      accessible to any code contained within this element.
    </p>
    <CodeBlock code={ProviderSrc} caption="ThemeProvider" expand/>
  </div>

export default ThemeProvider