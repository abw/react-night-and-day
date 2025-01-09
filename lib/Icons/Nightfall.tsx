import React from 'react'
import Moon from './Moon'
import Switcher, { SwitcherProps } from './Switcher'
import { useTheme } from '../index.jsx'

export const Nightfall = (
  props: Omit<SwitcherProps, 'Icon'>
) => {
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
