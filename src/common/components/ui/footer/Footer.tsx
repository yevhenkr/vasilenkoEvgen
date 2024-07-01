import FooterSocialMedia from '@/common/components/ui/footer/footerSocialMedia/footerSocialMedia'
import { TitleSection } from '@/common/components/ui/titleSections/TitleSection'
import styled from 'styled-components'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <StyledFooter id={'footer'}>
      <div>
        <TitleSection className={s.footerTitle} title={'Evgenii Vasilenko'} />
        <FooterSocialMedia />
        <StyledSmall>© 2024 All Rights Reserved.</StyledSmall>
      </div>
    </StyledFooter>
  )
}

const StyledSmall = styled.small`
  display: flex;
  margin-top: 15px;
  font-size: 12px;
  line-height: 1.8;
  opacity: 0.4;
  justify-content: center;
`
const StyledFooter = styled.footer`
  position: relative;
  z-index: 1;
  padding: 40px 0;
  background: var(--color-dark-700);
`
