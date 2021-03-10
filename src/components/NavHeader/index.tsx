import React, { useEffect } from 'react'
import classNames from 'classnames'
import style from './style.module.scss'
import NavIcon from 'components/NavIcon'
import capitalize from 'utils/capitalize'

interface NavHeaderProps {
  transparent?: boolean
  isFixed?: boolean
  className?: string
  openFrom?: 'top' | 'left'
  logoPath: string
  navOpened: boolean
  onNavClick: () => void
}

const NavHeader: React.FC<NavHeaderProps> = ({
  children,
  transparent = false,
  isFixed = false,
  className,
  openFrom = 'left',
  logoPath,
  navOpened,
  onNavClick
}) => {
  const containerClassnames = classNames(
    className,
    style.container,
    style[`openFrom${capitalize(openFrom)}`],
    {
      [style.opened]: navOpened,
      [style.isFixed]: isFixed,
      [style.transparent]: transparent,
    },
  )

  useEffect(() => {
    if (!window) {
      return
    }

    if (navOpened) {
      document.body.classList.add(style.scrollLocked)
    } else {
      document.body.classList.remove(style.scrollLocked)
    }

    return () => {
      document.body.classList.remove(style.scrollLocked)
    }
  }, [navOpened])

  return (
    <div className={containerClassnames}>
      <div className={style.header}>
        <div className={style.navContainer}>
          <div className={style.headerActions}>
            <NavIcon isCloseIcon={navOpened} className={style.navIcon} onClick={onNavClick} />

            <div className={style.headerLogo}>
              <figure>
                <img src={logoPath} />
              </figure>
            </div>
          </div>

          <nav className={style.nav}>
            <ul className={style.navList}>{children}</ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavHeader
