import { ProjectItem } from '@/common/components/ui/projects/projectItem/ProjectItem'
import { TitleSection } from '@/common/components/ui/titleSections/TitleSection'

import gs from '../../../../app/app.module.scss'
import s from './projects.module.scss'

// import cards from '../../../../assets/img/cards.png'

export const Projects = () => {
  return (
    <section className={`${gs.section} ${s.skillsBlock}`}>
      <div className={`${gs.container}`}>
        <TitleSection title={'Projects'} />
        <div>
          <ProjectItem />
        </div>
      </div>
    </section>
  )
}
