import { TitleSection } from '@/common/components/ui/titleSections/TitleSection'
import { ProjectItem } from '@/common/layout/sections/projects/projectItem/ProjectItem'
import styled from 'styled-components'

import cardsProjImg from '../../../../assets/img/cards.png'
import simpleFoodImg from '../../../../assets/img/simpleFood.png'

export const Projects = () => {
  return (
    <ProjectSection id={'Projects'}>
      <TitleSection title={'Projects'} />
      <ItemsWrapper>
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
      </ItemsWrapper>
    </ProjectSection>
  )
}

const ProjectSection = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (width <= 719px) {
    justify-content: center;
  }
`
