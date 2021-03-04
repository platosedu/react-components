import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

interface CardProps {
  className?: string
  hover?: boolean
}

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={classNames(className, style.card)}>{children}</div>
)

export default Card
