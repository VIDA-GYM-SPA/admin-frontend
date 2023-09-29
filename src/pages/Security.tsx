import { useState } from 'react';
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


function Security() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 17;

  const elements = [
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Diego Urrutia' ,cedula:29543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Activa', nombre: 'Evanan Semprun',cedula:29543546 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Maria Rodriguez',cedula:295434534 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Carlos Gomez',cedula:28543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Laura Hernandez',cedula:19543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Juan Perez',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Ana Martinez',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Pedro Sanchez' ,cedula:29543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Activa', nombre: 'Isabel Torres',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Luis Ramirez' ,cedula:29543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Carlos Gomez' ,cedula:29543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Laura Hernandez',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Juan Perez',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Ana Martinez',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Pedro Sanchez',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Activa', nombre: 'Isabel Torres' ,cedula:29543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Luis Ramirez' ,cedula:20543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Ana Martinez',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Pedro Sanchez',cedula:29543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Activa', nombre: 'Isabel Torres' ,cedula:28543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Luis Ramirez' ,cedula:29543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Desactivada', nombre: 'Ana Martinez' ,cedula:29543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Desactivada', nombre: 'Pedro Sanchez',cedula:24543321 },
    { suscripcion: 35, rol: "Cliente", pulsera: 'Desactivada', Huella: 'Activa', nombre: 'Isabel Torres' ,cedula:29543321},
    { suscripcion: 35, rol: "Cliente", pulsera: 'Activa', Huella: 'Activa', nombre: 'Luis Ramirez' ,cedula:29543321},
  ];
  const filteredElements = elements.filter((element) =>
    element.nombre.toLowerCase().includes(searchValue.toLowerCase())
  );

  const totalPages = Math.ceil(filteredElements.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = filteredElements.slice(startIndex, endIndex);


  const plink = [
    { title: 'Dashboard', href: '/' },
    { title: 'Seguridad', href: '#' },
  ].map((plink, index) => (
    <Anchor href={plink.href} key={index}>
      {plink.title}
    </Anchor>
  ));


  const rows = currentRows.map((element, index) => (
    <tr key={index}>
      <td>{element.nombre}</td>
      <td>{element.cedula}</td>
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
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
              <ActionIcon px={3} h={42} color="orange" variant="filled" style={{ borderRadius: '0 5px 5px 0' }}>
                <IconRepeat />
              </ActionIcon>

            </Group>

          </Group>
          <Addclient />

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
              <th style={{ textAlign: 'center' }}>Huella</th>
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
