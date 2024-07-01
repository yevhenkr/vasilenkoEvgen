import { Button } from '@/common/components/ui/button'
import { myTheme } from '@/styles/Theme.styled'
import styled from 'styled-components'

export const Menu = () => {
  return (
    <StyledMenu role={'menu'}>
      <ul>
        <li>
          <Button as={'a'} href={'#Main'} variant={'secondary'}>
            Main
          </Button>
        </li>
        <li>
          <Button as={'a'} href={'#Skills'} variant={'secondary'}>
            Skills
          </Button>
        </li>
        <li>
          <Button as={'a'} href={'#Projects'} variant={'secondary'}>
            Projects
          </Button>
        </li>
        <li>
          <Button as={'a'} href={'#footer'} variant={'secondary'}>
            Contacts
          </Button>
        </li>
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  color: ${myTheme.color.white};

  ul {
    display: flex;
    column-gap: 10px;
    align-items: flex-end;
    justify-content: flex-end;

    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
  }
`
