import React from 'react'
import style from './style.module.scss'
import Icon from '../Icon'

interface SubHeaderProps {
  linkToTargetAudience?: string
  linkToSubjects?: string
  linkToTeachers?: string
  linkToCertification?: string
}

const SubHeader: React.FC<SubHeaderProps> = ({
  linkToTargetAudience,
  linkToSubjects,
  linkToTeachers,
  linkToCertification
}) => {
  return (
    <div className={style.subHeader}>
      <div className={style.container}>
        <div className={style.item}>
          <a href={linkToTargetAudience} className={style.link}>
            <Icon className={style.icon} size="xs" icon="mono_student_hat" />
            <span>Público-alvo</span>
          </a>
        </div>

        <div className={style.item}>
          <a href={linkToSubjects} className={style.link}>
            <Icon className={style.icon} size="xs" icon="mono_list_dotted" />
            <span>Disciplinas</span>
          </a>
        </div>

        <div className={style.item}>
          <a href={linkToTeachers} className={style.link}>
            <Icon className={style.icon} size="xs" icon="mono_opened_book" />
            <span>Professores</span>
          </a>
        </div>

        <div className={style.item}>
          <a href={linkToCertification} className={style.link}>
            <Icon className={style.icon} size="xs" icon="mono_star" />
            <span>Certificação</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default SubHeader
