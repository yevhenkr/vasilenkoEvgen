import s from '@/common/components/ui/header/header.module.scss'

// import { Typography } from './typography/typography'

export const Header = () => {
  return (
    <header className={s.root}>
      <div>
        {/*<Typography as={'p'}></Typography>*/}
        <nav>
          <ul className={s.content}>
            <li>
              <a href={'#Main'}>Main</a>
            </li>
            <li>
              <a href={'#Skills'}>Skills</a>
            </li>
            <li>
              <a href={'#Projects'}>Projects</a>
            </li>
            <li>
              <a href={'#footer'}>Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
