import React from 'react'
import { useTheme } from '@abw/react-night-and-day'

const Variants = () => {
  const {
    variant,      // anything you like
    setVariant,   // set the variant
  } = useTheme()

  return (
    <>
      <p>
        The variant is currently {variant}.
      </p>
      <button onClick={() => setVariant('red')}>Red</button>
      <button onClick={() => setVariant('green')}>Green</button>
      <button onClick={() => setVariant('blue')}>Blue</button>
    </>
  )
}

export default Variants