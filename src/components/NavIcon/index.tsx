import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

interface NavIconProps {
  className?: string
  isCloseIcon: boolean
  onClick: () => void
}

const NavIcon: React.FC<NavIconProps> = ({
  className,
  isCloseIcon,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={classNames(style.container, className, {
        [style.isCloseIcon]: Boolean(isCloseIcon)
      })}
    >
      <button className={style.icon} onClick={onClick} {...rest}>
        <span className={style.iconSpan} />
        <span className={style.iconSpan} />
        <span className={style.iconSpan} />
        <span className={style.iconSpan} />
      </button>
    </div>
  )
}

export default NavIcon
