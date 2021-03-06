import React from 'react'
import classNames from 'classnames'
import Icon, { IconSlugsType } from '../Icon'
import Typography from '../Typography'
import style from './style.module.scss'

interface NavItemProps {
  className?: string
  icon?: IconSlugsType
  label: string
  url: string
  onClick?: () => void
  target?: '_blank' | '_self' | '_parent' | '_top'
  isActive?: boolean
  element?: React.ElementType
}

const NavItem: React.FC<NavItemProps> = ({
  className,
  icon,
  label,
  url,
  onClick,
  children,
  target = '_self',
  isActive = false,
  element: Element,
  ...rest
}) => {
  const AnchorElement = Element || (url ? 'a' : 'span')
  const itemClassNames = classNames(style.navItem, className)

  if (children) {
    return <li className={itemClassNames}>{children}</li>
  }

  return (
    <li className={itemClassNames}>
      <AnchorElement
        onClick={onClick}
        target={target}
        className={style.navItemAnchor}
        href={url}
        {...rest}
      >
        {icon && <Icon className={style.navItemIcon} icon={icon} />}
        <Typography
          element="span"
          variant="buttonMD"
          className={classNames(style.navItemLabel, {
            [style.navItemActive]: isActive
          })}
        >
          {label}
        </Typography>
      </AnchorElement>
    </li>
  )
}

export default NavItem
