import React from 'react'
import { CURRENT_COLOR, ICON } from '../Constants.jsx'

export const Icon = ({
  path,
  onClick,
  width=512,
  height=512,
  className=ICON,
  fill=CURRENT_COLOR,
  style,
}) =>
  <svg
    aria-hidden="true" focusable="false"
    className={className} style={style}
    role="img" xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${width} ${height}`}
    onClick={onClick}
  >
    <path d={path} fill={fill}/>
  </svg>

export default Icon