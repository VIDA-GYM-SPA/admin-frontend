import {
  ActionIcon,
  Avatar,
  Box,
  Group,
  Card,
  Modal,
  Text,
  Divider,
  Badge,
  Indicator
} from "@mantine/core"
import { useForm } from "@mantine/form";
import { Calendar } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import {
  IconCheck,
  IconPencil,
  IconX,
} from '@tabler/icons-react';
import { useFetch } from "../../hooks/useFetch";

interface IEditModal {
  data: {
    suscripcion: number;
    rol: string;
    pulsera: string;
    Huella: string;
    nombre: string;
  }
}

function EditModal({data}: IEditModal) {
  const [opened, { open, close }] = useDisclosure(false)
  const form = useForm({
    initialValues: {
      rfid: null,
      fingerprint: null
    }
  })
  // const { error, data } = useFetch(
  //   `http://localhost:3000/api/v1/users?id=${id}`,
  //   {
  //     headers: {
  //       ContentType: 'application/json',
  //       Authorization: `Bearer KAMEHAMEHA`
  //     }
  //   }
  // )

  const parsedName = (str: string) => {
    return str[0] + str.split(' ')[1][0]
  }
  
  return (
    <>
      <Modal 
        opened={opened} 
        onClose={close} 
        centered 
        size='lg' 
        title={<Text fz={20} fw={700} italic>Editar usuario</Text>}
      >
        <Box mah={500}>
          <Group w="100%" position="center">
            <Avatar radius="100%" size={200} color="light">
              {parsedName(data.nombre)}
            </Avatar>
          </Group>
          <Group w="100%" position="apart" mt={20}>
            <Card withBorder w="48%">
              <Text ta="center" fw={700} mb={20}>Plan Activo</Text>
              <Text fw={100} italic>Plan Platinum</Text>
              <Divider variant="dotted" my={10}/>
              <Group w="100%" position="apart" mt={5}>
                <Text italic>Precio:</Text>
                <Text fw={700}>35$</Text>
              </Group>
              <Group w="100%" position="apart" mt={5}>
                <Text italic>Fecha de ingreso:</Text>
                <Text fw={700}>04/06/2023</Text>
              </Group>
            </Card>
            <Card withBorder w="48%" fw={700}>
              <Text ta="center">Autenticacion</Text>
              <Group w="100%" mt={20}>
                <Card withBorder w="46.5%" bg={data.Huella == 'Activa' ? 'rgba(0, 255, 0, 0.155)' : 'rgba(231, 0, 0, 0.2)'}>
                  <Text ta="center" fw={700} mb={20} mx={10}>
                    Huella
                  </Text>
                  <Group w="100%" position="center" mt={-10} mb={10}>
                    <Badge bg={data.Huella == 'Activa' ? 'teal' : 'red'} c="#fff" pt={5}>
                    { data.Huella == 'Activa' ? <IconCheck/> : <IconX />}
                    </Badge>
                  </Group>
                </Card>
                <Card withBorder w="46.5%" bg={data.pulsera == 'Activa' ? 'rgba(0, 255, 0, 0.155)' : 'rgba(231, 0, 0, 0.2)'}>
                  <Text ta="center" fw={700} mb={20} mx={10}>
                    Pulsera
                  </Text>
                  <Group w="100%" position="center" mt={-10} mb={10}>
                    <Badge bg={data.pulsera == 'Activa' ? 'teal' : 'red'} c="#fff" pt={5}>
                      { data.pulsera == 'Activa' ? <IconCheck/> : <IconX />}
                    </Badge>
                  </Group>
                </Card>
              </Group>
            </Card>
          </Group>
          <Text fw={700} ta="center" fz={20} mt={20}>
            Dias de ingreso en el gimnasio
          </Text>
          <Group position="center" mt={30} pb={50}>
            <Card withBorder>
              <Calendar
                static
                renderDay={(date) => {
                  const day = date.getDate();
                  const dayOfWeek = date.getDay(); 

                  const probabilityOfMissing = 0.33;

                  const shouldMissDay = Math.random() < probabilityOfMissing;

                  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                  const shouldDisableIndicator = isWeekend || shouldMissDay;

                  return (
                    <Indicator size={6} color="teal" offset={-2} disabled={shouldDisableIndicator}>
                      <div>{day}</div>
                    </Indicator>
                  );
                }}
              />
          </Card>
          </Group>
        </Box>
      </Modal>
      <ActionIcon 
        onClick={open} 
        color="teal" 
        variant="filled"
      >
        <IconPencil />
      </ActionIcon>
    </>
  )
}

export default EditModal