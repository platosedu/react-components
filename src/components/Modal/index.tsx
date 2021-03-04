import React, { useEffect, useCallback } from 'react'
import classNames from 'classnames'
import Button from '../Button'
import style from './style.module.scss'
import Typography from '../Typography'

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

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 27 && !blocked) {
        if (onClose) {
          onClose()
        }
      }
    },
    [onClose, blocked]
  )

  const containerClassNames = classNames(style.container, className, {
    [style.opened]: Boolean(opened)
  })

  useEffect(() => {
    if (!window) {
      return
    }

    if (opened) {
      document.body.classList.add(style.scrollLocked)
    } else {
      document.body.classList.remove(style.scrollLocked)
    }

    return () => {
      document.body.classList.remove(style.scrollLocked)
    }
  }, [opened])

  return (
    <div
      className={containerClassNames}
      onClick={handleCloseOverlay}
      onKeyDown={handleKeyDown}
      role="dialog"
    >
      <div className={classNames(style.wrapper, wrapperClassName)}>
        <Button
          className={classNames(style.closeButton, closeButtonClassName)}
          prefixIcon="mono_close"
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
