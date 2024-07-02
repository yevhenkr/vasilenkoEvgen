import { TitleSection } from '@/common/components/ui/titleSections/TitleSection'
import FooterSocialMedia from '@/common/layout/footer/footerSocialMedia/footerSocialMedia'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter id={'footer'}>
      <div>
        <TitleSection title={'Evgenii Vasilenko'} />
        <FooterSocialMedia />
        <StyledSmall>© 2024 All Rights Reserved.</StyledSmall>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: relative;
  z-index: 1;
  padding: 40px 0;
  background: var(--color-dark-700);
`

const StyledSmall = styled.small`
  display: flex;
  margin-top: 15px;
  font-size: 12px;
  line-height: 1.8;
  opacity: 0.4;
  justify-content: center;
`
