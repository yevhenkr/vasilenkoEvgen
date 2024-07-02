import { Footer } from '@/common/layout/footer/Footer'
import { Header } from '@/common/layout/header/Header'
import { Main } from '@/common/layout/main/Main'
import { Projects } from '@/common/layout/sections/projects/Projects'
import { Skills } from '@/common/layout/sections/skills/Skills'

import s from './app.module.scss'

export function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
