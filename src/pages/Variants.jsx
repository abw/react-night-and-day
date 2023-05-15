import React       from 'react'
import VariantsSrc from '../examples/Variants.jsx?raw'
import DefaultVariantSrc from '../examples/DefaultVariant.jsx?raw'
import CodeBlock from '../site/CodeBlock.jsx'
import Link from '../site/Link.jsx'

const Variants = () =>
  <div>
    <h1><code>variant</code> and <code>setVariant()</code></h1>
    <p>
      As well as setting the theme to be <code>light</code> or <code>dark</code>{' '}
      you can also define a theme <code>variant</code>.  For example, you
      might have different color schemes (as shown in the demo on the{' '}
      <Link to="/" text="home page"/>), or offer a high-contrast, large text
      variant of your site for people with low vision.
    </p>
    <p>
      The <code>useTheme()</code> function returns the current{' '}
      <code>variant</code> and the <code>setVariant()</code> function which
      you can call to set it.  It&apos;s entirely up to you what you call
      your variants, and how you adapt your UI to implement the different
      variants.
    </p>
    <CodeBlock code={VariantsSrc} caption="variants"/>
    <p>
      You can pass the <code>defaultVariant</code> property to the{' '}
      <code>ThemeProvider</code> to set the default variant.  Otherwise it
      will be undefined until you first call <code>setVariant()</code>.
    </p>
    <CodeBlock code={DefaultVariantSrc} caption="defaultVariant"/>
  </div>

export default Variants