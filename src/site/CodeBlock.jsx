import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from '../../lib/NightAndDay.jsx'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('bash', bash)

export const CodeBlock = ({code, children, language='jsx'}) => {
  const { isDark } = useTheme()
  return (
    <div className="codeblock">
      <SyntaxHighlighter
        language={language} style={darcula} showLineNumbers={true}
        customStyle={{
          backgroundColor: isDark ? '#180B00' : '#281300'
        }}
      >
        {code||children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
