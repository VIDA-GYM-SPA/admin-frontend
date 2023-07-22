import { lazy } from 'react'

const Dashboard = lazy(() => import('../../pages/Dashboard'))

export const Router = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
    isPrivate: true
  }
]
