import React, { ReactElement, useState } from 'react'
import classNames from 'classnames'
import Icon, { IconSlugsType } from '../Icon'
import { IconType } from 'react-icons'
import InputMask, { Props as InputProps } from 'react-input-mask'
import style from './style.module.scss'

export interface FieldTextAreaProps {
  className?: string
  tabIndex?: number
  value?: string | number
  defaultValue?: string | number
  label?: string
  placeholder?: string
  name?: string
  inputId?: string
  hint?: string | null
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  bordered?: boolean
  error?: string | null
  prefixIcon?: IconSlugsType
  prefixIconPath?: string
  prefixIconComponent?: IconType
  suffixIcon?: IconSlugsType
  suffixIconPath?: string
  suffixIconComponent?: IconType
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onPrefixIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onSuffixIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const FieldTextArea = React.forwardRef<HTMLTextAreaElement, FieldTextAreaProps>(
  (
    {
      name,
      inputId,
      className,
      tabIndex,
      label = '',
      placeholder = '',
      hint,
      disabled = false,
      readOnly = false,
      required = false,
      bordered = false,
      error,
      onChange,
      onFocus,
      onBlur,
      prefixIcon,
      prefixIconPath,
      prefixIconComponent,
      onPrefixIconClick,
      suffixIcon,
      suffixIconPath,
      suffixIconComponent,
      onSuffixIconClick,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false)
    const inputIdFormatted = inputId || `field-${name}`

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
      if (onFocus) {
        onFocus(e)
      }

      setFocused(true)
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
      if (onBlur) {
        onBlur(e)
      }

      setFocused(false)
    }

    const hasPrefixIcon = Boolean(
      prefixIcon || prefixIconPath || prefixIconComponent
    )
    const hasSuffixIcon = Boolean(
      suffixIcon || suffixIconPath || suffixIconComponent
    )

    const containerClassNames = classNames(style.container, className, {
      [style.isFocused]: Boolean(focused),
      [style.isBordered]: Boolean(bordered),
      [style.isDisabled]: Boolean(disabled),
      [style.hasError]: Boolean(error),
      [style.hasLabel]: Boolean(label),
      [style.hasPrefixIcon]: hasPrefixIcon,
      [style.hasSuffixIcon]: hasSuffixIcon
    })

    return (
      <div className={containerClassNames}>
        <label className={style.field} htmlFor={inputIdFormatted}>
          {hasPrefixIcon ? (
            <Icon
              size="md"
              icon={prefixIcon}
              iconPath={prefixIconPath}
              iconComponent={prefixIconComponent}
              className={classNames(style.prefixIcon, {
                [style.iconClickable]: Boolean(onPrefixIconClick)
              })}
              onClick={onPrefixIconClick}
            />
          ) : null}

          <textarea
            className={style.input}
            id={inputIdFormatted}
            tabIndex={tabIndex}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readOnly}
            ref={ref}
            {...props}
          />

          {label && (
            <span className={style.label}>
              {label}
              {required ? '*' : null}
            </span>
          )}

          {hasSuffixIcon ? (
            <Icon
              size="md"
              icon={suffixIcon}
              iconPath={suffixIconPath}
              iconComponent={suffixIconComponent}
              className={classNames(style.suffixIcon, {
                [style.iconClickable]: Boolean(onSuffixIconClick)
              })}
              onClick={onSuffixIconClick}
            />
          ) : null}
        </label>

        <p className={style.supportText}>{(error ? error : '') || hint}</p>
      </div>
    )
  }
)

export default FieldTextArea
