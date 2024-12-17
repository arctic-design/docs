'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
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
  ToggleGroupProps,
} from '@arctic-kit/snow';

import {
  BuildingOffice2Icon,
  UserGroupIcon,
  UserIcon,
} from '@arctic-kit/icons';

const defaultCode = `
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@arctic-kit/snow';

function Demo() {
  return (
    <ToggleGroup {{props}}>
      <ToggleGroupItem value='b'>
        <b>B</b>
      </ToggleGroupItem>
      <ToggleGroupItem value='i'>
        <i>I</i>
      </ToggleGroupItem>
      <ToggleGroupItem value='u'>
        <u>U</u>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
`;

const customCode = `
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
  ToggleGroupProps,
} from '@arctic-kit/snow';

function Demo() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader>
        <CardTitle>Choose Your Subscription</CardTitle>
        <CardDescription>
          Select a subscription plan that fits your needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack spacing={3}>
          <ToggleGroup {{props}} spacing={3}>
            <ToggleGroupItem value='basic'>
              <UserIcon width={24} />
              <strong>Basic</strong>
              <small>$9.99/month</small>
            </ToggleGroupItem>
            <ToggleGroupItem value='pro'>
              <UserGroupIcon width={24} />
              <strong>Pro</strong>
              <small>$19.99/month</small>
            </ToggleGroupItem>
            <ToggleGroupItem value='enterprise'>
              <BuildingOffice2Icon width={24} />
              <strong>Enterprise</strong>
              <small>$29.99/month</small>
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
              label='Expiry Month'
              clearable={false}
              required
              id='expiryMonth'
            />
            <Select
              options={['2023', '2024', '2025', '2026', '2027', '2028']}
              placeholder='YYYY'
              label='Expiry Year'
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
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'singleSelect',
    type: 'boolean',
    defaultValue: true,
  },
  {
    name: 'withBorder',
    type: 'boolean',
    defaultValue: true,
  },
];

function DefaultDemo({ children, ...props }: ToggleGroupProps) {
  return (
    <ToggleGroup {...props}>
      <ToggleGroupItem value='b'>
        <b>B</b>
      </ToggleGroupItem>
      <ToggleGroupItem value='i'>
        <i>I</i>
      </ToggleGroupItem>
      <ToggleGroupItem value='u'>
        <u>U</u>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function AdvanceDemo({ children, ...props }: ToggleGroupProps) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader>
        <CardTitle>Choose Your Subscription</CardTitle>
        <CardDescription>
          Select a subscription plan that fits your needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack spacing={3}>
          <ToggleGroup spacing={3} withBorder singleSelect {...props}>
            <ToggleGroupItem value='basic'>
              <UserIcon width={24} />
              <strong>Basic</strong>
              <small>$9.99/month</small>
            </ToggleGroupItem>
            <ToggleGroupItem value='pro'>
              <UserGroupIcon width={24} />
              <strong>Pro</strong>
              <small>$19.99/month</small>
            </ToggleGroupItem>
            <ToggleGroupItem value='enterprise'>
              <BuildingOffice2Icon width={24} />
              <strong>Enterprise</strong>
              <small>$29.99/month</small>
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
              label='Expiry Month'
              clearable={false}
              required
              id='expiryMonth'
            />
            <Select
              options={['2023', '2024', '2025', '2026', '2027', '2028']}
              placeholder='YYYY'
              label='Expiry Year'
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

export const codeConfig: CodeConfigType = {
  component: DefaultDemo,
  centered: true,
  maxWidth: 440,
  code: defaultCode,
  propDefs,
};

export const customTriggerCodeConfig: CodeConfigType = {
  component: AdvanceDemo,
  centered: true,
  maxWidth: 440,
  code: customCode,
  propDefs,
};
