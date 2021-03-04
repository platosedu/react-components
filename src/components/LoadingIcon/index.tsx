import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import style from './style.module.scss'

interface LoadingIconProps {
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const LoadingIcon: React.FC<LoadingIconProps> = ({
  size = 'md',
  className
}) => {
  return (
    <Icon
      size={size}
      icon="mono_loading"
      className={classNames(style.loadingIcon, className)}
    />
  )
}

export default LoadingIcon
