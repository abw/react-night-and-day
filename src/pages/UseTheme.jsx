import React       from 'react'
import UseTheme    from '../examples/UseTheme.jsx'
import UseThemeSrc from '../examples/UseTheme.jsx?raw'
import Example     from '../site/Example.jsx'

const UseThemePage = () =>
  <div>
    <h1><code>useTheme()</code></h1>
    <p>
      Anywhere in your application code you can import the <code>useTheme</code>{' '}
      function from <code>@abw/react-night-and-day</code>.  When called it
      returns an object that contains various data items relating the current
      theme and a number of functions to set the theme.
    </p>

    <Example
      Element={UseTheme} code={UseThemeSrc}
      caption="useTheme()" expand
    />
  </div>

export default UseThemePage