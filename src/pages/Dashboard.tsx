import { 
  Card,
  Grid,
  useMantineTheme
} from '@mantine/core'
import { 
  Revenues, 
  Services 
} from '../components/_dashboard'
import {
  IconUsersGroup,
  IconUsers, 
  IconHomeShield 
} from '@tabler/icons-react';
import StatusCards from '../components/StatusCards'
import { UsersTable } from '../components/usersTable';
import tableData from '../assets/data/mockUsersTable.json'

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
    <Card 
      w='100%'
      h='100%'
      bg='transparent'
      p={0}
    >
      <StatusCards
        grid={{
          xs: 12,
          lg: 6,
          xl: 4
        }}
        data={dataStatusCard}
      />
      <Grid>
        <Grid.Col xs={12} sm={12} md={4} lg={3} xl={3}>
          <Services />
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={8} lg={9} xl={9}>  
          <div style={{ width: '100%', height: '378px' }}>
            <Revenues />
          </div>
        </Grid.Col>
      </Grid>
      <Card 
        h='420px' 
        shadow='md' 
        mt={12} 
        bg={theme.white} 
        radius="md"
        withBorder 
        style={{
          overflow: 'auto'
        }}
      > 
        <UsersTable data={tableData} />
      </Card>
    </Card>
  )
}

export default Dashboard
