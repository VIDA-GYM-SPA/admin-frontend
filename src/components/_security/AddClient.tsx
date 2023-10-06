import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Modal,
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Select,
  Text
} from '@mantine/core';
import { useForm } from '@mantine/form';

interface IAddClient {
  width?: string | number
  size: string
  label: string
}

function AddClient({ width, size, label }: IAddClient) {
  const allowedRoles = ['Admin', 'Personal', 'Cliente']

  const form = useForm({
    initialValues: {
      email: '',
      phone: '',
      nombre: '',
      apellido: '',
      role: 'Cliente',
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
      role: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        if (allowedRoles.includes(value)) {
          return null;
        } else {
          return 'Rol inválido';
        }
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

  const StepTwo = () => {
    return (
      <Text>Second Step</Text>
    )
  }

  const closeModal = () => {
    form.reset()
    setActive(0)
    close()
  }

  return (
    <>
      <Modal centered size="xl" opened={opened} onClose={() => closeModal()} withCloseButton={false} padding="30px">
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Primer paso" description="Datos personales">
            <form onSubmit={form.onSubmit(() => nextStep())}>
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
              <Group w="100%">
                <Select
                  data={[
                    {
                      label: "Admin",
                      value: "Admin"
                    },
                    {
                      label: "Personal",
                      value: "Personal"
                    },
                    {
                      label: "Cliente",
                      value: "Cliente"
                    }
                  ]}
                  label="Rol"
                  placeholder="Rol"
                  w="100%"
                  mt={15}
                  {...form.getInputProps('role')}
                />
              </Group>
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Devolverse</Button>
                <Button type="submit" >Siguiente</Button>
              </Group>
            </form>
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Verify email">
            <StepTwo />
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
        <Button w={width} onClick={open} size={size}>{label}</Button>
      </Group>
    </>
  )
}

export default AddClient