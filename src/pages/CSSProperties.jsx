import React       from 'react'
import CodeBlock   from '../site/CodeBlock.jsx'
import PageLayout  from '../examples/PageLayout.jsx?raw'
import CSSProps    from '../examples/CSSProps.css?raw'

const CSSProperties = () =>
  <div>
    <h1>CSS Custom Properties</h1>
    <p>
      How you change the styling of your site based on the theme depends
      entirely on how you&apos;re implementing the styling for your site.
      My preferred way is to add a CSS class to a container element for the
      site that reflects the current theme. For example, if your site has a
      main page layout component you can set it up something like this.
    </p>
    <CodeBlock
      code={PageLayout}
      caption="Page Layout"
      expand
    />

    <p>
      Then your CSS stylesheet might look something like this.
      Define the default properties for the light theme and provide
      alternatives to them for when the dark theme is selected.
    </p>
    <CodeBlock
      code={CSSProps}
      caption="CSS Properties"
      language="css"
      expand
    />
  </div>

export default CSSProperties