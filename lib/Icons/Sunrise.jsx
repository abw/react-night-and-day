import React from 'react'
import Sun from './Sun.jsx'
import Switcher from './Switcher.jsx'
import { useTheme } from '../NightAndDay.jsx'

export const Sunrise = (props) => {
  const { setLight } = useTheme()
  return (
    <Switcher
      Icon={Sun}
      onClick={setLight}
      {...props}
    />
  )
}

export default Sunrise
