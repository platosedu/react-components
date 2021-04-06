import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'

export interface CheckBoxProps {
  value?: string | number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
  id?: string
  name?: string
  error?: string | null
  hint?: string | null
  size?: 'sm' | 'md' | 'lg'
  checked?: boolean
  disabled?: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({
  className,
  id,
  value,
  name,
  children,
  error,
  hint,
  size = 'sm',
  checked,
  disabled,
  onChange
}) => {
  let sizeCheckBox = ''
  let sizeText = ''

  if (size === 'sm') {
    sizeCheckBox = size
    sizeText = 'textXxs'
  } else if (size === 'md') {
    sizeCheckBox = size
    sizeText = 'textSm'
  } else if (size === 'lg') {
    sizeCheckBox = size
    sizeText = 'textLg'
  }

  const containerClassNames = classNames(style.checkbox, className, {
    [style.error]: Boolean(error)
  })

  return (
    <>
      <div className={containerClassNames}>
        <label htmlFor={id} className={classNames(style[sizeText])}>
          <input
            className={classNames(style[sizeCheckBox])}
            type="checkbox"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
          />

          <span className={style.label}>{children}</span>
        </label>

        <p className={style.supportText}>{(error ? error : '') || hint}</p>
      </div>
    </>
  )
}

export default CheckBox
