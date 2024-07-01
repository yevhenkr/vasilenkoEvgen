import { Menu } from '@/common/components/ui/menu/Menu'

import s from '@/common/components/ui/header/header.module.scss'

export const Header = () => {
  return (
    <header className={s.root}>
      <div>
        <Menu />
      </div>
    </header>
  )
}
