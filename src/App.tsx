
import { AppShell } from '@mantine/core';
import Nav from './components/Navbar';
import { useSidebar } from './hooks/useSidebar';
import Dashboard from './pages/Dashboard';

function App() {
  const sidebar = useSidebar()
  return (
    <>
      <AppShell
        header={<Nav />}
        ml={sidebar.width <= 0 ? 60 : 0}
      >
        <Dashboard />
      </AppShell>
    </>
  )
}

export default App
