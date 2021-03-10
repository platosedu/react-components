import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

type TypographyVariant =
  | 'displayXXL'
  | 'displayXL'
  | 'displayLG'
  | 'displayMD'
  | 'displaySM'
  | 'displayXS'
  | 'subtitle'
  | 'bodyLG'
  | 'bodyMD'
  | 'bodySM'
  | 'bodyXS'
  | 'bodyXXS'
  | 'buttonMD'
  | 'buttonSM'
  | 'buttonXS'
  | 'buttonXXS'
interface TypographyProps {
  className?: string
  innerHTML?: string
  variant?: TypographyVariant
  element?: React.ElementType
}

const Typography: React.FC<TypographyProps> = ({
  className,
  children,
  innerHTML,
  variant = 'bodySM',
  element
}) => {
  const typographyClassNames = classNames(
    style.typography,
    className,
    style[variant]
  )

  const elementMap = {
    displayXXL: 'h1',
    displayXL: 'h2',
    displayLG: 'h3',
    displayMD: 'h4',
    displaySM: 'h5',
    displayXS: 'h6',
    subtitle: 'h6',
    bodyLG: 'p',
    bodyMD: 'p',
    bodySM: 'p',
    bodyXS: 'p',
    bodyXXS: 'p',
    buttonMD: 'span',
    buttonSM: 'span',
    buttonXS: 'span',
    buttonXXS: 'span'
  }

  const TypographyElement = element || elementMap[variant]

  if (innerHTML) {
    return (
      <TypographyElement
        className={typographyClassNames}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
    )
  }

  return (
    <TypographyElement className={typographyClassNames}>
      {children}
    </TypographyElement>
  )
}

export default Typography
