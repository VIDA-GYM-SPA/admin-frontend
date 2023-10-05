import { useDisclosure } from '@mantine/hooks';
import { Modal, createStyles, Table, Group, Button } from '@mantine/core';
import { IconCreditCard } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  profileSide: {
    width: 400,
    height: '100%',
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    background: theme.colors.blue[0],
    boxShadow: theme.shadows.md,
  },
  buttonPayments: {
    borderRadius: '5px 0px 0px 5px'
  },
  buttonCalendar: {
    borderRadius: '0px 5px 5px 0px'
  }
}))

function PaymentsModal() {
  const [opened, { open, close }] = useDisclosure(false);

  const { classes } = useStyles()

  const elements = [
    { ID: 6, Monto: 12.011, Nombre: 'Diego U', Fecha: '15/5/2023' },
    { ID: 7, Monto: 14.007, Nombre: 'Evanan S', Fecha: '15/5/2023' },
  ];
  const rows = elements.map((element) => (
    <tr key={element.ID}>
      <td>{element.ID}</td>
      <td>{element.Monto}</td>
      <td>{element.Fecha}</td>
      <td>{element.Nombre}</td>
      
    </tr>
  ));

  return (
    <>
      <Modal opened={opened} centered onClose={close} withCloseButton={false}>
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th>ID</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Modal>

      <Group position="center">
        <Button
          w="300px"
          variant="filled"
          color="teal"
          onClick={open}
          className={classes.buttonPayments}
          leftIcon={
            <IconCreditCard />
          }
          size="sm"
        >
          Ver pagos
        </Button>
      </Group>
    </>
  )
}

export default PaymentsModal