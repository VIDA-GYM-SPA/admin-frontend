import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  Button,
  Group,
  PasswordInput,
} from '@mantine/core';
import { IconEdit } from "@tabler/icons-react";
import { useForm } from '@mantine/form';

function EditPasswordModal() {

  const [opened, { open, close }] = useDisclosure(false);

  const password = 4567;

  const form = useForm({
    initialValues: {
      oldcontrasena: '',
      newcontrasena: '',
      confirmnewcontrasena: '',
    },
    validate: {
      oldcontrasena: (value) => {
        if (!value) {
          return 'No puede estar vacío';
        } else if (value !== password.toString()) {
          return 'No coincide con la contraseña original';
        }
        return null;
      },
      newcontrasena: (value, values) => {
        if (!value) {
          return 'No puede estar vacío';
        } else if (value === values.oldcontrasena) {
          return 'No puede ser igual a la contraseña anterior';
        }
        return null;
      },
      confirmnewcontrasena: (value, values) => {
        if (!value) {
          return 'No puede estar vacío';
        } else if (value !== values.newcontrasena) {
          return 'Debe coincidir con la nueva contraseña';
        }
        return null;
      },
    },
  });
  return (
    <>

      <Modal opened={opened} onClose={close} withCloseButton={false} centered>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>

          <PasswordInput
            placeholder="Contraseña Antigua"
            label="Contraseña Antigua"
            {...form.getInputProps('oldcontrasena')}
          />

          <PasswordInput
            placeholder="Nueva Contraseña"
            label="Nueva Contraseña"
            {...form.getInputProps('newcontrasena')}
          />

          <PasswordInput
            placeholder="Confirmar Nueva Contraseña"
            label="Confirmar Nueva Contraseña"
            {...form.getInputProps('confirmnewcontrasena')}
          />

          <Group position="center" mt="md">
            <Button type="submit">Registrar</Button>
          </Group>
        </form>
      </Modal>

      <Group position="center">
        <Button
          onClick={open}

          variant="filled"
          color="blue"
          leftIcon={
            <IconEdit />
          }
          size="sm"
        >
          Editar contraseña
        </Button>
      </Group>

    </>
  )
}

export default EditPasswordModal