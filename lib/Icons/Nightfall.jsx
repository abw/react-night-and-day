import React from 'react'
import Moon from './Moon.jsx'
import Switcher from './Switcher.jsx'
import { useTheme } from '../index.jsx'

export const Nightfall = (props) => {
  const { setDark } = useTheme()
  return (
    <Switcher
      Icon={Moon}
      onClick={setDark}
      {...props}
    />
  )
}

export default Nightfall
