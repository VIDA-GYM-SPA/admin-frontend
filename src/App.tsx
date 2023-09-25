
import { AppShell } from '@mantine/core'
import Nav from './components/Navbar'
import { useSidebar } from './hooks/useSidebar'
import React from 'react'
import { Authorization } from './config/auth/Authorization'

interface IApp {
  children?: React.ReactNode;
}

function App({ children }: IApp) {
  const sidebar = useSidebar()
  return (
    <>
      <AppShell
        header={ !Authorization() && localStorage.getItem('user') ? <Nav /> : <></> }
        ml={ sidebar.width <= 0 ? !Authorization() && localStorage.getItem('user') ? 50 : 0 : '-10px' }
        style={{ overflowX: 'hidden' }}
      >
        <>
          { children }
        </>
      </AppShell>
    </>
  )
}

export default App
