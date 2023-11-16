import { Modal, Title, Button, TextInput, Divider, Group, Select, Grid, NumberInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';
import { DateInput } from '@mantine/dates';

type Props = {}

function Newpay({ }: Props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal radius="lg" size="55%" centered opened={opened} onClose={close} withCloseButton={false}>

        <Group position='center'>
          <Title mt={15} mb={15} order={2}>
            Agregar pago
          </Title>
        </Group>

        <Divider my="sm" variant="dashed" />

        <Group position='apart'>
          <TextInput
            placeholder="Razon social"
            label="Razon social"
            radius="lg"
            size="lg"
            w='100%'
          />
        </Group>


        <Grid>
          <Grid.Col md={6} lg={6}>

            <NumberInput
              placeholder="Monto"
              label="Monto"
              radius="lg"
              type='number'
              size="lg"
              hideControls
            />

          </Grid.Col>

          <Grid.Col md={6} lg={6}>

            <Select
              data={[
                { value: 'Pago Movil', label: 'Pago Movil' },
                { value: 'Efectivo', label: 'Efectivo' },
                { value: 'Transferencia', label: 'Transferencia' },

              ]}

              maxDropdownHeight={280}
              placeholder="Moneda"
              label="Moneda"
              radius="lg"
              size="lg"
            />

          </Grid.Col>

        </Grid>
        <Grid>
          <Grid.Col md={6} lg={6}>

            <TextInput
              placeholder="Referencia"
              label="Referencia"
              radius="lg"
              size="lg"
              w='100%'
            />

          </Grid.Col>

          <Grid.Col md={6} lg={6}>

            <Select
              data={[
                { value: 'Efectivo', label: 'Efectivo' },
                { value: 'Mercantil', label: 'Mercantil' },
                { value: 'BancoOccidentaldeCredito', label: 'Banco Occidental de Crédito' },
                { value: 'BancodeVenezuela', label: 'Banco de Venezuela' },
                { value: 'Banconacionaldecredito', label: 'Banco nacional de crédito' },
                { value: 'Banesco', label: 'Banesco' },
                { value: 'BancoActivo', label: 'Banco Activo' },
                { value: 'Bancomicrofinanciero', label: 'Banco microfinanciero' },
                { value: 'BancodelTesoro', label: 'Banco del Tesoro' },
                { value: 'BancodeDesarrolloeconomicoySocialdeVenezuela', label: 'Banco de desarrollo económico y social de Venezuela' },
                { value: 'BancodelaFuerzaArmadaNacionalBolivariana', label: 'Banco de la Fuerza Armada Nacional Bolivariana' },
                { value: 'BancoAgricoladeVenezuela', label: 'Banco Agrícola de Venezuela' },
                { value: 'BancodeComercioExterior', label: 'Banco de Comercio Exterior' },
                { value: 'BancodeExportacionyComercio', label: 'Banco de Exportación y Comercio' },
                { value: 'BancoIndustrialdeVenezuela', label: 'Banco Industrial de Venezuela' },
                { value: 'BancoVenezolanodeCredito', label: 'Banco Venezolano de Crédito' },
                { value: 'BancoSofitasa', label: 'Banco Sofitasa' },
                { value: 'BancoPlaza', label: 'Banco Plaza' },
                { value: 'BancoExterior', label: 'Banco Exterior' },
                { value: 'BancoCaroni', label: 'Banco Caroní' },
                { value: 'BancodelSur', label: 'Banco del Sur' },
                { value: 'BancoBicentenario', label: 'Banco Bicentenario' },
                { value: 'BancodelPuebloSoberano', label: 'Banco del Pueblo Soberano' },
                { value: 'BancodelaGenteEmprendedora', label: 'Banco de la Gente Emprendedora' },
                { value: 'BancodelaMujer', label: 'Banco de la Mujer' },
                { value: 'BancodelaEconomiaComunal', label: 'Banco de la Economía Comunal' },
              ]}

              maxDropdownHeight={280}
              placeholder="Banco"
              label="Banco"
              radius="lg"
              size="lg"
            />

          </Grid.Col>

        </Grid>
        <DateInput
          placeholder="Dia de trasferencia"
          label="Dia de trasferencia"
          radius="lg"
          size="lg"
        />
        <Button mt={15} color="indigo" radius="lg" size="lg" fullWidth>
          Agregar
        </Button>
      </Modal>
      <Button onClick={open}  leftIcon={<IconPlus />} mt={15} color="indigo" radius="lg" size="lg" fullWidth>
        Agregar nuevo pago
      </Button>
    </>
  )
}

export default Newpay