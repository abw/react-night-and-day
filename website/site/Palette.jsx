import React from 'react'
import { useTheme } from '../../lib/NightAndDay.jsx'

const Palette = () =>
  <div className="palette">
    <Color color="brown"/>
    <Color color="red"/>
    <Color color="green"/>
    <Color color="blue"/>
    <Color color="indigo"/>
    <Color color="violet"/>
  </div>

const Color = ({color}) => {
  const { variant, setVariant } = useTheme()
  return (
    <div
      onClick={() => setVariant(color)}
      className={`${color} ${variant === color ? 'selected' : ''}`}
    />
  )
}

export default Palette