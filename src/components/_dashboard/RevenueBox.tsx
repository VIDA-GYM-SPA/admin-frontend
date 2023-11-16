import { useState } from 'react';
import { createStyles, Grid, Group, SegmentedControl, Card, RingProgress, Title } from '@mantine/core';
import CustomBarChart from '../CustomBarChart';
const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  }
}));

function RevenueBox() {
  const [controlSelected, setControlSelected] = useState('mensuales')
  const { classes } = useStyles()
  const data = [
    {
      month: "Enero",
      new_users: 12,
      month_invoices: '370.00$',
      year: 2023
    },
    {
      month: "Febrero",
      new_users: 20,
      month_invoices: '350.00$',
      year: 2023
    },
  ];

  return (
    <Card h='100%' withBorder shadow='sm' radius='md'>
      <Grid mb={-85}>
        <Grid.Col md={6} lg={3}>    <Title order={3}>Ingresos</Title></Grid.Col>
        <Grid.Col md={6} lg={3}></Grid.Col>
        <Grid.Col md={6} lg={3}></Grid.Col>
        <Grid.Col md={6} lg={3}>

          <Title order={3} c='#8884d8'>Nuevos usarios</Title>
          <Title order={3}  c='#82ca9d'>Ingresos mensuales</Title>

        </Grid.Col>
      </Grid>
      <CustomBarChart data={data} />

    </Card>
  )
}

export default RevenueBox
