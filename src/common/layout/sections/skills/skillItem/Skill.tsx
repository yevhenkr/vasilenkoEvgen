import { ReactElement } from 'react'

import styled from 'styled-components'

type SkillProps = {
  icon: ReactElement
  title: string
}

export const Skill = (props: SkillProps) => {
  return (
    <StyledSkill>
      <StyledIcon>{props.icon}</StyledIcon>
      <StyledTitle>{props.title}</StyledTitle>
      {/*<StyledText>{props.text}</StyledText>*/}
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 30%;
`
const StyledIcon = styled.div`
  transform: rotate(45deg);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  margin-bottom: 30px;

  background-color: var(--color-dark-300);

  svg {
    transform: rotate(-45deg);
    min-height: 50px;
  }
`

const StyledTitle = styled.h3`
  font-family: var(--font-family-primary);
  font-size: clamp(16px, (100vw - 360px) / 1080 * 4 + 16px, 20px);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-dark-100);
  letter-spacing: 0.05em;
  margin: 0;
`
