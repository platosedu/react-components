import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { isMobile } from 'react-device-detect'
import Glider from 'glider-js'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Button from '../Button'
import style from './style.module.scss'

interface CarouselProps {
  ariaLabel?: string
  className?: string
  slidesToShow?: number | 'auto'
  slidesToScroll?: number | 'auto'
  itemWidth?: number
  element?: React.ElementType
}

const Carousel: React.FC<CarouselProps> = ({
  ariaLabel = 'Navegação em slider',
  className,
  children,
  slidesToShow = 'auto',
  slidesToScroll = 'auto',
  itemWidth,
  element = 'div'
}) => {
  const CarouselElement: React.ElementType = element
  const elementRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [isBiggerThanContainer, setIsBiggerThanContainer] = useState(true)

  useEffect(() => {
    const settings = {
      slidesToShow,
      slidesToScroll,
      exactWidth: true,
      itemWidth,
      arrows: {
        prev: prevRef.current,
        next: nextRef.current
      }
    }

    const glider = new Glider(elementRef.current, settings)

    setIsBiggerThanContainer(glider.trackWidth > glider.containerWidth)

    return (): void => {
      glider.destroy()
    }

    // disabled exhaustive-deps because we need this function to be called once to initialize the carousel plugin
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CarouselElement
      className={classNames(style.container, className, {
        [style.navigationDisabled]: !isBiggerThanContainer
      })}
    >
      <div ref={elementRef}>{children}</div>

      {!isMobile ? (
        <div
          className={style.navigation}
          role="navigation"
          aria-label={ariaLabel}
        >
          <div
            className={classNames(style.button, style.buttonPrev)}
            ref={prevRef}
          >
            <Button
              display="circular"
              variant="neutral-light"
              bordered
              prefixIconComponent={FaAngleLeft}
              aria-hidden="true"
              type="button"
            />
          </div>
          <div
            className={classNames(style.button, style.buttonNext)}
            ref={nextRef}
          >
            <Button
              display="circular"
              variant="neutral-light"
              bordered
              prefixIconComponent={FaAngleRight}
              aria-hidden="true"
              type="button"
            />
          </div>
        </div>
      ) : null}
    </CarouselElement>
  )
}

export default Carousel
