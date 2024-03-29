import {
  Card,
  Text,
  createStyles,
  Group,
  ScrollArea,
  Button,
  Grid 
} from "@mantine/core"
import { IconCalendar, IconCreditCard } from "@tabler/icons-react";
import AvatarChangeModal from "./_account/AvatarChange.modal";
import EditPasswordModal from "./_account/EditPassword.modal";
import TokenModal from "./_account/Token.modal";
import PaymentsModal from "./_account/Payments.modal";
import capitalize from "../helpers/capitalize";

interface IProfileCard {
  data: {
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
    payments: {
      id: number;
      amount: number;
      payment_date: string;
      name: string;
      money: '$' | 'Bs.D';
    }[];
  }
}

const useStyles = createStyles((theme) => ({
  profileSide: {
    width: 400,
    height: '100%',
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    background: theme.colors.blue[1],
    boxShadow: theme.shadows.md,
  },
  buttonPayments: {
    borderRadius: '5px 0px 0px 5px'
  },
  buttonCalendar: {
    borderRadius: '0px 5px 5px 0px'
  }
}))

function ProfileCard({ data }: IProfileCard) {
  const { classes } = useStyles();

  const isAdmin = data.role.name === 'admin';

  return (
    <ScrollArea h="100%" type="scroll" w="100%">
      <Group w="100%" position="center" mt={30}>
        <Card withBorder padding="lg" radius="lg" shadow="xl" className={classes.profileSide}>
          <Group w="100%" position="center">
            <AvatarChangeModal user_id={1} name={data.name[0] + data.lastname[0]} />
          </Group>
          <Text ta="center" fw={550} fz={20}>
            {data.name} {data.lastname}
          </Text>
          <Text ta="center" fw={350} fz={18} mt={5}>
            {capitalize(data.role.name)}
          </Text>
          <Text ta="center" fw={350} fz={18} mt={-7} mb={35}>
            Plan {data.plan_subscribed.name} - {data.plan_subscribed.price}$
          </Text>

          <Group>
            <EditPasswordModal />
            <TokenModal token={data.uuid} />
          </Group>

          {!isAdmin && (
            <PaymentsModal
              w="100%"
              variant="filled"
              color="teal"
              size="sm"
              data={data.payments}
            >
              Ver pagos
            </PaymentsModal>
          )}
        </Card>
      </Group>
    </ScrollArea>
  );
}

export default ProfileCard