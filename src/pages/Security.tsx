import { 
  useState, 
  useEffect 
} from 'react';
import {
  Card,
  Table,
  Badge,
  Group,
  Title,
  Breadcrumbs,
  Anchor,
  Input,
  ActionIcon,
  Pagination,
  createStyles
} from "@mantine/core"
import {
  IconCheck,
  IconX,
  IconSearch,
  IconRepeat
} from '@tabler/icons-react';
import EditModal from "../components/_security/EditModal";
import DeleteModal from "../components/_security/DeleteModal";
import AddClient from "../components/_security/AddClient";
import ActionCable from 'actioncable';
import { IUser } from '../interfaces';

function Security() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [elements, setElements] = useState<IUser[]>([
    {
      name: "Alejandro",
      lastname: "Semprun",
      email: "alejandrocastro@gmail.com",
      dni: "V-31012111",
      rfid: "78cd57b1e0232b99b4e431e17837e8ea33d98616421490258597ffdad4a31232d654e0539b49f55dcd6a0cf06cf554e2",
      fingerprint: null,
      role: {
        name: 'Client'
      },
      role_id: 3,
  }
  ])

  const useStyles = createStyles((theme) => ({
    sectionCard: {
      width: 'calc(100% + 0.5em)',
      height: 'calc(100% + 1em)',
      marginTop: '-10px',
      boxShadow: theme.shadows.md,
      padding: 0
    },
  }))

  useEffect(() => {
    waitCable()
  }, [])

  const rowsPerPage = 12;

  const waitCable = () => {
    let actioncable = ActionCable.createConsumer('wss://api.examplegym.online/cable');
    actioncable.subscriptions.create({ channel: 'ClientsChannel' }, {
      connected: () => {
        console.log('Connected to internal channel.');
      },
      disconnected: () => {
        console.log('Disconnected from internal channel.');
      },
      received: (data: IUser[]) => {
        console.log(data)
        setElements(data)
      },
      rfid_status: (data: IUser[]) => {
        console.log(data)
      }
    })
  }

  const filteredElements = elements.filter((element) =>
    element.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const totalPages = Math.ceil(filteredElements.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = filteredElements.slice(startIndex, endIndex);

  const plink = [
    { title: 'Dashboard', href: '/' },
    { title: 'Seguridad', href: '/security' },
  ].map((plink, index) => (
    <Anchor href={plink.href} key={index}>
      {plink.title}
    </Anchor>
  ));

  const rows = currentRows.map((element, index) => (
    <tr key={index}>
      <td>{element.name + ' ' + element.lastname}</td>
      <td>{element.dni}</td>
      <td>35$</td>
      <td>Cliente</td>
      <td style={{ textAlign: "center" }}>
        {element.rfid !== null ? (
          <Badge color="green" pt={5}>
            <IconCheck size="0.875rem" />
          </Badge>
        ) : (
          <Badge color="red" pt={5}>
            <IconX size="0.875rem" />
          </Badge>
        )}
      </td>
      {/* <td style={{ textAlign: "center" }}>
        {element.Huella === 'Activa' ? (
          <Badge color="green" pt={5}>
            <IconCheck size="0.875rem" />
          </Badge>
        ) : (
          <Badge color="red" pt={5}>
            <IconX size="0.875rem" />
          </Badge>
        )}
      </td> */}

      <td>
        <Group position="center">
          <EditModal data={element} />
          <DeleteModal />
        </Group>
      </td>
    </tr>
  ));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { classes } = useStyles()

  return (
    <>
      <Card 
        className={classes.sectionCard + ' security'}
        id='my-account'
        component="section"
        withBorder
      >
        <Group position="apart">
          <Title italic order={2}>
            Seguridad
          </Title>
          <Breadcrumbs separator=">">{plink}</Breadcrumbs>
        </Group>
        <Title order={3} fw={200} >
          Seguridad de usuarios en el gimnasio y planes
        </Title>
        <Group position="apart">
          <Group w={955} spacing={0} >
            <Input
              maw={500}
              mt={10}
              size="md"
              icon={<IconSearch />}
              placeholder="Nombre"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />


            <Group spacing={0} mt={10}>
              {/* <Button color="blue" variant="filled" size="md" style={{ borderRadius: '5px 0 0 5px' }}>Filtrar</Button> */}
              <ActionIcon 
                color="orange" 
                variant="filled" 
                px={3} 
                h={42} 
                style={{ borderRadius: '0 5px 5px 0' }}
                onClick={() => setSearchValue('')}
              >
                <IconRepeat />
              </ActionIcon>

            </Group>

          </Group>
          <AddClient 
            width={300}
            size="md"
            label="Agregar usuario"
          />

        </Group>

        <Pagination
          mt={15}
          total={totalPages}
          value={currentPage}
          size="md"
          onChange={handlePageChange}
        />
        <Table mt={15} highlightOnHover withBorder withColumnBorders ta="center">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Nombre</th>
              <th style={{ textAlign: 'center' }}>Cedula</th>
              <th style={{ textAlign: 'center' }}>Suscripcion</th>
              <th style={{ textAlign: 'center' }}>Rol</th>
              <th style={{ textAlign: 'center' }}>Pulsera</th>
              <th style={{ textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>

        <Pagination
          mt={15}
          total={totalPages}
          value={currentPage}
          size="md"
          onChange={handlePageChange}
        />


      </Card>
    </>
  )
}

export default Security
