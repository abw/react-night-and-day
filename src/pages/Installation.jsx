import React       from 'react'
import CodeBlock   from '../site/CodeBlock.jsx'

const Installation = () =>
  <div>
    <h1>Installation</h1>
    <p>
      Add the <code className="code">@abw/react-night-and-day</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash" expand>
      {`## using npm
$ npm add @abw/react-night-and-day

## using yarn
$ yarn add @abw/react-night-and-day

## using pnpm
$ pnpm add @abw/react-night-and-day`}
    </CodeBlock>

  </div>

export default Installation