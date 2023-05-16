import React from 'react'
import { Nightfall, Sunrise, useTheme } from '../../lib/index.jsx'

{/* START */}
// PRETEND: import { Sunrise, Nightfall, useTheme } from '@abw/react-night-and-day'

const Demo = () => {
  const {
    theme,        // 'light' or 'dark'
    setDark,      // set theme to 'dark'
    setLight,     // set theme to 'light'
    toggleTheme,  // toggle theme between 'light' and 'dark'
    variant,      // custom variant on theme
    setVariant    // set the custom variant
  } = useTheme()

  return (
    <>
      <p>
        The theme is {theme}.
      </p>
      <div className="buttons">
        <button onClick={setLight}>Set Light</button>
        <button onClick={setDark}>Set Dark</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={{ marginLeft: '2rem', fontSize: '1.2em' }}>
          <Sunrise caption="Light"/>
          <Nightfall caption="Dark"/>
        </div>
      </div>
      <p>
        The variant is {variant || 'not defined'}.<br/>
      </p>
      <div className="buttons">
        <button onClick={() => setVariant('brown')} className="brown">Brown Variant</button>
        <button onClick={() => setVariant('red')} className="red">Red Variant</button>
        <button onClick={() => setVariant('blue')} className="blue">Blue Variant</button>
        <button onClick={() => setVariant('green')} className="green">Green Variant</button>
        <button onClick={() => setVariant('indigo')} className="indigo">Indigo Variant</button>
        <button onClick={() => setVariant('violet')} className="violet">Violet Variant</button>
      </div>
    </>
  )
}
{/* END */}

export default Demo