import { 
  Card,
  createStyles, 
  Group, 
  Anchor, 
  Title, 
  Text,
  Breadcrumbs,
  Loader,
  Paper,
} from "@mantine/core"
import { useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import { useFetch } from "../hooks/useFetch";
import { IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { Timer } from "../components/Timer";

interface IProfile {
  id: number;
  uuid: string;
  name: string;
  lastname: string;
  role: {
    name: string;
  };
  plan_subscribed: {
    id: number;
    name: string;
    price: number;
    money: string;
  };
  payments: []
}

const URL = "https://api.examplegym.online/my-profile"

const useStyles = createStyles((theme) => ({
  sectionCard: {
    width: 'calc(100% + 0.5em)',
    height: 'calc(100% + 1em)',
    marginTop: '-10px',
    boxShadow: theme.shadows.md,
    padding: 0
  }
}))

function MyAccount() {
  const { classes } = useStyles()
  const loading = false;
  const { data, error } = useFetch<IProfile>(URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  const plink = [
    { title: 'Dashboard', href: '/' },
    { title: 'Mi cuenta', href: '/my-account' },
  ].map((plink, index) => (
    <Anchor href={plink.href} key={index}>
      {plink.title}
    </Anchor>
  ));

  const ErrorWhenFetched = () => {
    return (
      <Paper
        py={100}
        px={20}
        mt={20}
        withBorder
        mb={20}
      >
        <Text 
          ta="center" 
          color="red" 
          fz={15}
          fw={600} 
          italic
        >
          ¡Oops, ha ocurrido un problema al cargar el perfil!
        </Text>
        <Timer time={5} />
      </Paper>
    )
  }

  useEffect(() => {
    if (undefined !== error) {
      notifications.show({
        id: 'hello-there',
        withCloseButton: false,
        onClose: () => console.log('unmounted'),
        onOpen: () => console.log('mounted'),
        autoClose: 5000,
        title: <Text color="#fff" fz={15} fw={600} italic>¡Oops, ha ocurrido un problema!</Text>,
        message: <Text color="#fff" fz={12} fw={450}>Ha ocurrido un problema al buscar el perfil</Text>,
        color: 'red',
        icon: <IconX />,
        className: 'my-notification-class',
        style: { backgroundColor: 'red' },
        sx: { backgroundColor: 'red' },
        loading: false,
      });
      setTimeout(() => {

      }, 5000)
    }
  }, [error])

  return (
    <Card 
      className={classes.sectionCard + ' my-account'}
      id='my-account'
      component="section"
      withBorder
    >
      <Group position="apart">
        <Title italic order={2}>
          Mi cuenta
        </Title>
        <Breadcrumbs separator=">">{plink}</Breadcrumbs>
      </Group>
      <Title order={3} fw={200} mb={15}>
        Manejo de cuenta y configuraciones del perfil
      </Title>
      {
        loading ? (
          <Loader />
        ) : (
          data !== undefined ? (
            <ProfileCard data={data} />
          ) : (
            <ErrorWhenFetched />
          )
        )
      }
    </Card>
  )
}

export default MyAccount