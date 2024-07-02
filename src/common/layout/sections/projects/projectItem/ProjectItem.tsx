import { Link } from 'react-router-dom'

import { Button } from '@/common/components/ui/button'
import styled from 'styled-components'

type SkillProps = {
  codeLink: string
  icon: string
  projDescription: string
  projLink: string
  projName: string
}
export const ProjectItem = (props: SkillProps) => {
  return (
    <Item>
      <ImgContainer>
        <img alt={'Cards'} src={props.icon} />
        <Button as={Link} to={props.projLink} variant={'secondary'}>
          VIEW PROJECT
        </Button>
      </ImgContainer>
      <ProjectInfo>
        <h3>{props.projName}</h3>
        <span>{props.projDescription}</span>
        <div>
          <Button as={Link} to={props.projLink} variant={'empty'}>
            Website
          </Button>
          <Button as={Link} to={props.codeLink} variant={'empty'}>
            Code
          </Button>
        </div>
      </ProjectInfo>
    </Item>
  )
}

const Item = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;

  width: 330px;
  max-width: 540px;

  background-color: var(--color-dark-700);
`

const ImgContainer = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';

    position: absolute;
    inset: 0;

    opacity: 0;
    background-color: rgb(0 0 0 / 20%);
    backdrop-filter: blur(3px);

    transition: transform 0.9s ease;
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 350px;
    object-fit: cover;
  }

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: #fff;

    opacity: 0;
  }
  &:hover {
    &::before {
      opacity: 1;
    }

    a {
      opacity: 1;
    }
    opacity: 1;
  }

  @media screen and (width <= 768px) {
    &::before {
      display: none;
    }
  }
`

const ProjectInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 20px;

  span {
    display: inline-block;
    margin: 14px 0 20px;
    font-size: 14px;
    line-height: 1.4;
  }

  div {
    &::before {
      width: calc(100% - 20px);
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }

    @media screen and (width <= 768px) {
      padding: 5px 10px;
      font-weight: 500;

      &::before {
        bottom: 0;
        width: 100%;
        height: 100%;
      }

      & + .link {
        margin-left: 10px;
      }
    }
  }

  a {
    position: relative;
    z-index: 0;

    padding: 10px;

    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      &::before {
        bottom: 0;
        width: 100%;
        height: 100%;
        transition: all 0.2s;
      }
    }
    &::before {
      content: '';
      width: calc(100% - 20px);//TODO

      position: absolute;
      z-index: -1;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);

      width: 50%;
      height: 10px;

      background-color: var(--color-info-500); // Цвет полосы

      transition: all 0.2s;
    }
`
