import React from 'react'
import classNames from 'classnames'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import style from './style.module.scss'

interface ImgMaskProps {
  className?: string
  src: string
  variant: 'one' | 'two' | 'three'
  alt: string
}

const ImgMask: React.FC<ImgMaskProps> = ({ className, src, variant, alt }) => (
  <div className={classNames(style.container, style[variant], className)}>
    <LazyLoadImage src={src} className={style.img} alt={alt} />
  </div>
)

export default ImgMask
