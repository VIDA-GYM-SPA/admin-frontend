import { useDisclosure } from '@mantine/hooks';
import { Modal, Table, Button, Text } from '@mantine/core';

interface IPaymentsModal {
  w?: string | number
  variant?: 'filled' | 'light' | 'outline' | 'transparent' | 'white' | 'subtle' | 'default' | 'gradient';
  color?: string
  className?: string
  leftIcon?: React.ReactNode
  size?: string
  children?: React.ReactNode
}

function PaymentsModal({ w, variant, color, className, leftIcon, size, children }: IPaymentsModal) {
  const [opened, { open, close }] = useDisclosure(false);

  const elements = [
    { ID: 6, Monto: 12.011, Nombre: 'Diego Urrutia', Fecha: '15/5/2023' },
    { ID: 7, Monto: 14.007, Nombre: 'Diego Urrutia', Fecha: '15/5/2023' },
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
      <Modal
        opened={opened} 
        size="lg"
        centered 
        onClose={close} 
        title={<Text fz={20} fw={700} italic>Lista de pagos</Text>}
        withCloseButton
      >
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