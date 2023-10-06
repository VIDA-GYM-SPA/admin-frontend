import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  TextInput,
  MultiSelect,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import AddClient from './_security/AddClient';

interface UsersTableProps {
  data: { avatar: string; name: string; job: string; email: string; dni: string }[];
}

const jobColors: Record<string, string> = {
  admin: 'blue',
  personal: 'cyan',
  cliente: 'pink',
};

export function UsersTable({ data }: UsersTableProps) {
  const theme = useMantineTheme();
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text fz="sm" fw={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={jobColors[item.job.toLowerCase()] ?? 'gray'}
          variant={theme.colorScheme === 'dark' ? 'light' : 'filled'}
        >
          {item.job}
        </Badge>
      </td>
      <td>
        <Anchor component="button" size="sm">
          {item.email}
        </Anchor>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {item.dni}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size="1.35rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash size="1.35rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Group position='left'>
        <TextInput
          w={250}
          placeholder='Filtrar por nombre o cedula'
        />
        <MultiSelect
          w={250}
          placeholder='Filtrar por roles'
          shadow='lg'
          data={[
            { value: 'admin', label: 'Admin' },
            { value: 'personal', label: 'Personal' },
            { value: 'cliente', label: 'Cliente' },
          ]}
        />
        <AddClient
          size="sm"
          label="Agregar usuario"
        />
      </Group>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Rol</th>
            <th>Correo</th>
            <th>Cedula</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}