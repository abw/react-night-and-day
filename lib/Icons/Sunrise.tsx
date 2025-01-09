import Sun from './Sun'
import Switcher, { SwitcherProps } from './Switcher'
import { useTheme } from '../index.jsx'

export const Sunrise = (
  props: Omit<SwitcherProps, 'Icon'>
) => {
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
