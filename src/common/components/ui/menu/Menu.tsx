import { Button } from '@/common/components/ui/button'

import s from '@/common/components/ui/header/header.module.scss'

export const Menu = () => {
  return (
    <nav role={'menu'}>
      <ul className={s.content}>
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
    </nav>
  )
}

// const StyledMenu = styled.nav`
//   color: #ff8099;
// `
