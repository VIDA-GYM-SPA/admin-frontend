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
  Text,
  Paper,
  Avatar,
  useMantineTheme,
  Title
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSend } from '@tabler/icons-react';

interface IAddClient {
  width?: string | number
  size: string
  label: string
}

function AddClient({ width, size, label }: IAddClient) {
  const allowedRoles = ['1', '2', '3']
  const existantGenders = ['Male', 'Female']
  const dniPrefixes = ['v-', 'e-', 'j-', 'g-']
  
  const theme = useMantineTheme()

  const form = useForm({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      lastname: '',
      role_id: '',
      gender: '',
      dni: '',
      password: '',
      password_confirmation: '',
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
      name: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        return null;
      },
      lastname: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        return null;
      },
      role_id: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        if (allowedRoles.includes(value)) {
          return null;
        } else {
          return 'Rol inválido';
        }
      },
      gender: (value) => {
        if (existantGenders.includes(value)) {
          return null
        } else {
          return 'Debe ingresar un género válido'
        }
      },
      dni: (value) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        } else {
          if (dniPrefixes.includes(value[0].toLowerCase() + value[1].toLowerCase())) {
            if (value.length >= 9 && value.length <= 10) {
              return null
            } else {
              return 'Debe ser de al menos 9 dígitos de longitud'
            }
          } else {
            return 'Debe ingresar la cédula con V/J/G/E seguido de guión (-)'
          }
        }
      },
      password: (value) => {
        if (!value) {
          return 'La contraseña no puede estar vacía';
        }
        return null;
      },
      password_confirmation: (value, values) => {
        if (!value) {
          return 'Este campo no puede estar vacío';
        }
        if (value === values.password) {
          return null;
        } else {
          return 'Las contraseñas no coinciden';
        }
      },
    },
  });

  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const parseRoles = (role: string) => {
    switch (role) {
      case '1': return('Admin');
      case '2': return('Empleado');
      case '3': return('Cliente');
      default: return('Indefinido');
    }
  }

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const Verifiers = ({ title, description }: { title: string; description: string }) => {
    return (
      <Group position='center' w="100%">
        <Text
          fz={20} 
          fw={600}
          ta="end"
          w="48.70%"
        >
          {title}
        </Text>
        <Text
          fz={20}
          fw={350}
          ta="start"
          w="48.70%"
        >
          {description}
        </Text>
      </Group>
    )
  }

  const StepTwo = () => {
    return (
      <>
        <Paper 
          w="100%"
          bg={theme.colors.gray[0]}
          py={20}
          px={20}
        >
          <Group 
            position='center'
            mb={10}
          >
            <Avatar
              w={150}
              h={150}
              color='light'
            >
              <Text 
                fz={40}
                fw={450}
              >
                {form.values.name[0].toUpperCase() + form.values.lastname[0].toUpperCase()}
              </Text>
            </Avatar>
          </Group>
          <Verifiers 
            title="Nombre:"
            description={form.values.name + ' ' + form.values.lastname}
          />
          <Verifiers 
            title="Correo:"
            description={form.values.email}
          />
          <Verifiers 
            title="Telefono:"
            description={form.values.phone}
          />
          <Verifiers 
            title="Género:"
            description={form.values.gender === 'Male' ? "Masculino 🧑🏻" : "Femenino 👧🏻"}
          />
          <Verifiers 
            title="Rol:"
            description={parseRoles(form.values.role_id)}
          />
          <Verifiers 
            title="Cédula:"
            description={form.values.dni}
          />
        </Paper>
          <Button 
            mt={20}
            color='teal'
            rightIcon={<IconSend />}
            size='lg'
            fullWidth
          >
            Crear usuario
          </Button> 
      </>
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
              <Group grow mb={5}>
                <TextInput
                  placeholder="Nombre"
                  label="Nombre"
                  radius="md"
                  {...form.getInputProps('name')}
                />
                <TextInput
                  placeholder="Apellido"
                  label="Apellido"
                  radius="md"
                  {...form.getInputProps('lastname')}
                />
                <TextInput
                  placeholder="Cédula"
                  label="Cédula"
                  radius="md"
                  {...form.getInputProps('dni')}
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
                  label="Número de telefono"
                  placeholder="Ingrese número de telefono"
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
                  {...form.getInputProps('password')}
                />
                <PasswordInput
                  placeholder="Confirmar Contraseña"
                  label="Confirmar Contraseña"
                  radius="md"
                  mt={15}
                  {...form.getInputProps('password_confirmation')}
                />
              </Group>
              <Group w="100%">
                <Select
                  w='48.89%'
                  data={[
                    {
                      label: "Admin",
                      value: '1'
                    },
                    {
                      label: "Personal",
                      value: '2'
                    },
                    {
                      label: "Cliente",
                      value: '3'
                    }
                  ]}
                  label="Rol"
                  placeholder="Seleccione un rol"
                  mt={15}
                  {...form.getInputProps('role_id')}
                />
                <Select
                  w='48.89%'
                  data={[
                    {
                      label: "Masculino",
                      value: 'Male'
                    },
                    {
                      label: "Femenino",
                      value: 'Female'
                    }
                  ]}
                  label="Género"
                  placeholder="Seleccione un género"
                  mt={15}
                  {...form.getInputProps('gender')}
                />
              </Group>
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Devolverse</Button>
                <Button type="submit">Siguiente</Button>
              </Group>
            </form>
          </Stepper.Step>
          <Stepper.Step label="Segundo paso" description="Verificar datos de usuario">
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
        
        <Button color="blue" radius="md" size="md" w={width} onClick={open} >
          {label}
          </Button>
      </Group>
    </>
  )
}

export default AddClient