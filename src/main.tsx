import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ClosetProvider } from './ClosetContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ClosetProvider>
        <App />
      </ClosetProvider>
    </HashRouter>
  </StrictMode>,
)
