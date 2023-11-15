import {
  useState,
  useEffect
} from 'react';
import {
  Card,
  Grid,
  useMantineTheme,
  Table,
  Badge,

} from '@mantine/core'
import {
  Revenues,
  Services
} from '../components/_dashboard'
import {
  IconUsersGroup,
  IconUsers,
  IconHomeShield,
  IconX,
  IconCheck
} from '@tabler/icons-react';
import StatusCards from '../components/StatusCards'
import axios from 'axios';
interface Client {
  id: number;
  name: string;
  dni: string;
  subscription: string;
  role: {
    name: string;
    role_id: number;
  }; rfid: string | null;
}
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
  const [clients, setClients] = useState<Client[]>([]);

  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.examplegym.online/clients', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setClients(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);
  const rows = clients.map((client) => (
    <tr key={client.id}>
      <td>{client.name}</td>
      <td>{client.dni}</td>
      <td>35$</td>
      <td>
        {client.role.name === 'client' ? 'Cliente' :
          (client.role.name === 'staff' ? 'Personal' :
            (client.role.name === 'admin' ? 'Administrador' : 'Tipo de usuario desconocido'))}
      </td>
      <td style={{ textAlign: 'center' }}>
        {client.rfid !== null ? (
          <Badge color="green" pt={5}>
            <IconCheck size="0.875rem" />
          </Badge>
        ) : (
          <Badge color="red" pt={5}>
            <IconX size="0.875rem" />
          </Badge>
        )}
      </td>
    </tr>
  ));
  return (
    <>
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
          <Table fontSize="lg" mt={15} ta="center" striped highlightOnHover withBorder withColumnBorders>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>Nombre</th>
                <th style={{ textAlign: 'center' }}>Cedula</th>
                <th style={{ textAlign: 'center' }}>Suscripcion</th>
                <th style={{ textAlign: 'center' }}>Rol</th>
                <th style={{ textAlign: 'center' }}>Pulsera</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Card>
      </Card>
    </>
  )
}

export default Dashboard
