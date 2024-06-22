import { Link } from 'react-router-dom'

import s from '@/common/components/ui/header/header.module.scss'

import { Button } from '../button/button'
import { Typography } from '../typography/typography'

export const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Typography as={'p'}></Typography>
        <Button as={Link} to={'/login'} variant={'primary'} />
      </div>
    </header>
  )
}
