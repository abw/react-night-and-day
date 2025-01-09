import React from 'react'
import Sunrise from './Sunrise'
import Nightfall from './Nightfall'
import { useTheme } from '../Context'

export const Toggle = ({
  sunrise = { },
  nightfall = { }
}) => {
  const { isLight, setLight, setDark } = useTheme()
  // NOTE: we invert the onClick actions here - if it's light then we show
  // the Sun icon, but clicking on it sets it to be dark, and vice-versa
  return isLight
    ? <Sunrise   onClick={setDark}  {...sunrise}/>
    : <Nightfall onClick={setLight} {...nightfall}/>
}

export default Toggle
