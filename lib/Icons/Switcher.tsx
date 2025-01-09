import React from 'react'
import { IconComponent } from './Icon'

export type SwitcherProps = {
  Icon: IconComponent,
  iconClass?: string,
  iconStyle?: React.CSSProperties,
  caption?: string,
  captionClass?: string,
  captionStyle?: React.CSSProperties,
  className?: string,
  style?: React.CSSProperties,
  onClick?: () => void,
}

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
}: SwitcherProps) =>
  <div className={className} onClick={onClick} style={style}>
    <Icon style={iconStyle} className={iconClass}/>
    { Boolean(caption) &&
      <div className={captionClass} style={captionStyle}>
        {caption}
      </div>
    }
  </div>

export default Switcher
