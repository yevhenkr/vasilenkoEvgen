import { BrowserRouter as Router } from 'react-router-dom'

import { myTheme } from '@/styles/Theme.styled'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import '@/styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { App } from './app/App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={myTheme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
)
