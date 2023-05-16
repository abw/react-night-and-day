import { Sunrise, Nightfall } from '../../lib/index.jsx'
{/* START */}
import React from 'react'
// PRETEND: import { Sunrise, Nightfall } from '@abw/react-night-and-day'

const IconCaptionsExample = () =>
  <div style={{ fontSize: '3rem'}}>
    <Sunrise caption="Light"/>
    <Nightfall caption="Dark"/>
  </div>

export default IconCaptionsExample