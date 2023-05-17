import React from 'react'

export const Icon = ({
  path,
  onClick,
  width=512,
  height=512,
  style,
  className='night-and-day--icon',
  fill='currentColor'
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