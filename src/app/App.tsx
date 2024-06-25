import { Main } from '@/common/components/ui/main/Main'
import { Projects } from '@/common/components/ui/projects/Projects'
import { Skills } from '@/common/components/ui/skills/Skills'

import s from './app.module.scss'

import { Header } from '../common/components/ui/header/Header'

export function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      <Skills />
      <Projects />
    </div>
  )
}
