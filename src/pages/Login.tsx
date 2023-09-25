import { Card, Title, Text, TextInput, PasswordInput, Button } from '@mantine/core'
import ConnectionAlert from '../components/ConnectionAlert'
import { useEffect } from 'react'

interface ILogin {
  email: string;
  password: string;
}

function Login({}: ILogin) {
  useEffect(() => {
    // localStorage.removeItem('user')
    // localStorage.removeItem('token')
  }, [])

  return (
    <>
      <div className='login' 
        style={{ 
          margin: -16, 
          background: 'url(/vidagymspa.webp)', 
          width: '100vw', 
          height: '100vh', 
          display: 'flex', 
          objectFit: 'cover',
          backgroundPosition: 'center center',
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundSize: '100% 100%', 
          backgroundRepeat: 'no-repeat', 
          aspectRatio: '1/1'
        }}
      >
        <Card
          withBorder
          shadow='md'
          padding='xl'
          style={{
            minWidth: 400,
            maxWidth: 500
          }}
        >
          <Title
            order={2}
            fw={300}
            ta='center'
          >
            Vida Gym Spa
            <Text
              ta='center'
              fw={300}
              size={20}
            >
              Login
            </Text>
          </Title>
          <TextInput 
            mt={40}
            label='Correo'
            placeholder='micorreo@vidagym.com'
          />
          <PasswordInput
            label='Contraseña'
            placeholder='********'
          />
          <Button 
            mt={20}
            w='100%'
          >
            Login
          </Button>
        </Card>
        <ConnectionAlert />
      </div>
    </>
  )
}

export default Login
