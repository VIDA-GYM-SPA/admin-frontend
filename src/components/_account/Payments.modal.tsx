import { Modal, Table, Button, Text, Paper, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';

interface IPaymentsModal {
  w?: string | number
  variant?: 'filled' | 'light' | 'outline' | 'transparent' | 'white' | 'subtle' | 'default' | 'gradient';
  color?: string
  className?: string
  leftIcon?: React.ReactNode
  size?: string
  children?: React.ReactNode
  data: {
    id: number;
    amount: number;
    payment_date: string;
    name: string;
    money: '$' | 'Bs.D';
  }[]
}

function PaymentsModal({ w, variant, color, className, leftIcon, size, children, data }: IPaymentsModal) {
  const [opened, { open, close }] = useDisclosure(false);

  const rows = data.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.amount} {element.money}</td>
      <td>{element.payment_date}</td>

    </tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        size="lg"
        centered
        onClose={close}
        title={<Text fz={20} fw={700} italic>Lista de pagos</Text>}
        withCloseButton
      >
        <ScrollArea h={300}>
          <Table ta='center' striped highlightOnHover withBorder withColumnBorders>
            <thead>
              <tr>
                <th><Text ta="center">ID</Text></th>
                <th><Text ta="center">Nombre</Text></th>
                <th><Text ta="center">Monto</Text></th>
                <th><Text ta="center">Fecha</Text></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ScrollArea>
        {
          data.length === 0 && (
            <Paper pt={100} pb={120}>
              <Text ta='center' fw={600} fz={20}>
                No tiene pagos disponibles
              </Text>
            </Paper>
          )
        }
        <Button fullWidth leftIcon={<IconPlus />} mt={20}>
          Agregar nuevo pago 
        </Button>
      </Modal>
      <Button
        w={w}
        variant={variant}
        color={color}
        onClick={open}
        className={className}
        leftIcon={leftIcon}
        size={size}
      >
        {children}
      </Button>
    </>
  )
}

export default PaymentsModal