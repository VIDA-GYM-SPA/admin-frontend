import { Card, Group, PinInput, Text } from "@mantine/core"

function ProtectionPin() {
  return (
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
        backgroundColor: "rgba(0, 0, 0, .6)",
        margin: '0 0 0 0',
        backdropFilter: 'blur(10px)',
        zIndex: 999998
      }}
    >
      <Group w="100%" position="center">
        <Card maw={383}>
          <Text ta="center" fw={600} fz={20} mb={20}>
            PIN de seguridad
          </Text>
          <Text ta="center" fw={300} fz={18} mb={20}>
            Ingrese su PIN de seguridad para poder seguir utilizando el sistema
          </Text>
          <PinInput 
            length={6} 
            w='100%'
            type='number'
            aria-label="Pin Code"
            placeholder="·"
            size='xl'
          /> 
        </Card>
      </Group>
    </div>
  )
}

export default ProtectionPin