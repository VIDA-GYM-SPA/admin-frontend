import {
  Card,
  Table,
  Group,
  Badge,
} from "@mantine/core"
import {
  IconUserExclamation,
  IconUserCheck,
  IconCheck,
  IconX
} from '@tabler/icons-react';
import EditModal from "../components/_security/EditModal";
import DeleteModal from "../components/_security/DeleteModal";

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
  ];

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
          <EditModal data={element}/>
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

        <Table highlightOnHover withBorder withColumnBorders ta="center">
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
      </Card>
    </>
  )
}

export default Security