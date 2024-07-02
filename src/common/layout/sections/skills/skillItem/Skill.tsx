import { ReactElement } from 'react'

import s from './skill.module.scss'
type SkillProps = {
  icon: ReactElement
  title: string
}

export const Skill = (props: SkillProps) => {
  return (
    <div>
      <div className={s.skill}>
        <div className={s.icon}>{props.icon}</div>
        <h3 className={s.title}>{props.title}</h3>
      </div>
    </div>
  )
}
