import { lazy } from 'react'

const Dashboard = lazy(() => import('../../pages/Accounts'))
const Accounts = lazy(() => import('../../pages/Accounts'))

export const Router = [
  {
    path: '/accounts',
    component: Accounts,
    isPrivate: false
  },
  {
    path: '/',
    component: Dashboard,
    exact: true,
    isPrivate: true
  },
]
