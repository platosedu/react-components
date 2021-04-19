/* eslint-disable react/no-danger */
import React from 'react'
import { IconType } from 'react-icons'
import classNames from 'classnames'
import icons from './icons/icons.json'
import style from './style.module.scss'

// The IconSlugsType is one of keys of icons collection
export type IconSlugsType = keyof typeof icons

interface IconProps {
  /** event called when user clicks on Icon element */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /** wrapper's custom className */
  className?: string

  /** icon size */
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

  /** icon slug. ex: `color_chat` */
  icon?: IconSlugsType

  /** emoji text. ex: `☕` */
  emoji?: string

  /** icon path. ex: `https://itcom.gr/help.png` */
  iconPath?: string

  /** icon component from react-icons library. ex: `FaFacebook` */
  iconComponent?: IconType
}

const Icon: React.FC<IconProps> = ({
  onClick,
  className,
  size = 'md',
  icon,
  emoji,
  iconPath,
  iconComponent: IconComponent
}) => {
  const iconElementContent: string = icon ? icons[icon] : ''

  const containerClassnames = classNames(
    className,
    style.container,
    style[size],
    {
      [style.path]: Boolean(iconPath),
      [style.externalComponent]: Boolean(IconComponent)
    }
  )

  if (IconComponent) {
    return (
      <span onClick={onClick} className={containerClassnames}>
        <IconComponent className={style.externalComponentIcon} />
      </span>
    )
  }

  if (iconPath) {
    return (
      <span onClick={onClick} className={containerClassnames}>
        <span
          className={style.pathIcon}
          style={{ backgroundImage: `url(${iconPath})` }}
        />
      </span>
    )
  }

  if (iconElementContent) {
    return (
      <span
        onClick={onClick}
        className={containerClassnames}
        dangerouslySetInnerHTML={{ __html: iconElementContent }}
      />
    )
  }

  if (emoji) {
    return (
      <span onClick={onClick} className={containerClassnames}>
        {emoji}
      </span>
    )
  }

  return null
}

export default Icon
