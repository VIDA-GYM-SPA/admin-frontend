import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Text, createStyles, Title, Group, Breadcrumbs, Anchor } from '@mantine/core';

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

  useEffect(() => {
    axios.get('https://api.examplegym.online/payments', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const { classes } = useStyles();

  const plink = [
    { title: 'Dashboard', href: '/' },
    { title: 'Pagos', href: '/payments' },
  ].map((plink, index) => (
    <Anchor href={plink.href} key={index}>
      {plink.title}
    </Anchor>
  ));

  return (
      <Card 
        className={classes.sectionCard + ' payments'}
        id='payments'
        component="section"
        withBorder
      >
        <Group position="apart">
          <Title italic order={2}>
            Pagos realizados por los usuarios
          </Title>
          <Breadcrumbs separator=">">{plink}</Breadcrumbs>
        </Group>
        <Title order={3} fw={200} mb={15}>
          Manejo de los pagos realizados por los usuarios.
        </Title>
        <Group position='center'>
          
        </Group>
      </Card>
  )
}

export default Exchange