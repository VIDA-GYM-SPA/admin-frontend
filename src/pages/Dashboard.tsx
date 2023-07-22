import { Card, Group, useMantineTheme, } from '@mantine/core'
import StatusCards from '../components/StatusCards'
import { Revenues, Services } from '../components/_dashboard'
import {
  IconUsersGroup,
  IconUsers, 
  IconHomeShield 
} from '@tabler/icons-react';

function Dashboard() {
  const theme = useMantineTheme()
  const dataStatusCard = [
    {
      title: '2933 Clientes',
      subtitle: '232 Clientes con pagos pendientes',
      icon: <IconUsersGroup />,
      color: theme.colors.blue[6],
      // children: (
      //   <Text weight={600} fz={20}>
      //     100
      //   </Text>
      // )
    },
    {
      title: '29 Empleados',
      subtitle: '4 empleados en el edificio',
      icon: <IconUsers />,
      color: theme.colors.green[6],
      // children: (
      //   <Text weight={600} fz={20}>
      //     100
      //   </Text>
      // )
    },
    {
      title: '4 Zonas',
      subtitle: '2 Zonas públicas del edificio',
      icon: <IconHomeShield />,
      color: theme.colors.red[6],
      // children: (
      //   <Text weight={600} fz={20}>
      //     100
      //   </Text>
      // )
    }
  ]

  return (
    <section className='dashboard'>
      <StatusCards
        grid={{
          xs: 12,
          lg: 6,
          xl: 4
        }}
        data={dataStatusCard}
      />
      <Group noWrap>
        <Services />
        <div style={{ width: '100%', height: '375px' }}>
          <Revenues />
        </div>
      </Group>
      <div style={{ width: '100%', height: '432px' }}>
        <Card h='100%' withBorder shadow='md' mt={12} bg={theme.white} radius="md">
          <Group>

          </Group>
        </Card>
      </div>
    </section>
  )
}

export default Dashboard
