import { Card, Grid, Image } from "@mantine/core"

function Accounts() {
  return (
    <section className="accounts">
      <Grid>
        <Grid.Col span={12}>
          <Card
            p={0}
            m={0}
            mt={-10}
            w="100%"
            h={300}
          >
            <Image
              src="https://play-lh.googleusercontent.com/bDCkDV64ZPT38q44KBEWgicFt2gDHdYPgCHbA3knlieeYpNqbliEqBI90Wr6Tu8YOw"
              alt="Vida Gym Spa"
              width="100%"
              height="300px"
            />
          </Card>
        </Grid.Col>
      </Grid>
    </section>
  )
}

export default Accounts