import { useTheme } from '../../lib/index.jsx'
{/* START */}
import React from 'react'
// PRETEND: import { useTheme } from '@abw/react-night-and-day'

const Variants = () => {
  const {
    variant,      // anything you like
    setVariant,   // set the variant
  } = useTheme()

  return (
    <>
      <p>
        The variant is {variant || 'not defined'}.<br/>
      </p>
      <div>
        <button onClick={() => setVariant('brown')} className="brown">
          Brown Variant
        </button>
        <button onClick={() => setVariant('red')} className="red">
          Red Variant
        </button>
        <button onClick={() => setVariant('blue')} className="blue">
          Blue Variant
        </button>
        <button onClick={() => setVariant('indigo')} className="indigo">
          Indigo Variant
        </button>
        <button onClick={() => setVariant('violet')} className="violet">
          Violet Variant
        </button>
      </div>
    </>
  )
}

export default Variants