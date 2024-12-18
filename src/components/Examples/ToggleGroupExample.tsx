import {
  BuildingOffice2Icon,
  UserGroupIcon,
  UserIcon,
} from '@arctic-kit/icons';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Select,
  Stack,
  TextInput,
  ToggleGroup,
  ToggleGroupItem,
} from '@arctic-kit/snow';

export function SubscriptionExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Your Subscription</CardTitle>
        <CardDescription>
          Select a subscription plan that fits your needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack spacing={3}>
          <ToggleGroup spacing={3} withBorder singleSelect>
            <ToggleGroupItem value='basic'>
              <UserIcon width={24} />
              <strong>Basic</strong>
              <small>$9.99</small>
            </ToggleGroupItem>
            <ToggleGroupItem value='pro'>
              <UserGroupIcon width={24} />
              <strong>Pro</strong>
              <small>$19.99</small>
            </ToggleGroupItem>
            <ToggleGroupItem value='enterprise'>
              <BuildingOffice2Icon width={24} />
              <strong>Ninja</strong>
              <small>$29.99</small>
            </ToggleGroupItem>
          </ToggleGroup>
          <TextInput
            label='Full Name'
            id='name'
            placeholder='First Last'
            required
          />
          <TextInput
            label='Email Address'
            type='email'
            placeholder='email@example.com'
            required
            id='email'
          />
          <TextInput
            label='Card Number'
            type='tel'
            placeholder='1234 5678 9012 3456'
            required
            id='cardNumber'
          />
          <Stack direction='horizontal' spacing={4} justifyBetween noWrap>
            <Select
              options={[
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
              ]}
              placeholder='MM'
              label='Exp Month'
              clearable={false}
              required
              id='expiryMonth'
            />
            <Select
              options={['2023', '2024', '2025', '2026', '2027', '2028']}
              placeholder='YYYY'
              label='Exp Year'
              clearable={false}
              required
              id='expiryYear'
            />
            <TextInput
              label='CVC'
              type='password'
              placeholder='123'
              required
              id='cvc'
            />
          </Stack>
        </Stack>
      </CardContent>
      <CardFooter>
        <Button sx={{ width: '100%' }}>Subscribe Now</Button>
      </CardFooter>
    </Card>
  );
}
