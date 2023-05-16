import { Paper } from '@mantine/core'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav 
      className="navbar"
      style={{
        width: '100%',
        height: '50px',
      }}
    >
      <Paper 
        className="navbar__paper"
        mx="auto"
        bg="yellow"
        mt="0.5%"
        style={{
          width: '99%',
          height: '99%'
        }}
      >
      </Paper>
    </nav>
  )
}

export default Navbar