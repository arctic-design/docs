import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardProps,
  CardTitle,
  DatePicker,
  Select,
  Stack,
  TextInput,
} from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

const code = `
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardProps,
  CardTitle,
  DatePicker,
  Select,
  Stack,
  TextInput,
} from '@arctic-kit/snow';

const selectOptions = [
  { value: 'conference', label: 'Conference' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'webinar', label: 'Webinar' },
  { value: 'meetup', label: 'Meetup' },
];

function Demo() {
  return (
    <Card {{props}} sx={{ minWidth: 350 }}>
      <CardHeader>
        <CardTitle>Create New Event</CardTitle>
        <CardDescription>
          Organize and manage your upcoming events effortlessly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack spacing={3}>
          <TextInput
            id='event-name'
            label='Event Name'
            placeholder='Enter the name of your event'
          />
          <Select
            label='Category'
            id='category'
            options={selectOptions}
            placeholder='Select a category'
          />
          <DatePicker
            id='event-date'
            label='Date'
            placeholder='Select event date'
          />
        </Stack>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Stack direction='horizontal' spacing={3} justifyBetween>
          <Button variant='outlined'>Reset</Button>
          <Button>Save Event</Button>
        </Stack>
      </CardFooter>
    </Card>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'variant',
    type: 'segment',
    values: ['elevation', 'outlined'],
    defaultValue: 'outlined',
  },
  {
    name: 'square',
    type: 'boolean',
    defaultValue: false,
  },
];

const selectOptions = [
  { value: 'conference', label: 'Conference' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'webinar', label: 'Webinar' },
  { value: 'meetup', label: 'Meetup' },
];

function Demo({ children, ...props }: PropsWithChildren<CardProps>) {
  return (
    <Card {...props} sx={{ minWidth: 350 }}>
      <CardHeader>
        <CardTitle>Create New Event</CardTitle>
        <CardDescription>
          Organize and manage your upcoming events effortlessly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack spacing={3}>
          <TextInput
            id='event-name'
            label='Event Name'
            placeholder='Enter the name of your event'
          />
          <Select
            label='Category'
            id='category'
            options={selectOptions}
            placeholder='Select a category'
          />
          <DatePicker
            id='event-date'
            label='Date'
            placeholder='Select event date'
          />
        </Stack>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Stack direction='horizontal' spacing={3} justifyBetween>
          <Button variant='outlined'>Reset</Button>
          <Button>Save Event</Button>
        </Stack>
      </CardFooter>
    </Card>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
