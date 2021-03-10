import React, { useEffect } from 'react'
import classNames from 'classnames'
import Button from 'components/Button'
import { MdClose } from 'react-icons/md'
import style from './style.module.scss'
import Typography from 'components/Typography'
import slugify from 'slugify'

interface ModalProps {
  opened?: boolean
  blocked?: boolean
  onClose?: () => void
  className?: string
  wrapperClassName?: string
  contentClassName?: string
  closeButtonClassName?: string
  title?: string
}

const Modal: React.FC<ModalProps> = ({
  opened,
  blocked,
  onClose,
  children,
  className,
  wrapperClassName,
  contentClassName,
  closeButtonClassName,
  title
}) => {
  const handleCloseOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) {
      return
    }

    if (typeof event.target.className !== 'string') {
      return
    }

    if (
      event.target.className &&
      event.target.className.includes(style.container) &&
      !blocked
    ) {
      if (onClose) {
        onClose()
      }
    }
  }

  const containerClassNames = classNames(style.container, className, {
    [style.opened]: Boolean(opened)
  })

  useEffect(() => {
    if (!window) {
      return
    }

    const handlePopState = () => {
      if (onClose) {
        onClose()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !blocked) {
        if (onClose) {
          onClose()
        }
      }
    }

    const addEvents = () => {
      const pathname = `#${slugify(title || 'modal')}`
      window.history.pushState(
        {},
        pathname,
        window.location.pathname + pathname
      )
      window.addEventListener('popstate', handlePopState)
      window.addEventListener('keydown', handleKeyDown)
      document.body.classList.add(style.scrollLocked)
    }

    const removeEvents = () => {
      window.history.pushState({}, '', window.location.pathname)
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove(style.scrollLocked)
    }

    if (opened) {
      addEvents()
    } else {
      removeEvents()
    }

    return () => {
      removeEvents()
    }
  }, [opened, title, blocked, onClose])

  return (
    <div
      className={containerClassNames}
      onClick={handleCloseOverlay}
      role="dialog"
    >
      <div className={classNames(style.wrapper, wrapperClassName)}>
        <Button
          className={classNames(style.closeButton, closeButtonClassName)}
          prefixIconComponent={MdClose}
          type="button"
          display="circularMicro"
          variant={title ? 'primary' : 'secondary'}
          onClick={onClose}
        />

        {title && (
          <header className={style.header}>
            <Typography
              className={style.headerTitle}
              variant="displaySM"
              element="h4"
            >
              {title}
            </Typography>
          </header>
        )}

        <div className={classNames(style.content, contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
