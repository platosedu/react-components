import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'

export interface RadioButtonProps {
  id: string
  name: string
  value?: string
  label: string
  className?: string
  error?: string | null
  hint?: string
  size?: 'sm' | 'md' | 'lg'
  checked?: boolean
  readonly?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  id,
  name,
  value,
  label,
  error,
  hint,
  size = 'sm',
  checked,
  readonly,
  onChange
}) => {
  let sizeRadioButton = size
  let sizeText = ''

  if (size === 'sm') {
    sizeRadioButton = size
    sizeText = 'textXs'
  } else if (size === 'md') {
    sizeRadioButton = size
    sizeText = 'textSm'
  } else if (size === 'lg') {
    sizeRadioButton = size
    sizeText = 'textMd'
  }

  const containerClassNames = classNames(style.radio, className, {
    [style.error]: Boolean(error)
  })

  return (
    <>
      <div className={containerClassNames}>
        <input
          id={id}
          name={name}
          type="radio"
          onChange={onChange}
          checked={checked}
          disabled={readonly}
          value={value}
        />
        <label
          htmlFor={id}
          className={classNames(
            style.radioLabel,
            style[sizeRadioButton],
            style[sizeText]
          )}
        >
          {label}
        </label>
        <p className={style.supportText}>{(error ? error : '') || hint}</p>
      </div>
    </>
  )
}

export default RadioButton
