import { Sunrise, Nightfall } from '../../lib/index.jsx'
{/* START */}
import React from 'react'
// PRETEND: import { Sunrise, Nightfall } from '@abw/react-night-and-day'

const IconSwitchExample = () =>
  <div style={{ fontSize: '3rem'}}>
    <Sunrise
      caption="Light"
      captionStyle={{ fontSize: '0.5em' }}
    />
    <Nightfall
      caption="Dark"
      captionStyle={{ fontSize: '0.5em' }}
    />
  </div>

export default IconSwitchExample