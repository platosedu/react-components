import React from 'react'
import classNames from 'classnames'
import { IconType } from 'react-icons'
import Icon, { IconSlugsType } from '../Icon'
import LoadingIcon from '../LoadingIcon'
import style from './style.module.scss'

type ButtonDisplay = 'lg' | 'md' | 'sm' | 'circular' | 'circularMicro'
type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'neutral-dark'
  | 'neutral-light'
  | 'error'
  | 'alert'
  | 'info'
  | 'success'
type ButtonFillType = 'fill' | 'outline'

interface ButtonLabelProps {
  display: ButtonDisplay
  label: string
}

const ButtonLabel: React.FC<ButtonLabelProps> = ({ display, label }) => {
  if (display.includes('circular')) {
    return <span className={style.circularLabel}>{label}</span>
  }

  return <>{label}</>
}

interface ButtonProps {
  /** Determine button size and format */
  display?: ButtonDisplay

  /** Label to be rendered */
  label?: string

  /** Custom CSS classnames to append to container element */
  className?: string

  /** Custom CSS classnames to append to icon element */
  iconClassName?: string

  /** Button type */
  type?: 'button' | 'submit' | 'reset'

  /** Determine button color */
  variant?: ButtonVariant

  /** Determine button fill type */
  fillType?: ButtonFillType

  /** Event to be called when user click on button */
  onClick?: () => void

  /** Disable button */
  disabled?: boolean

  /** Determine if border will be rendered */
  bordered?: boolean

  /** Determine loading status to button. Renders a loading icon if true */
  loading?: boolean

  /** Prefix icon slug (as in `Icon` component) */
  prefixIcon?: IconSlugsType

  /** Prefix icon path (as in `Icon` component) */
  prefixIconPath?: string

  /** Prefix icon element (as in `Icon` component) */
  prefixIconComponent?: IconType

  /** Element to render the component */
  element?: React.ElementType

  /** href when renders an anchor */
  href?: string
}

const Button: React.FC<ButtonProps> = React.forwardRef(function Button(
  {
    className,
    iconClassName,
    type,
    label,
    variant = 'primary',
    fillType = 'fill',
    display = 'md',
    onClick,
    disabled = false,
    bordered = false,
    loading = false,
    prefixIcon,
    prefixIconPath,
    prefixIconComponent,
    element = 'button',
    ...rest
  },
  ref
) {
  const ButtonElement: React.ElementType = element
  const hasIcon = Boolean(prefixIcon || prefixIconComponent || prefixIconPath)

  const buttonClassNames = classNames(
    style.button,
    style[variant],
    style[fillType],
    style[display],
    {
      [style.bordered]: bordered,
      [style.disabled]: disabled,
      [style.hasIcon]: hasIcon
    }
  )

  const isCircular = display.indexOf('circular') !== -1
  const iconSize =
    display.toLocaleLowerCase().match('micro') || display.match('sm')
      ? 'sm'
      : 'md'

  if (isCircular) {
    const circularClassNames = classNames(className, style.circularContainer)

    return (
      <ButtonElement
        ref={ref}
        type={type}
        onClick={onClick}
        className={circularClassNames}
        disabled={disabled}
        {...rest}
      >
        <span className={buttonClassNames}>
          {loading ? (
            <LoadingIcon
              className={classNames(
                style.icon,
                style.loadingIcon,
                style.prefixIcon
              )}
              size={iconSize}
            />
          ) : null}

          {!loading && (prefixIcon || prefixIconPath || prefixIconComponent) ? (
            <Icon
              size={iconSize}
              icon={prefixIcon}
              iconPath={prefixIconPath}
              iconComponent={prefixIconComponent}
              className={classNames(
                style.icon,
                style.prefixIcon,
                iconClassName
              )}
            />
          ) : null}
        </span>

        {label ? <ButtonLabel display={display} label={label} /> : null}
      </ButtonElement>
    )
  }

  return (
    <ButtonElement
      type={type}
      onClick={onClick}
      className={classNames(buttonClassNames, className)}
      disabled={disabled}
      {...rest}
    >
      {loading ? (
        <LoadingIcon
          className={classNames(
            style.icon,
            style.loadingIcon,
            style.prefixIcon
          )}
          size={iconSize}
        />
      ) : null}

      {!loading && (prefixIcon || prefixIconPath || prefixIconComponent) ? (
        <Icon
          size={iconSize}
          icon={prefixIcon}
          iconComponent={prefixIconComponent}
          iconPath={prefixIconPath}
          className={classNames(style.icon, style.prefixIcon, iconClassName)}
        />
      ) : null}

      {label ? <ButtonLabel display={display} label={label} /> : null}
    </ButtonElement>
  )
})

export default Button
