import AppThemeProvider from './context/app-theme-provider'
import PageRouter from './context/browser-router'
import TanstackReact from './context/tanstack-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <TanstackReact>
        <PageRouter />
      </TanstackReact>
    </AppThemeProvider>
  </React.StrictMode>,
)
