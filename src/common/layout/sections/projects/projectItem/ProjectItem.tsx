import { Link } from 'react-router-dom'

import { Button } from '@/common/components/ui/button'

import s from './projectItem.module.scss'

type SkillProps = {
  codeLink: string
  icon: string
  projDescription: string
  projLink: string
  projName: string
}
export const ProjectItem = (props: SkillProps) => {
  return (
    <div className={s.project}>
      <div className={s.imgContainer}>
        <img alt={'Cards'} className={s.img} src={props.icon} />
        <Button as={Link} className={s.button} to={props.projLink} variant={'secondary'}>
          VIEW PROJECT
        </Button>
      </div>
      <div className={s.projectInfo}>
        <h3>{props.projName}</h3>
        <span className={s.description}>{props.projDescription}</span>
        <div className={s.links}>
          <Button
            as={Link}
            className={`${s.btnLink} ${s.link}`}
            to={props.projLink}
            variant={'empty'}
          >
            Website
          </Button>
          <Button
            as={Link}
            className={`${s.btnLink} ${s.link}`}
            to={props.codeLink}
            variant={'empty'}
          >
            Code
          </Button>
        </div>
      </div>
    </div>
  )
}
