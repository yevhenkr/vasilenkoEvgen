import { FlexWrapper } from '@/common/components/ui/flexWrapper/FlexWrapper'
import styled from 'styled-components'

import my from '../../../assets/img/myPhoto.jpg'

export const Main = () => {
  return (
    <StyledMain id={'Main'}>
      <FlexWrapper align_i={'center'} justify={'space-around'}>
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
        height: 600px;
    }

    &::before {
        content: '';

        position: absolute;
        z-index: -1;
        top: -20px;
        left: 20px;

        width: 450px;
        height: 640px;

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
  display: flex;
  justify-content: center; /* Вирівнювання по центру горизонтально */
  align-items: center;
`
const StyledName = styled.h2``
const MaineTitle = styled.h1``
