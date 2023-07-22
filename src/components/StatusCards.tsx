import React from 'react'
import {
  Grid,
  Card,
  Group,
  Avatar,
  Text,
  Title
} from '@mantine/core'
import { ISizes } from '../interfaces';

interface IData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  children?: React.ReactNode
}

interface IStatusCards {
  grid: ISizes;
  data: IData[];
}

function StatusCards({grid, data}: IStatusCards) {
  return (
    <>
      <Grid mb={5} grow>
        {
          data.map((item) => (
            <Grid.Col {...grid} key={item.title}>
              <Card shadow='sm' padding='md' radius='sm' withBorder>
                <Group position='left'>
                  <Avatar radius='md' h='50px' w='50px' color={item.color}>
                    {item.icon}
                  </Avatar>
                  <Title order={3}>
                    <Text weight={600} fz={20}>
                      {item.title}
                    </Text>
                    <Text weight={300} fz={16}>
                      {item.subtitle}
                    </Text>
                  </Title>
                </Group>
                {item.children}
              </Card>
            </Grid.Col>
          ))
        }
      </Grid>
    </>
  )
}

export default StatusCards
