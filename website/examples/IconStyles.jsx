import { Sun, Moon } from '../../lib/index.jsx'
{/* START */}
import React from 'react'
// PRETEND: import { Sun, Moon } from '@abw/react-night-and-day'

const IconStylesExample = () =>
  <div style={{ fontSize: '3rem'}}>
    <Sun
      fill="orangered"
      style={{ marginLeft: '1rem' }}
    />
    <Moon
      fill="#8080FF"
      style={{ marginLeft: '2rem' }}
    />
  </div>

export default IconStylesExample