import React, { useState } from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import CircledInfo from '../CircledInfo'
import Typography from '../Typography'
import style from './style.module.scss'

interface AccordionProps {
  className?: string
  header: string
  index: string
}

const Accordion: React.FC<AccordionProps> = ({
  className,
  header,
  children,
  index
}) => {
  const [isAccordionOpened, setIsAccordionOpened] = useState(false)

  const toggleAccordion = () => {
    setIsAccordionOpened(!isAccordionOpened)
  }

  return (
    <div
      className={classNames(style.accordion, className)}
      onClick={() => toggleAccordion()}
    >
      <div className={classNames(style.dFlex, style.alignItemsCenter)}>
        <CircledInfo
          text={index}
          position={'left0'}
          size={'lg'}
          textSize={'lg'}
        />
        <Typography variant="displayXS" className={style.accordionHeader}>
          {header}
        </Typography>
        <Icon
          size="xs"
          icon="mono_arrow_dropdown"
          className={classNames(
            style.icon,
            isAccordionOpened ? style.openedIcon : style.closedIcon
          )}
        />
      </div>
      <div
        className={classNames(
          style.accordionContent,
          isAccordionOpened ? style.openedContent : style.closedContent
        )}
      >
        {children}
      </div>
    </div>
  )
}
export default Accordion
