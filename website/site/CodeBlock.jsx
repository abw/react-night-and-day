import React, { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from '../../lib/NightAndDay.jsx'
import { sleep } from '@abw/badger-utils'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('bash', bash)

export const CodeBlock = ({
  code, children, language='jsx', caption,
  expand=false, fixed=expand
}) => {
  const { isDark } = useTheme()
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(expand)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }

  return (
    <div className={`codeblock ${expanded ? 'expanded' : ''} ${fixed ? 'fixed' : 'expandable'}`}>
      {Boolean(caption) && <h4 className="caption">{caption}</h4>}
      <div className="controls">
        <div className="expand" onClick={() => setExpanded(! expanded)}>
          { expanded ? 'Compress' : 'Expand' }
        </div>
        { Boolean(code) &&
        <div
          className={`clipboard ${copied ? 'copied' : ''}`}
          onClick={copy}
        >
          { copied ? 'Copied' : 'Copy' }
        </div>
        }
      </div>
      <SyntaxHighlighter
        language={language} style={darcula} showLineNumbers={true}
        // wrapLongLines
        customStyle={{
          paddingBottom: fixed ? '1rem' : '2rem',
          backgroundColor: isDark ? '#180B00' : '#281300',
          maxWidth: '100%'

        }}
      >
        {code||children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
