import {
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  // Anchor,
  Group,
  rem,
} from '@mantine/core';
import {
  IconCreditCard,
  IconBuildingBank,
  IconReceipt,
  IconReport,
  IconCashBanknote,
  IconCoin,
  IconFingerprint,
  IconUser,
  IconUsersGroup,
} from '@tabler/icons-react';

const mockdata = [
  { title: 'Cuentas', icon: IconCreditCard, color: 'violet' },
  { title: 'Espacios', icon: IconBuildingBank, color: 'indigo' },
  { title: 'Pagos', icon: IconCoin, color: 'red' },
  { title: 'Seguridad', icon: IconFingerprint, color: 'green' },
  { title: 'Mi perfil', icon: IconUser, color: 'cyan' },
  { title: 'Usuarios', icon: IconUsersGroup, color: 'blue' },
  { title: 'Recibos', icon: IconReceipt, color: 'teal' },
  { title: 'Reportes', icon: IconReport, color: 'pink' },
  { title: 'Tasa del dia', icon: IconCashBanknote, color: 'orange' },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: rem(90),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.blue[0],
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    border: '1px solid #eee',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
    },
  },
}));

export default function CardBox() {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size='2rem' radius='xl' />
      <Text size='xs' mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius='md' className={classes.card} w="100%" shadow='sm'>
      <Group position='apart'>
        <Text className={classes.title}>Servicios</Text>
        {/* <Anchor size='xs' color='dimmed' sx={{ lineHeight: 1 }}>
          + 21 other services
        </Anchor> */}
      </Group>
      <SimpleGrid cols={3} mt='md'>
        {items}
      </SimpleGrid>
    </Card>
  );
}
