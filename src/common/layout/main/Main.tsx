import { FlexWrapper } from '@/common/components/ui/flexWrapper/FlexWrapper'
import styled from 'styled-components'

import my from '../../../assets/img/myPhoto.jpg'

export const Main = () => {
  return (
    <StyledMain id={'Main'}>
      <FlexWrapper alignI={'center'} justifyC={'space-around'}>
        <div>
          <MaineTitle>I'm Vasilenko Evgen</MaineTitle>
          <StyledName>WEB Developer</StyledName>
        </div>
        <StyledPhoto>
          <img src={my} />
        </StyledPhoto>
      </FlexWrapper>
    </StyledMain>
  )
}

const StyledPhoto = styled.div`
    position: relative;
    z-index: 1;
    margin-right: 3%;

    img {
        height: 430px;
    }

    &::before {
        content: '';

        position: absolute;
        z-index: -1;
        top: -20px;
        left: 20px;

        width: 330px;
        height: 470px;

        border: 5px solid var(--color-info-500);

        @media screen and (width <= 576px) {
            top: -16px;
            left: 16px;
            width: 314px;
            height: 414px;
        }
`
const StyledMain = styled.div`
  min-height: 100vh;
`
const StyledName = styled.h2``
const MaineTitle = styled.h1``
