import React from 'react'
import classNames from 'classnames'
import Typography from 'components/Typography'
import formatCurrency from 'utils/format-currency'
import Button from 'components/Button'
import { Course } from 'interfaces'
import { FaBarcode } from 'react-icons/fa'
import style from './style.module.scss'

interface CourseCardPricingProps extends Course {
  className?: string
  customStyle?: React.CSSProperties
  onCourseEbookOpen: () => void
  onCoursePlansOpen: () => void
}

const CourseCardPricing: React.FC<CourseCardPricingProps> = ({
  className,
  id,
  name,
  originalPlan,
  currentPlan,
  onCourseEbookOpen,
  onCoursePlansOpen,
  customStyle = {}
}) => {
  const originalInstallmentPrice = originalPlan.total / originalPlan.installment
  const currentInstallmentPrice = currentPlan.total / currentPlan.installment
  const isPromotion = originalInstallmentPrice > currentInstallmentPrice

  const discount = originalInstallmentPrice - currentInstallmentPrice
  const discountPercentage = (
    (discount / originalInstallmentPrice) *
    100
  ).toFixed(0)

  return (
    <div className={classNames(style.card, className)} style={customStyle}>
      <Typography
        className={classNames(style.titleText, style.titleDescription)}
        variant="displaySM"
      >
        Pós-graduação EAD
      </Typography>

      <Typography
        className={classNames(style.titleText, style.title)}
        variant="displayXL"
      >
        {name}
      </Typography>

      <Typography
        className={classNames(style.titleText, style.subtitle)}
        variant="subtitle"
      >
        Inscreva-se agora e
        {isPromotion
          ? ` ganhe ${discountPercentage}% de desconto`
          : ' comece imediatamente'}
      </Typography>

      <div className={style.content}>
        {isPromotion && (
          <Typography variant="bodySM" className={style.contentoriginalPlan}>
            De: {formatCurrency(originalInstallmentPrice)}
          </Typography>
        )}

        <Typography className={style.contentPriceLabel} variant="bodySM">
          A partir de:
        </Typography>

        <div className={style.contentPriceContainer}>
          <Typography
            variant="displayXL"
            element="p"
            className={style.contentCurrentPlan}
          >
            <em>{formatCurrency(currentInstallmentPrice)}</em>
          </Typography>

          <p className={style.contentCurrentPlanObs}>
            <Typography variant="bodyXS" element="span">
              * Mensais
            </Typography>
            <br />
            <Typography variant="bodyXS" element="span">
              Em até {currentPlan.installment}x
            </Typography>
          </p>
        </div>

        {isPromotion && (
          <Typography
            element="span"
            variant="bodyXS"
            className={style.contentDiscountPrice}
          >
            {formatCurrency(discount)} de desconto
          </Typography>
        )}

        <Button
          className={style.contentButton}
          onClick={onCoursePlansOpen}
          fillType="outline"
          display="sm"
          label="Ver opções de duração e parcelamento do curso"
          prefixIconComponent={FaBarcode}
        />
      </div>

      <Typography variant="bodyXS" className={style.obsText}>
        *Os preços podem variar de acordo com cada unidade e plano de pagamento.
        Curso + e-book estão inclusos na inscrição.
      </Typography>

      <div className={style.actions}>
        <a href={`/inscreva-se?courseId=${id}`}>
          <Button
            className={style.actionsButton}
            variant="primary"
            display="lg"
            label="Inscreva-se"
            element="a"
            href={`/inscreva-se?courseId=${id}`}
          />
        </a>

        <Button
          className={style.actionsButton}
          onClick={onCourseEbookOpen}
          variant="secondary"
          display="sm"
          label="Adquirir somente o e-book"
        />
      </div>
    </div>
  )
}

export default CourseCardPricing
