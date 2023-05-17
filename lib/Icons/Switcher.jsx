import React from 'react'
import { CAPTION, INLINE_BLOCK, SWITCHER } from '../Constants.jsx'

export const Switcher = ({
  Icon,
  caption,
  onClick,
  iconClass,
  iconStyle,
  captionStyle,
  className=SWITCHER,
  captionClass=CAPTION,
  style={ display: INLINE_BLOCK }
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
