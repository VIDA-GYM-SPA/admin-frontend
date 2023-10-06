import {
  Modal,
  Text,
  Button,
  CopyButton, 
  ActionIcon, 
  Group,
  Tooltip, 
  rem,
  Card,
  useMantineTheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { 
  IconCopy, 
  IconCheck, 
  IconEye 
} from '@tabler/icons-react';

interface IModal { 
  user_id: number
}

const Copy = () => {
  return (
    <CopyButton value="AODNE-FHPBM-324JM-NDJI9" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon  size='lg' color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  )
}

function TokenModal({}: IModal) {
  const [opened, { open, close }] = useDisclosure(false);

  const theme = useMantineTheme();
  
  return (
    <>
      <Button
        variant="filled"
        color="red"
        onClick={open}
        w='46.5%'
        leftIcon={
          <IconEye />
        }
        size="sm"
      >
        Ver token
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size="lg"
        title={<Text fz={20} fw={700} italic>Token de acceso</Text>}
      >
        <Card shadow="sm" w="100%" bg={theme.colors.blue[0]}>
          <Group position="apart">
            <Text italic>
              AODNE-FHPBM-324JM-NDJI9
            </Text>
            <Copy />
          </Group>
        </Card>
      </Modal>
    </>
  )
}

export default TokenModal