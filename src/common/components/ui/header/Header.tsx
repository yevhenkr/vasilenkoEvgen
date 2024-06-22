import s from '@/common/components/ui/header/header.module.scss'

import { Button } from '../button/button'
// import { Typography } from '../typography/typography'

export const Header = () => {
  return (
    <header className={s.root}>
      <div>
        {/*<Typography as={'p'}></Typography>*/}
        <nav>
          <ul className={s.content}>
            <li>
              <Button variant={'empty'}>Main</Button>
            </li>
            <li>
              <Button variant={'empty'}>Skills</Button>
            </li>
            <li>
              <Button variant={'empty'}>Project</Button>
            </li>
            <li>
              <Button variant={'empty'}>Contacts</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
