import { Icon } from '@/common/components/ui/icon/Icon'
import styled from 'styled-components'

const FooterSocialMedia = () => {
  return (
    <StyleDiv>
      <a href={'https://t.me/VasilenkoEvgen'} rel={'noreferrer'} target={'_blank'}>
        <Icon iconId={'telegram'} />
      </a>
      <a
        href={'https://www.linkedin.com/in/yevhen-vasilenko-0a2171161/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <Icon iconId={'linkedIn'} />
      </a>{' '}
      <a href={'https://www.codewars.com/users/yevhenkr'} rel={'noreferrer'} target={'_blank'}>
        <Icon iconId={'codeWars'} />
      </a>
      <a href={'https://github.com/yevhenkr'} rel={'noreferrer'} target={'_blank'}>
        <Icon iconId={'gitHub'} />{' '}
      </a>
      <a href={'mailto:vasilenkoevgen88@gmail.com'} rel={'noreferrer'} target={'_blank'}>
        <Icon iconId={'email1'} iconId2={'email2'} viewBox={'0 0 60 60'} />{' '}
      </a>
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
