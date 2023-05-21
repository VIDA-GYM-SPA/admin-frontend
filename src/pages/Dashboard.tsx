import { AppShell, Card } from "@mantine/core"
import Nav from "../components/Navbar"
import { useSidebar } from "../hooks/useSidebar"

type Props = {}

function Dashboard({}: Props) {
  const sidebar = useSidebar()
  return (
    <section className="dashboard" >
      <AppShell
        header={<Nav />}
      >
        <Card shadow="sm" padding="md" ml={
          sidebar.width <= 0 ? 60 : 0
        } radius="md" className="dashboard__card">
          <h1>Dashboard</h1>
        </Card>
      </AppShell>
    </section>
  )
}

export default Dashboard