import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'

const DynamicIndex = React.lazy(() => import('./pages/index'))
const DynamicAbout = React.lazy(() => import('./pages/about'))
const DynamicLogin = React.lazy(() => import('./pages/login'))
const DynamicPage404 = React.lazy(() => import('./pages/404'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true },
      { path: '/about', element: <DynamicAbout /> },
      { path: '/login', element: <DynamicLogin /> },
      { path: '*', element: <DynamicPage404 /> },
    ],
  },
]
