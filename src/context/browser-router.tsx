import Authentication from './authentication'
import { routes } from '../routes'
import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

const PageRouter = () => {
  const Main = () => useRoutes(routes)
  return (
    <BrowserRouter>
      <Authentication>
        <Main />
      </Authentication>
    </BrowserRouter>
  )
}

export default PageRouter
