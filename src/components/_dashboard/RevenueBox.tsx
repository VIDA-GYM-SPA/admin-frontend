import { useState } from 'react';
import { createStyles, Text, Group, SegmentedControl, Card, RingProgress, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  }
}));

function RevenueBox() {
  const [controlSelected, setControlSelected] = useState('mensuales')
  const { classes } = useStyles()
  return (
    <Card h='100%' withBorder shadow='sm' radius='md'>
      <Group position='apart' mt={-10}>
      <Text className={classes.title}>
        Ingresos
      </Text>
        <SegmentedControl
          size='md'
          mr={-10}
          onChange={(e: string) => {
            if (e === 'month') {
              setControlSelected('mensuales')
            } else if (e === 'week') {
              setControlSelected('semanales')
            } else {
              setControlSelected('diarios')
            }
          }}
          data={[
            { label: 'Mensual', value: 'month' },
            { label: 'Semanal', value: 'week' },
            { label: 'Diarias', value: 'daily' }
          ]}
        />
      </Group>
      <Group>
        <RingProgress
          size={300}
          thickness={20}
          roundCaps
          mt={10}
          label={
            <Text size='sm' align='center'>
              Ingresos { controlSelected }
            </Text>
          }
          sections={[
            { value: 40, color: 'cyan', tooltip: '34' },
            { value: 15, color: 'orange', tooltip: '12' },
            { value: 15, color: 'grape', tooltip: '16' },
          ]}
        />
        <Title order={2} className={classes.title}>
          
        </Title>
      </Group>
    </Card>
  )
}

export default RevenueBox
