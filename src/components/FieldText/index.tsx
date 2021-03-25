import React, { ReactElement, useState } from 'react'
import classNames from 'classnames'
import Icon, { IconSlugsType } from '../Icon'
import { IconType } from 'react-icons'
import InputMask, { Props as InputProps } from 'react-input-mask'
import style from './style.module.scss'

export interface FieldTextProps {
  className?: string
  tabIndex?: number
  value?: string | number
  label?: string
  mask?: string | (string | RegExp)[]
  placeholder?: string
  name?: string
  inputId?: string
  hint?: string | null
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  bordered?: boolean
  error?: string | null
  type?:
    | 'text'
    | 'textarea'
    | 'password'
    | 'email'
    | 'search'
    | 'number'
    | 'color'
  autocomplete?: 'on' | 'off'
  prefixIcon?: IconSlugsType
  prefixIconPath?: string
  prefixIconComponent?: IconType
  suffixIcon?: IconSlugsType
  suffixIconPath?: string
  suffixIconComponent?: IconType
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  onFocus?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void
  onBlur?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void
  onPrefixIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onSuffixIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const FieldText: React.FC<FieldTextProps> = ({
  name,
  inputId,
  className,
  tabIndex,
  type = 'text',
  autocomplete = 'on',
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
  mask,
  value,
  ...props
}) => {
  const isTextarea = type === 'textarea'
  const [focused, setFocused] = useState(false)
  const inputIdFormatted = inputId || `field-${name}`
  const InputElement = isTextarea ? 'textarea' : 'input'

  const handleFocus = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ): void => {
    if (onFocus) {
      onFocus(e)
    }

    setFocused(true)
  }

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ): void => {
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
    [style.error]: Boolean(error),
    [style.focused]: Boolean(focused),
    [style.bordered]: Boolean(bordered),
    [style.filled]: Boolean(value),
    [style.hasLabel]: Boolean(label),
    [style.hasPlaceholder]: Boolean(placeholder),
    [style.disabled]: Boolean(disabled),
    [style.hasPrefixIcon]: hasPrefixIcon,
    [style.hasSuffixIcon]: hasSuffixIcon,
    [style.isTextarea]: isTextarea
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

        {mask ? (
          <InputMask
            mask={mask}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readOnly}
            // maskChar={null}
          >
            {(inputProps: InputProps): ReactElement => (
              <input
                {...inputProps}
                className={style.input}
                id={inputIdFormatted}
                tabIndex={tabIndex}
                type={type}
                autoComplete={autocomplete}
                name={name}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                {...props}
              />
            )}
          </InputMask>
        ) : (
          <InputElement
            className={style.input}
            id={inputIdFormatted}
            tabIndex={tabIndex}
            type={type}
            autoComplete={autocomplete}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            readOnly={readOnly}
            {...props}
          />
        )}

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

export default FieldText
