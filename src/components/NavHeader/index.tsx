import React, { useEffect } from 'react'
import classNames from 'classnames'
import style from './style.module.scss'
import NavIcon from 'components/NavIcon'
import capitalize from 'utils/capitalize'

interface NavHeaderProps {
  isTransparent?: boolean
  isFixed?: boolean
  className?: string
  openFrom?: 'top' | 'left'
  navOpened: boolean
  logoComponent?: React.ElementType
  extraContentComponent: React.ElementType
  onNavClick: () => void
}

const NavHeader: React.FC<NavHeaderProps> = ({
  children,
  isTransparent = false,
  isFixed = false,
  className,
  openFrom = 'left',
  navOpened,
  logoComponent: LogoComponent,
  extraContentComponent: ExtraContent,
  onNavClick
}) => {
  const containerClassnames = classNames(
    className,
    style.container,
    style[`openFrom${capitalize(openFrom)}`],
    {
      [style.opened]: navOpened,
      [style.fixed]: isFixed,
      [style.transparent]: isTransparent
    }
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

    return (): void => {
      document.body.classList.remove(style.scrollLocked)
    }
  }, [navOpened])

  return (
    <div className={containerClassnames}>
      <div className={style.header}>
        <div className={style.navContainer}>
          <div className={style.headerActions}>
            <NavIcon
              isCloseIcon={navOpened}
              className={style.navIcon}
              onClick={onNavClick}
            />

            {LogoComponent && (
              <div className={style.headerLogo}>
                <LogoComponent />
              </div>
            )}
          </div>

          <nav className={style.nav}>
            <ul className={style.navList}>{children}</ul>
          </nav>

          {ExtraContent && <ExtraContent />}
        </div>
      </div>
    </div>
  )
}

export default NavHeader
