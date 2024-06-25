import { CssIcon } from '@/assets/icons/cssIcon'
import { GitHubIcon, GitIcon } from '@/assets/icons/gitHubIcon'
import { HtmlIcon } from '@/assets/icons/htmlIcon'
import { JSIcon } from '@/assets/icons/jsIcon'
import { ReactIcon } from '@/assets/icons/reactIcon'
import { ReduxIcon } from '@/assets/icons/reduxIcon'
import { ReduxToolkitIcon } from '@/assets/icons/reduxToolkitIcon'
import { RestApiIcon } from '@/assets/icons/restApiIcon'
import { StoryBookIcon } from '@/assets/icons/storyBookIcon'
import { TSIcon } from '@/assets/icons/tsIcon'
import { Skill } from '@/common/components/ui/skills/skillItem/Skill'
import { TitleSection } from '@/common/components/ui/titleSections/titleSection'

import gs from '../../../../app/app.module.scss'
import s from './skills.module.scss'

export const Skills = () => {
  return (
    <section className={`${gs.section} ${s.skillsBlock}`}>
      <div className={`${gs.container}`}>
        <TitleSection />
        <div className={s.skills}>
          <Skill icon={<TSIcon />} title={'TypeScript'} />
          <Skill icon={<JSIcon />} title={'JavaScript'} />
          <Skill icon={<ReactIcon />} title={'React'} />
          <Skill icon={<ReduxIcon />} title={'Redux'} />
          <Skill icon={<ReduxToolkitIcon />} title={'Redux-Toolkit'} />
          <Skill icon={<HtmlIcon />} title={'HTML'} />
          <Skill icon={<CssIcon />} title={'CSS'} />
          <Skill icon={<RestApiIcon />} title={'REST API'} />
          <Skill icon={<StoryBookIcon />} title={'Story book'} />
          <Skill icon={<GitHubIcon />} title={'GitHub'} />
        </div>
      </div>
    </section>
  )
}
