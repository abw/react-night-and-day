import { Toggle } from '../../lib/index'
{/* START */}
import React from 'react'
// PRETEND: import { Toggle } from '@abw/react-night-and-day'

const ToggleExample = () =>
  <div style={{ fontSize: '3rem'}}>
    <Toggle
      sunrise={{
        caption: 'Light',
        captionStyle: { fontSize: '0.4em' }
      }}
      nightfall={{
        caption: 'Dark',
        captionStyle: { fontSize: '0.4em' }
      }}
    />
  </div>

export default ToggleExample