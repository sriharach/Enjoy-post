import AppThemeProvider from './context/app-theme-provider'
import PageRouter from './context/browser-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <PageRouter />
    </AppThemeProvider>
  </React.StrictMode>,
)
