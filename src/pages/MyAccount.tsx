import { 
  Card,
  createStyles, 
  Group, 
  Anchor, 
  Title, 
  Breadcrumbs,
} from "@mantine/core"
import ProfileCard from "../components/ProfileCard";

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

  const plink = [
    { title: 'Dashboard', href: '/' },
    { title: 'Mi cuenta', href: '/my-account' },
  ].map((plink, index) => (
    <Anchor href={plink.href} key={index}>
      {plink.title}
    </Anchor>
  ));

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
      {/* Container */}
      <ProfileCard />
    </Card>
  )
}

export default MyAccount