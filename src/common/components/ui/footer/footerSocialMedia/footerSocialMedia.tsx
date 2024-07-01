import SocialMediaSprite from '@/common/components/ui/footer/footerSocialMedia/socialMediaSprite'
import styled from 'styled-components'

const FooterSocialMedia = () => {
  return (
    <StyleDiv>
      <SocialMediaSprite spriteId={'telegram'} />
      <SocialMediaSprite spriteId={'linkedIn'} />
      <SocialMediaSprite spriteId={'codeWars'} />
      <SocialMediaSprite spriteId={'gitHub'} />
      <SocialMediaSprite spriteId={'email1'} spriteId2={'email2'} viewBox={'0 0 60 60'} />
    </StyleDiv>
  )
}

export default FooterSocialMedia

const StyleDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  width: 100%;
`
