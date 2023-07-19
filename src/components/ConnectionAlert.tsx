import { Offline } from 'react-detect-offline'
import { Card } from '@mantine/core'

type Props = {}

function ConnectionAlert({}: Props) {
  return (
    <>
      <Offline>
        <div
          style={{
            position: "absolute",
            width: "100vw",
            top: 0,
            display: 'flex',
            bottom: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, .35)",
            margin: '0 0 0 0',
            backdropFilter: 'blur(10px)',
            zIndex: 999998
          }}
        >
          <Card
            shadow="xl"
            py={75}
            px={50}
            style={{
              backgroundColor: "rgba(0, 0, 0, .45)",
              zIndex: 999999,
              color: 'white'
            }}
          >
            SIN CONEXIÓN
          </Card>
        </div>
      </Offline>
    </>
  )
}

export default ConnectionAlert