// RevenueBox Component
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createStyles, Grid, Card, Title, Text } from '@mantine/core';
import CustomBarChart from '../CustomBarChart';

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  }
}));

function RevenueBox() {
  const [data, setData] = useState({ invoices: [] });
  const { classes } = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.examplegym.online/dashboard/invoices');
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <Card h='100%' withBorder shadow='sm' radius='md'>
      <Grid mb={-80}>
        <Grid.Col md={6} lg={3}>
          <Text className={classes.title}>Ingresos</Text>
        </Grid.Col>
        <Grid.Col md={6} lg={3}></Grid.Col>
        <Grid.Col md={6} lg={3}></Grid.Col>
        <Grid.Col md={6} lg={3}>
          <Title order={4} c='#8884d8'>Nuevos usuarios</Title>
          <Title order={4}  c='#82ca9d'>Ingresos mensuales</Title>
        </Grid.Col>
      </Grid>
      <CustomBarChart invoices={data.invoices} />

    </Card>
  );
}

export default RevenueBox;
