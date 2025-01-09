import { useTheme } from '../../lib/index'
{/* START */}
import React from 'react'
// PRETEND: import { useTheme } from '@abw/react-night-and-day'

const Variants = () => {
  const { variant } = useTheme()
  return (
    <>
      <p>
        The variant is {variant || 'not defined'}.
      </p>
      <div className="buttons">
        <Button color="brown"/>
        <Button color="red"/>
        <Button color="green"/>
        <Button color="blue"/>
        <Button color="indigo"/>
        <Button color="violet"/>
      </div>
    </>
  )
}

const Button = ({color}) => {
  const { setVariant } = useTheme()
  return (
    <button
      onClick={() => setVariant(color)}
      className={color}
    >
      {color}
    </button>
  )
}

export default Variants