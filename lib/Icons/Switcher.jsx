import React from 'react'

export const Switcher = ({
  Icon,
  caption,
  onClick,
  iconClass,
  iconStyle,
  captionStyle,
  className='night-and-day--switcher',
  captionClass='night-and-day--caption',
  style={ display: 'inline-block' }
}) =>
  <div className={className} onClick={onClick} style={style}>
    <Icon style={iconStyle} className={iconClass}/>
    { Boolean(caption) &&
      <div className={captionClass} style={captionStyle}>
        {caption}
      </div>
    }
  </div>

export default Switcher
