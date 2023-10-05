import {
  Card,
  Avatar,
  Text,
  createStyles,
  Group,
  ScrollArea,
  Button
} from "@mantine/core"
import { IconCalendar, IconCreditCard, IconEdit, IconEye } from "@tabler/icons-react";
import AvatarChangeModal from "./_account/AvatarChange.modal";

const useStyles = createStyles((theme) => ({
  profileSide: {
    width: 400,
    height: '100%',
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    background: theme.colors.blue[0],
    boxShadow: theme.shadows.md,
  },
  buttonPayments: {
    borderRadius: '5px 0px 0px 5px'
  },
  buttonCalendar: {
    borderRadius: '0px 5px 5px 0px'
  }
}))

function ProfileCard() {

  const { classes } = useStyles()

  return (
    <ScrollArea h="100%" type="scroll" w="100%">
      <Group w="100%" position="center" mt={30}>
        <Card withBorder className={classes.profileSide}>
          <Group w="100%" position="center">
            <AvatarChangeModal user_id={1}/>
          </Group>
          <Text
            ta="center"
            fw={550}
            fz={20}
          >
            Diego Urrutia
          </Text>
          <Text
            ta="center"
            fw={350}
            fz={18}
            mt={5}
          >
            Cliente
          </Text>
          <Text
            ta="center"
            fw={350}
            fz={18}
            mt={-7}
            mb={35}
          >
            Plan Platinum - 35$
          </Text>
          <Group
            w="100%"
            mt={15}
          >
            <Button
              w='47.5%'
              variant="filled"
              color="blue"
              leftIcon={
                <IconEdit />
              }
              size="sm"
            >
              Editar contraseña
            </Button>
            <Button
              w='47.5%'
              variant="filled"
              color="red"
              leftIcon={
                <IconEye />
              }
              size="sm"
            >
              Ver token
            </Button>
          </Group>
          <Group
            w="100%"
            mt={15}
            spacing={0}
          >
            <Button
              w="83%"
              variant="filled"
              color="teal"
              className={classes.buttonPayments}
              leftIcon={
                <IconCreditCard />
              }
              size="sm"
            >
              Ver pagos
            </Button>
            <Button
              w="17%"
              variant="filled"
              color="blue"
              className={classes.buttonCalendar}
              size="sm"
            >
              <IconCalendar />
            </Button>
          </Group>
        </Card>
      </Group>
    </ScrollArea>
  )
}

export default ProfileCard