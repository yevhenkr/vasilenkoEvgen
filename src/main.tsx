import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { createRoot } from 'react-dom/client'

import '@/styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { App } from './app/App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
