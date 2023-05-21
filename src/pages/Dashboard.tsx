import { AppShell, Avatar, Card, Grid, Group, Text, Title, RingProgress, useMantineTheme } from "@mantine/core"
import Nav from "../components/Navbar"
import { useSidebar } from "../hooks/useSidebar"
import { IconUser, IconUserOff, IconUsers } from "@tabler/icons-react"

type Props = {}

function Dashboard({}: Props) {
  const theme = useMantineTheme()
  const sidebar = useSidebar()

  return (
    <section className="dashboard" >
      <AppShell
        header={<Nav />}
      >
        <Card 
          shadow="sm" 
          padding="md" 
          radius="sm"
          ml={
            sidebar.width <= 0 ? 60 : 0
          }  
          bg={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]}
          h="100%"
          className="dashboard__card"
        >
          <Grid>
            <Grid.Col xs={12} md={6} lg={4}>
              <Card shadow="sm" padding="md" radius="sm" bg={theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[4]}>
                <Group position="left">
                  <Avatar radius="xl" h="50px" w="50px" bg={theme.colors.green[3]}>
                    <IconUser size={30} stroke={1.4}/>
                  </Avatar>
                  <Title order={3}>
                    <Text weight={400}>
                      Usuarios activos - 1290
                    </Text>
                  </Title>
                </Group>
              </Card>
            </Grid.Col>
            <Grid.Col xs={12} md={6} lg={4}>
              <Card shadow="sm" padding="md" radius="sm" bg={theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[4]}>
                <Group position="left">
                  <Avatar radius="xl" h="50px" w="50px" bg={theme.colors.green[3]}>
                    <IconUserOff size={30} stroke={1.4}/>
                  </Avatar>
                  <Title order={3}>
                    <Text weight={400}>
                      Usuarios inactivos - 100
                    </Text>
                  </Title>
                </Group>
              </Card>
            </Grid.Col>
            <Grid.Col xs={12} md={12} lg={4}>
              <Card shadow="sm" padding="md" radius="sm" bg={theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[4]}>
                <Group position="left">
                  <Avatar radius="xl" h="50px" w="50px" bg={theme.colors.green[3]}>
                    <IconUsers size={30} stroke={1.4}/>
                  </Avatar>
                  <Title order={3}>
                    <Text weight={400}>
                      Usuarios totales - 1390
                    </Text>
                  </Title>
                </Group>
              </Card>
            </Grid.Col>
          </Grid>
          <Card mt={15} h="300px" shadow="sm" padding="md" radius="sm" bg={theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[4]}>
          <RingProgress
            size={250}
            thickness={15}
            roundCaps
            sections={[
              { value: 88, color: '#68b5e8' },
              { value: 12, color: '#8468e8' },
            ]}
          />
          </Card>
        </Card>
      </AppShell>
    </section>
  )
}

export default Dashboard