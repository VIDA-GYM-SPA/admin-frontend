import { useState, useEffect, useLayoutEffect } from 'react'
import { Card, Group, Button, Text, Paper } from '@mantine/core'
import ActionCable from 'actioncable'
import { IconCards, IconFingerprint } from '@tabler/icons-react'
import axios from 'axios'
import { useUser } from '../hooks/useUser'
import devtools from '../../node_modules/devtools-detect/index'

interface ISocket {
  message: string | null;
  type: string;
  user: number;
  username_parser: string;
  block_system: boolean;
  action_description: string;
  timestamps: Date | string;
}

interface IAntiSpy {
  modalIsClosed: boolean;
  closeButtonIsPressed: boolean;
  isBlockedSystem: boolean;
  isDevToolsOpen: boolean;
}

interface IModifyAntiSpy {
  modalIsClosed?: boolean;
  closeButtonIsPressed?: boolean;
  isBlockedSystem?: boolean;
  isDevToolsOpen?: boolean;
}

function ActionAlert() {
  const [socketResponse, setSocketResponse] = useState<ISocket | null>(null)
  const [antiSpy, setAntiSpy] = useState<IAntiSpy>({
    modalIsClosed: false,
    closeButtonIsPressed: false,
    isBlockedSystem: false,
    isDevToolsOpen: false
  })
  
  let keyboardEvent = document.createEvent('KeyboardEvent')
  
  const user = useUser()

  useEffect(() => {
    waitCable()
  }, [])

  useLayoutEffect(() => {
    if (devtools.isOpen) {
      modifyAntiSpy({
        isDevToolsOpen: true
      })
      const keyboardEvent = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        ctrlKey: false,
        shiftKey: false,
        keyCode: 123,
        charCode: 123
      });
      document.dispatchEvent(keyboardEvent);
    }
    console.log('pressed', keyboardEvent)
  }, [devtools.isOpen])

  const modifyAntiSpy = (data: IModifyAntiSpy) => {
    setAntiSpy({
      ...antiSpy,
      ...data
    })
  }

  const waitCable = () => {
    let actioncable = ActionCable.createConsumer('ws://localhost:3000/cable');
    actioncable.subscriptions.create({ channel: 'RfidChannel' }, {
      connected: () => {
        console.log('Connected to internal channel.');
      },
      disconnected: () => {
        console.log('Disconnected from internal channel.');
      },
      received: (data: ISocket) => {
        console.log(data)
        setSocketResponse(data)
      },
      rfid_status: (data: ISocket) => {
        console.log(data)
        setSocketResponse(data)
      }
    })
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          top: 0,
          display: `${!socketResponse?.block_system ? 'none' : 'flex' }`,
          bottom: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          overflowY: "hidden",
          height: `100vh`,
          backgroundColor: "rgba(0, 0, 0, .35)",
          margin: '0 0 0 0',
          backdropFilter: 'blur(10px)',
          zIndex: 999998
        }}
      >
        <Card
          shadow="xl"
          style={{
            zIndex: 999999,
          }}
        >
          <Paper w={270}>
            <Text ta="center" fw={500} italic pb={15} fz={15}>
              Debe seleccionar una acción para continuar con el usuario:
            </Text>
            <Text ta="center" fw={500} italic pb={15} fz={20} underline>
              {socketResponse?.username_parser}
            </Text>
            <Group w='100%' spacing={20}>
              <Button 
                w={270} 
                mt={15} 
                h={40} 
                color='teal' 
                leftIcon={<IconCards />}
                onClick={(e) => {
                  axios.post('http://localhost:3000/rfid/write_order', {
                    rfid: socketResponse?.message
                  }, {
                    headers: { 
                      "Content-Type": 'Application/JSON',
                      Authorization: `Bearer ${user.user?.token}` 
                    }
                  })
                  .then((response) => {
                    console.log(response)
                  })
                  .catch((error) => {
                    console.log(error)
                  })
                  e.preventDefault();
                }}
              >
                Agregar RFID
              </Button>
              <Button w={100} h={100} color='blue' disabled display='none'>
                <IconFingerprint size={50} />
              </Button>
            </Group>
          </Paper>
        </Card>
      </div>
    </>
  )
}

export default ActionAlert
