import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
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

export function CreateEventExample() {
  return (
    <Card>
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
