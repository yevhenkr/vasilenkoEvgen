import { Icon } from '@/common/components/ui/icon/Icon'
import styled from 'styled-components'

const FooterSocialMedia = () => {
  return (
    <StyleDiv>
      <Icon iconId={'telegram'} />
      <Icon iconId={'linkedIn'} />
      <Icon iconId={'codeWars'} />
      <Icon iconId={'gitHub'} />
      <Icon iconId={'email1'} iconId2={'email2'} viewBox={'0 0 60 60'} />
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
