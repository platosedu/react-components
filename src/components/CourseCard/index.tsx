import React from 'react'
import classNames from 'classnames'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import formatCurrency from 'utils/format-currency'
import { CoursePlan } from 'interfaces'
import style from './style.module.scss'
import Typography from '../Typography'
import slugify from 'slugify'

interface CourseCardProps {
  /** Custom className */
  className?: string

  /** Course image source*/
  image: string

  /** Course title */
  title: string

  /** Course description ex: `☕` */
  description: string

  /** Course plan */
  originalPlan?: CoursePlan

  /** Course promotion plan */
  currentPlan: CoursePlan

  /** Course duration */
  duration?: string

  /** Course begin */
  begin?: string

  /** Course area */
  area?: string

  /** Element to render the component */
  element?: React.ElementType

  /** Course id */
  id?: string
}

const CourseCard: React.FC<CourseCardProps> = ({
  className,
  image,
  title,
  description,
  currentPlan,
  originalPlan,
  duration,
  begin,
  area,
  id,
  element = 'div',
  ...rest
}) => {
  const currentInstallmentPrice = currentPlan.total / currentPlan.installment
  let originalInstallmentPrice = currentInstallmentPrice

  if (originalPlan) {
    originalInstallmentPrice = originalPlan.total / originalPlan.installment
  }

  const isPromotion = originalInstallmentPrice > currentInstallmentPrice
  const CourseCardElement: React.ElementType = element

  return (
    <CourseCardElement {...rest}>
      <a
        href={`/cursos/${id}/${slugify(title)}`}
        className={classNames(style.courseCard, className)}
      >
        <figure className={style.figure}>
          <LazyLoadImage src={image} alt={title} className={style.img} />
        </figure>
        <div
          className={classNames(style.container, style.dFlex, style.flexColumn)}
        >
          <div className={style.contentText}>
            <h6 className={style.title}>{title}</h6>
            <p className={classNames(style.text, style.description)}>
              {description.length > (title.length > 40 ? 83 : 143)
                ? description.slice(0, title.length > 40 ? 80 : 140) + '...'
                : description}
            </p>
          </div>

          <div className={style.contentInfo}>
            {isPromotion && (
              <div className={style.promotionContainer}>
                <span className={style.promotionTag}>Promoção</span>

                <Typography className={style.promotionOriginalPrice}>
                  de {formatCurrency(originalInstallmentPrice)}
                </Typography>
              </div>
            )}

            <div className={style.priceContainer}>
              <div>
                <p className={classNames(style.text, style.sm)}>A partir de</p>
                <Typography className={style.price}>
                  {formatCurrency(currentInstallmentPrice)}*
                </Typography>
              </div>

              <p className={style.pricePlanObs}>
                <Typography variant="bodyXS" element="span">
                  * Mensais
                </Typography>

                <br />

                <Typography variant="bodyXS" element="span">
                  Em até {currentPlan.installment}x
                </Typography>
              </p>
            </div>

            <div className={style.infoContainer}>
              {duration && (
                <div className={style.infoItem}>
                  <p className={style.text}>Duração:</p>
                  <div className={style.infoTag}>{duration}</div>
                </div>
              )}

              {begin && (
                <div className={style.infoItem}>
                  <p className={style.text}>Início:</p>
                  <div className={style.infoTag}>{begin}</div>
                </div>
              )}

              {area && (
                <div className={style.infoItem}>
                  <p className={style.text}>Área:</p>
                  <div className={style.infoTag}>{area}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </CourseCardElement>
  )
}
export default CourseCard
