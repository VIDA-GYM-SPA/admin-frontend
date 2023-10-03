import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput
} from '@mantine/core';
import { useForm } from '@mantine/form';

type Props = {}

function Addclient({ }: Props) {

  const form = useForm({
    initialValues: {
      email: '',
      phone: '',
      nombre: '',
      apellido: '',
      cedula: '',
      contrasena: '',
      verificarContrasena: '',
    },

    validate: {
      email: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        if (/^\S+@\S+$/.test(value)) {
          return null;
        } else {
          return 'Email inválido';
        }
      },
      phone: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        if (/^[0-9]+$/.test(value)) {
          return null;
        } else {
          return 'Número inválido, debe contener solo números';
        }
      },
      nombre: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        return null;
      },
      apellido: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        return null;
      },
      cedula: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        if (/^[0-9]+$/.test(value)) {
          return null;
        } else {
          return 'Cédula inválida, debe contener solo números';
        }
      },
      contrasena: (value) => {
        if (!value) {
          return 'La contraseña no puede estar vacía';
        }
        return null;
      },
      verificarContrasena: (value, values) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        if (value === values.contrasena) {
          return null;
        } else {
          return 'Las contraseñas no coinciden';
        }
      },
    },
  });

  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Modal centered size="xl" opened={opened} onClose={close} withCloseButton={false} >

        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Primer paso" description="Datos personales">

            <form onSubmit={form.onSubmit((values) => console.log(values))}>

              <Group grow>
                <TextInput
                  placeholder="Nombre"
                  label="Nombre"
                  radius="md"
                  {...form.getInputProps('nombre')}
                />
                <TextInput
                  placeholder="Apellido"
                  label="Apellido"
                  radius="md"
                  {...form.getInputProps('apellido')}
                />
                <TextInput
                  placeholder="Cedula"
                  label="Cedula"
                  radius="md"
                  {...form.getInputProps('cedula')}
                />
              </Group>
              <Group grow>

                <TextInput
                  placeholder="Correo"
                  label="Correo"
                  radius="md"
                  {...form.getInputProps('email')}

                />

                <TextInput
                  placeholder="Numero"
                  label="Numero"
                  radius="md"
                  type='number'
                  {...form.getInputProps('phone')}

                />
              </Group>
              <Group grow>

                <PasswordInput
                  placeholder="Contraseña"
                  label="Contraseña"
                  radius="md"
                  mt={15}
                  {...form.getInputProps('contrasena')}
                />

                <PasswordInput
                  placeholder="Confirmar Contraseña"
                  label="Confirmar Contraseña"
                  radius="md"
                  mt={15}
                  {...form.getInputProps('verificarContrasena')}

                />
              </Group>
              <Group position="center" mt="xl">

                <Button variant="default" onClick={prevStep}>Devolverse</Button>
                <Button type="submit" >Siguiente</Button>

              </Group>
            </form>

          </Stepper.Step>
          <Stepper.Step label="Second step" description="Verify email">
            Step 2 content: Verify email
          </Stepper.Step>

          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        {/* <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Devolverse</Button>
          <Button type="submit" onClick={nextStep}>Siguiente</Button>
        </Group> */}
      </Modal>

      <Group position="center">
        <Button w={400} onClick={open} size='md'>Agregar usuario</Button>
      </Group>
    </>
  )
}

export default Addclient