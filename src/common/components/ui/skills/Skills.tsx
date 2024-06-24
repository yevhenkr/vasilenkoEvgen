import { TitleSection } from '@/common/components/ui/titleSections/titleSection'

import gs from '../../../../app/app.module.scss'
import s from './skills.module.scss'

export const Skills = () => {
  return (
    <div className={`${gs.container} ${s.skillsContainer}`}>
      <section className={gs.section}>
        <TitleSection />
        <div>{/*<img className={s.img} src={my} />*/}</div>
      </section>
    </div>
  )
}
