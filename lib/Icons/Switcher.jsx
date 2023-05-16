import React from 'react'
import { CAPTION, SWITCHER } from '../Constants.jsx'

export const Switcher = ({
  Icon,
  caption,
  onClick,
  style={ display: 'inline-block' },
  iconClass,
  iconStyle,
  captionStyle,
  className = SWITCHER,
  captionClass = CAPTION,
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
