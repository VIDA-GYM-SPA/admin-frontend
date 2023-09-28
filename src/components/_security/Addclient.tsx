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
type Props = {}

function Addclient({ }: Props) {

  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Modal size="xl" opened={opened} onClose={close} withCloseButton={false} >

        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Primer paso" description="Datos personales">

            <Group position='center'>
              <TextInput
                placeholder="Nombre"
                label="Nombre"
                radius="md"
              />
              <TextInput
                placeholder="Apellido"
                label="Apellido"
                radius="md"
                mt={15}
              />
            </Group>

            <TextInput
              placeholder="Correo"
              label="Correo"
              radius="md"
              mt={15}
              ml={155}
              mr={155}
            />

            <TextInput
              placeholder="Numero"
              label="Numero"
              radius="md"
              mt={15}
              ml={155}
              mr={155}
            />
            <PasswordInput
              placeholder="Contraseña"
              label="Contraseña"
              radius="md"
              mt={15}
              ml={155}
              mr={155}
            />

            <PasswordInput
              placeholder="Confirmar Contraseña"
              label="Confirmar Contraseña"
              radius="md"
              mt={15}
              ml={155}
              mr={155}
            />

          </Stepper.Step>
          <Stepper.Step label="Second step" description="Verify email">
            Step 2 content: Verify email
          </Stepper.Step>

          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Devolverse</Button>
          <Button onClick={nextStep}>Siguiente</Button>
        </Group>
      </Modal>

      <Group position="center">
        <Button w={400} onClick={open} size='md'>Agregar usuario</Button>
      </Group>
    </>
  )
}

export default Addclient