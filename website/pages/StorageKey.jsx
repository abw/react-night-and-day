import React       from 'react'
import CodeBlock   from '../site/CodeBlock.jsx'
import StorageKeySrc from '../examples/StorageKey.jsx?raw'

const StorageKey = () =>
  <div>
    <h1><code>storageKey</code></h1>
    <p>
      You can pass the <code>storageKey</code> option to the{' '}
      <code>ThemeProvider</code> to have the selected theme stored in local
      storage using that key.  The user&apos;s chosen theme will then be
      stored locally on their browser and automatically reloaded when they
      visit your site again.   If you are using variants then the current
      variant will also be be stored in local storage.
    </p>
    <p>
      The <code>storageKey</code> can be anything you like, but it probably
      makes sense to call it something related to the theme for the sake of
      transparency.
    </p>
    <CodeBlock
      code={StorageKeySrc}
      caption="storageKey"
      expand
    />
  </div>

export default StorageKey