
import React from 'react';
import { Outlet } from 'react-router-dom';


import StaticAbout from './src/pages/about'


export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/about', element: <StaticAbout />, },
    ]
  }
]

export const pages = [
  { route: '/about' },
]
