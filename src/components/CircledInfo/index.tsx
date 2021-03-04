import React from 'react'
import classNames from 'classnames'
import Icon, { IconSlugsType } from '../Icon'
import { IconType } from 'react-icons'
import style from './style.module.scss'

interface CircledInfoProps {
  /** Main text */
  text?: string
  /** SecondaryText */
  subText?: string
  /** Icon */
  icon?: IconSlugsType
  /** icon component from react-icons library. ex: `FaFacebook` */
  iconComponent?: IconType
  /** Size  */
  size: 'xxl' | 'xl' | 'lg' | 'md'
  /** Text Size  */
  textSize?: 'xxl' | 'xl' | 'lg' | 'md'
  /** Icon Size  */
  /** Position */
  position: 'right0' | 'left0' | 'left1' | 'left2'
  className?: string
}

const CircledInfo: React.FC<CircledInfoProps> = ({
  text,
  subText = '',
  icon,
  iconComponent,
  textSize = 'lg',
  size = 'lg',
  position = 'left0',
  className
}) => (
  <div
    className={classNames(
      className,
      style.circledInfo,
      style[size],
      style[position]
    )}
  >
    <span className={style.circle} />
    {(icon || iconComponent) && (
      <Icon className={style.icon} icon={icon} iconComponent={iconComponent} />
    )}

    {text && (
      <p className={classNames(style.text, style[textSize + 'Text'])}>
        {text}

        {subText && <span>{subText}</span>}
      </p>
    )}
  </div>
)

export default CircledInfo
