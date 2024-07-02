import { CssIcon } from '@/assets/icons/cssIcon'
import { GitHubIcon } from '@/assets/icons/gitHubIcon'
import { HtmlIcon } from '@/assets/icons/htmlIcon'
import { JSIcon } from '@/assets/icons/jsIcon'
import { ReactIcon } from '@/assets/icons/reactIcon'
import { ReduxIcon } from '@/assets/icons/reduxIcon'
import { ReduxToolkitIcon } from '@/assets/icons/reduxToolkitIcon'
import { RestApiIcon } from '@/assets/icons/restApiIcon'
import { StoryBookIcon } from '@/assets/icons/storyBookIcon'
import { TSIcon } from '@/assets/icons/tsIcon'
import { FlexWrapper } from '@/common/components/ui/flexWrapper/FlexWrapper'
import { SelectionTitle, TitleSection } from '@/common/components/ui/titleSections/TitleSection'
import { Skill } from '@/common/layout/sections/skills/skillItem/Skill'
import styled from 'styled-components'

import gs from '../../../../app/app.module.scss'

export const Skills = () => {
  return (
    <StyledSkills id={'Skills'}>
      <TitleSection title={'Skills'} />
      <SelectionTitle className={`${gs.container}`} />
      <FlexWrapper justify={'space-between'} wrap={'wrap'}>
        <Skill icon={<TSIcon />} text={'text text text'} title={'TypeScript'} />
        <Skill icon={<JSIcon />} text={'text text text'} title={'JavaScript'} />
        <Skill icon={<ReactIcon />} text={'text text text'} title={'React'} />
        <Skill icon={<ReduxIcon />} text={'text text text'} title={'Redux'} />
        <Skill icon={<ReduxToolkitIcon />} text={'text text text'} title={'Redux-Toolkit'} />
        <Skill icon={<HtmlIcon />} text={'text text text'} title={'HTML'} />
        <Skill icon={<CssIcon />} text={'text text text'} title={'CSS'} />
        <Skill icon={<RestApiIcon />} text={'text text text'} title={'REST API'} />
        <Skill icon={<StoryBookIcon />} text={'text text text'} title={'Story book'} />
        <Skill icon={<GitHubIcon />} text={'text text text'} title={'GitHub'} />
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  padding: 100px 0;
  position: relative;
  z-index: 1;
  min-height: 100vh;
  background-color: var(--color-dark-700);
`
