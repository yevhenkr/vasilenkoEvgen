import { TitleSection } from '@/common/components/ui/titleSections/TitleSection'
import { ProjectItem } from '@/common/layout/sections/projects/projectItem/ProjectItem'

import gs from '../../../../app/app.module.scss'
import s from './projects.module.scss'

import cardsProjImg from '../../../../assets/img/cards.png'
import simpleFoodImg from '../../../../assets/img/simpleFood.png'

export const Projects = () => {
  return (
    <section className={`${gs.section} ${s.projectsBlock}`} id={'Projects'}>
      <div className={`${gs.container} ${s.container}`}>
        <TitleSection title={'Projects'} />
        <div className={s.projects}>
          <ProjectItem
            codeLink={'https://github.com/MrEvgeniy1989/cards'}
            icon={cardsProjImg}
            projDescription={
              'The app is designed for question-and-answer card-based learning, with the ability to'
            }
            projLink={'https://cards-for-study.vercel.app/login'}
            projName={'Cards'}
          />
          <ProjectItem
            codeLink={'https://github.com/yevhenkr/simpel_food'}
            icon={simpleFoodImg}
            projDescription={
              'Web application for delivery of food. The fastest food delivery service in your city. '
            }
            projLink={'https://simpel-food.vercel.app/'}
            projName={'Simple Food'}
          />
        </div>
      </div>
    </section>
  )
}
