import React, { ReactElement } from 'react'
import classNames from 'classnames'
import style from './style.module.scss'
import Icon from '../Icon'
import Select, { components, IndicatorProps } from 'react-select'
import { Option } from 'react-select/src/filters'

export interface DropdownOptionsParam {
  value: string
  label: string
}

interface DropdownValueType {
  value: string | number
  label: string | number
}
export interface DropdownProps {
  options?: DropdownOptionsParam[]
  placeholder?: string
  label?: string
  className?: string
  touched?: boolean
  error?: string | null
  hint?: string | null
  name?: string
  value?: DropdownValueType | null
  isSearchable?: boolean
  isClearable?: boolean
  disabled?: boolean
  onChange?: (option: Option) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  label,
  placeholder = 'Selecione',
  className,
  error,
  value,
  name,
  isClearable = true,
  isSearchable = true,
  disabled,
  onChange
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DropdownIndicator = (props: IndicatorProps<any, any>): ReactElement => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon icon="mono_arrow_dropdown" size="xxs" className={style.icon} />
      </components.DropdownIndicator>
    )
  }

  const wrapperClassNames = classNames(style.wrapper, className, {
    [style.hasLabel]: Boolean(value) && Boolean(label),
    [style.error]: Boolean(error),
    [style.disabled]: Boolean(disabled)
  })

  return (
    <div className={wrapperClassNames}>
      {value && label && <span className={style.label}>{label}</span>}

      <Select
        isDisabled={disabled}
        instanceId="front-catalog"
        name={name}
        classNamePrefix={'dropdown'}
        className={style.select}
        onChange={(option): void => {
          if (onChange) {
            onChange(option)
          }
        }}
        isSearchable={isSearchable}
        value={value}
        placeholder={label || placeholder}
        isClearable={isClearable}
        components={{ DropdownIndicator }}
        options={options}
        noOptionsMessage={(): string => 'Sem opções'}
      />
      <p className={style.supportText}>{error ? error : ''}</p>
    </div>
  )
}

export default Dropdown
