import { Main } from '@/common/components/ui/main/Main'
import { Skills } from '@/common/components/ui/skills/Skills'

import s from './app.module.scss'

import { Header } from '../common/components/ui/header/Header'

export function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      <Skills />
    </div>
  )
}
