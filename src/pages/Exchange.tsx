import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Text, createStyles, Title, Group, Breadcrumbs, Anchor } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

interface ICurrentExchange {
  id: number;
  dolar: string;
}

const useStyles = createStyles((theme) => ({
  sectionCard: {
    width: 'calc(100% + 0.5em)',
    height: 'calc(100% + 1em)',
    marginTop: '-10px',
    boxShadow: theme.shadows.md,
    padding: 0
  }
}))

function Exchange() {
  const [currentExchange, setCurrentExchange] = useState<ICurrentExchange | null>(null)

  useEffect(() => {
    axios.get('https://api.examplegym.online/exchanges', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      setCurrentExchange(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const { classes } = useStyles();

  const plink = [
    { title: 'Dashboard', href: '/' },
    { title: 'Tasa de cambio', href: '/exchanges' },
  ].map((plink, index) => (
    <Anchor href={plink.href} key={index}>
      {plink.title}
    </Anchor>
  ));

  return (
      <Card 
        className={classes.sectionCard + ' exchange'}
        id='exchange'
        component="section"
        withBorder
      >
        <Group position="apart">
          <Title italic order={2}>
            Tasa de cambio
          </Title>
          <Breadcrumbs separator=">">{plink}</Breadcrumbs>
        </Group>
        <Title order={3} fw={200} mb={15}>
          Manejo de la tasa actual para todo el sistema
        </Title>
        <Group position='center'>
          <Card withBorder w={800} mt='10%' py={20} mx='25vw'>
            <Text 
              ta="center"
              fz={30}
              fw={600}
              mb={10}
            >
              Cambio de hoy:
            </Text>
            <Text 
              ta="center"
              fz={70}
              fw={600}
              mb={10}
            >
              {currentExchange !== null ? <Text>{currentExchange?.dolar}BsD{<IconArrowRight style={{ paddingTop: '35px' }} size={80} />} 1 USD</Text> : null}
            </Text>
          </Card>
        </Group>
      </Card>
  )
}

export default Exchange