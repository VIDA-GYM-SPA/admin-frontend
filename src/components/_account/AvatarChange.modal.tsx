import { Avatar, createStyles, Text, Modal, Group, FileButton, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks"
import { useState } from "react";

interface IModal {
  user_id: number
}

function AvatarChangeModal({}: IModal) { 
  // @ts-ignore
  // eslint-disable-next-line
  const [file, setFile] = useState<File | null>(null);
  const [hovering, setHovering] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);
  
  const useStyles = createStyles((theme) => ({
    avatarHeader: {
      borderRadius: theme.radius.xl,
      minWidth: 230,
      minHeight: 230,
      marginBottom: 30,
      maxHeight: 250,
      border: '0.0625rem solid #dee2e6',
      shadow: theme.shadows.xl,
      background: theme.white,
      maxWidth: 250,
    },
    avatarHover: {
      borderRadius: theme.radius.xl,
      minWidth: 230,
      minHeight: 230,
      marginBottom: 30,
      maxHeight: 250,
      border: '0.0625rem solid #dee2e6',
      shadow: theme.shadows.xl,
      background: "rgba(0, 0, 0, 0.625)",
      maxWidth: 250,
    },
    avatarText: {
      fontSize: 80,
      fontFamily: theme.fontFamily,
      fontWeight: 700,
      marginTop: theme.spacing.md,
      color: theme.colors.blue[4],
      marginBottom: theme.spacing.md,
    },
  }))

  const { classes } = useStyles();
  
  return (
    <>
      <Avatar
        onClick={open} 
        className={hovering ? classes.avatarHeader : classes.avatarHover}>
        <Text className={classes.avatarText}>DU</Text>
      </Avatar>
      <Modal 
        opened={opened} 
        onClose={close} 
        centered 
        size='lg' 
        title={<Text fz={20} fw={700} italic>Cambiar foto de perfil</Text>}
      >
        <Group position="center">       
          <Avatar 
            className={classes.avatarHeader}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Text className={classes.avatarText}>DU</Text>
          </Avatar>
          <FileButton onChange={(file) => { 
            setFile(file)
            console.log(file)
          }} accept="image/png,image/jpeg">
            {(props) => <Button fullWidth {...props}>Subir imagen</Button>}
          </FileButton>
        </Group>  
      </Modal>
    </>
  )
}

export default AvatarChangeModal