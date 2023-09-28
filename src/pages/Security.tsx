import {
  Card,
  Table,
  Badge,
  Group,
  Title,
  Breadcrumbs,
  Anchor,
  Input,
  Button,
  ActionIcon,
  Pagination
} from "@mantine/core"
import {
  IconCheck,
  IconX,
  IconSearch,
  IconRepeat
} from '@tabler/icons-react';
import EditModal from "../components/_security/EditModal";
import DeleteModal from "../components/_security/DeleteModal";
import Addclient from "../components/_security/Addclient";

interface IElement {
  suscripcion: number;
  rol: string;
  pulsera: string;
  Huella: string;
  nombre: string;
}

function Security() {
  const elements = [
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Diego Urrutia' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Activa', nombre: 'Evanan Semprun' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Maria Rodriguez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Carlos Gomez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Laura Hernandez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Juan Perez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Ana Martinez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Pedro Sanchez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Activa', nombre: 'Isabel Torres' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Luis Ramirez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Carlos Gomez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Laura Hernandez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Juan Perez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Ana Martinez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Pedro Sanchez' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Activa', nombre: 'Isabel Torres' },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Luis Ramirez' },
  ];
  const plink = [
    { title: 'Dashboard', href: '/' },
    { title: 'Seguridad', href: '#' },
  ].map((plink, index) => (
    <Anchor href={plink.href} key={index}>
      {plink.title}
    </Anchor>
  ));

  const rows = elements.map((element: IElement) => (
    <tr>
      <td>{element.nombre}</td>
      <td>{element.suscripcion}$</td>
      <td>{element.rol}</td>
      <td style={{ textAlign: "center" }}>
        {element.pulsera === 'Activa' ? (
          <Badge color="green" pt={5}>
            <IconCheck size="0.875rem" />
          </Badge>
        ) : (
          <Badge color="red" pt={5}>
            <IconX size="0.875rem" />
          </Badge>
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        {element.Huella === 'Activa' ? (
          <Badge color="green" pt={5}>
            <IconCheck size="0.875rem" />
          </Badge>
        ) : (
          <Badge color="red" pt={5}>
            <IconX size="0.875rem" />
          </Badge>
        )}
      </td>

      <td>
        <Group position="center">
          <EditModal data={element} />
          <DeleteModal />
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      <Card
        w='100%'
        h='100%'
        shadow="sm"
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

        <Group w={955}>
          <Input
            maw={500}
            mt={10}
            size="md"
            icon={<IconSearch />}
            placeholder="Nombre o Cedula"
          />

          <Group spacing={0} mt={10}>
            <Button color="blue" variant="filled" size="md" style={{ borderRadius: '5px 0 0 5px'}}>Filtrar</Button>
            <ActionIcon px={3} h={42} color="orange" variant="filled" style={{ borderRadius: '0 5px 5px 0'}}>
              <IconRepeat />
            </ActionIcon>

          </Group>

        </Group>
<Addclient/>

</Group>

        <Pagination mt={15} total={10} size="md"/>
        <Table mt={15} highlightOnHover withBorder withColumnBorders ta="center">
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Nombre</th>
              <th style={{ textAlign: 'center' }}>Suscripcion</th>
              <th style={{ textAlign: 'center' }}>Rol</th>
              <th style={{ textAlign: 'center' }}>Pulsera</th>
              <th style={{ textAlign: 'center' }}>Huella</th>
              <th style={{ textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>

        <Pagination mt={15} total={10} size="md"/>


      </Card>
    </>
  )
}

export default Security
