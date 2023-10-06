import {
  ActionIcon,
  Text,
  Modal,
  Button
} from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

type Props = {}

function DeleteModal({ }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  
  return (
    <>
      <ActionIcon onClick={open} color="red" variant="filled">
        <IconTrash />
      </ActionIcon>
      <Modal 
        opened={opened} 
        onClose={close} 
        centered 
        size='lg' 
        title={<Text fz={20} fw={700} c="red" italic>Eliminar usuario</Text>}>
        <Text>
          Este usuario y todo su historial sera eliminado del sistema, la accion es irreversible, desea continuar?
        </Text>
        <Button color="red" mt={20} fullWidth>Eliminar usuario</Button>
      </Modal>
    </>
  )
}

export default DeleteModal