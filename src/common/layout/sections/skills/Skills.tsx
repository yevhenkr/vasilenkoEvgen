import { CssIcon } from '@/assets/icons/cssIcon'
import { GitHubIcon } from '@/assets/icons/gitHubIcon'
import { HtmlIcon } from '@/assets/icons/htmlIcon'
import { JSIcon } from '@/assets/icons/jsIcon'
import { ReactIcon } from '@/assets/icons/reactIcon'
import { ReduxIcon } from '@/assets/icons/reduxIcon'
import { ReduxToolkitIcon } from '@/assets/icons/reduxToolkitIcon'
import { RestApiIcon } from '@/assets/icons/restApiIcon'
// import { StoryBookIcon } from '@/assets/icons/storyBookIcon'
import { TSIcon } from '@/assets/icons/tsIcon'
import { FlexWrapper } from '@/common/components/ui/flexWrapper/FlexWrapper'
import { TitleSection } from '@/common/components/ui/titleSections/TitleSection'
import { Skill } from '@/common/layout/sections/skills/skillItem/Skill'
import styled from 'styled-components'

export const Skills = () => {
  return (
    <StyledSkills id={'Skills'}>
      <TitleSection title={'Skills'} />
      <FlexWrapper gap={'30px'} justify={'space-between'} wrap={'wrap'}>
        <Skill icon={<TSIcon />} title={'TypeScript'} />
        <Skill icon={<JSIcon />} title={'JavaScript'} />
        <Skill icon={<ReactIcon />} title={'React'} />
        <Skill icon={<ReduxIcon />} title={'Redux'} />
        <Skill icon={<ReduxToolkitIcon />} title={'Redux-Toolkit'} />
        <Skill icon={<HtmlIcon />} title={'HTML'} />
        <Skill icon={<CssIcon />} title={'CSS'} />
        <Skill icon={<RestApiIcon />} title={'REST API'} />
        {/*<Skill icon={<StoryBookIcon />} title={'Story book'} />*/}
        <Skill icon={<GitHubIcon />} title={'GitHub'} />
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  padding: 100px 0;
  position: relative;
  height: 100vh;
  z-index: 1;
  background-color: var(--color-dark-700);
`
