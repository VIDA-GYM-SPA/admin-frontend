import { useState } from 'react';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Box, Select } from '@mantine/core';

interface IRegistration {
  url: string;
  defaultRole: 'Employee' | 'Client';
}

function RegistrationLayout({ url, defaultRole }: IRegistration) {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      role: defaultRole,
      password: ''
    },
    validate: {
      name: matches(/^[a-zA-Z\s]*$/, 'Only letters and spaces are allowed'),
      email: isEmail('Please enter a valid email'),
      role: matches(/^(Employee|Client)$/, 'Please select a valid role'),
      password: hasLength({ min: 8, max: 32 }, 'Password must be between 8 and 32 characters long'),
    }
  })

  return (
    <Box component="form" onSubmit={form.onSubmit(() => {
      alert(JSON.stringify(form.values, null, 2))
    })}>
      <Group>
        <TextInput
          label="Name"
          placeholder='Javier Diaz'
          withAsterisk
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder='javierdiaz@vida.com'
          withAsterisk
          {...form.getInputProps('email')}
        />
      </Group>
        <Select
          label="Role"
          placeholder='Select a role'
          withAsterisk
          w='100%'
          {...form.getInputProps('role')}
          data={[
            { value: 'Employee', label: 'Employee' },
            { value: 'Client', label: 'Client' }
          ]}
        />
        <TextInput
          label="Password"
          placeholder='********'
          w='100%'
          withAsterisk
          {...form.getInputProps('password')}
        />
        <Button type="submit">Submit</Button>
    </Box>
  )
}

export default RegistrationLayout
