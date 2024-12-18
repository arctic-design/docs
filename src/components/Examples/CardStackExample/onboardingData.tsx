import { Box, Checkbox, Select, TextInput } from '@arctic-kit/snow';
import { useState } from 'react';

export interface OnboardingStep {
  id: string;
  title: string;
  subTitle: string;
  footerText: string;
  status: 'completed' | 'in-progress' | 'pending';
  options?: string[];
  content: React.ReactNode;
}

function NotificationChoice() {
  const [value, setValue] = useState({ email: false, sms: false, push: true });
  return (
    <>
      <Checkbox
        label='Email Notifications'
        name='emailNotificationToggle'
        id='emailNotificationToggle'
        onChange={(val) =>
          setValue((prev) => ({ ...prev, email: !prev.email }))
        }
        checked={value.email}
      />
      <Checkbox
        label='SMS Notifications'
        name='smsNotificationToggle'
        id='smsNotificationToggle'
        onChange={(val) => setValue((prev) => ({ ...prev, sms: !prev.sms }))}
        checked={value.sms}
      />
      <Checkbox
        label='Push Notifications'
        name='pushNotificationToggle'
        id='pushNotificationToggle'
        onChange={(val) => setValue((prev) => ({ ...prev, push: !prev.push }))}
        checked={value.push}
      />
    </>
  );
}

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 'step-1',
    title: 'Account Setup',
    subTitle: 'Create your account credentials',
    footerText: 'Step 1 of 3',
    status: 'completed',
    options: ['Username', 'Password'],
    content: (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <TextInput
          label='Username'
          placeholder='Enter your username'
          required
          id='username'
        />
        <TextInput
          label='Password'
          type='password'
          placeholder='Enter your password'
          required
          id='user-password'
        />
      </Box>
    ),
  },
  {
    id: 'step-2',
    title: 'Profile Completion',
    subTitle: 'Provide additional personal information',
    footerText: 'Step 2 of 3',
    status: 'in-progress',
    options: ['First Name', 'Last Name', 'Email'],
    content: (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <TextInput
          label='First Name'
          placeholder='Enter your first name'
          required
          id='firstName'
        />
        <TextInput
          label='Last Name'
          placeholder='Enter your last name'
          required
          id='lastName'
        />
        <TextInput
          label='Email'
          type='email'
          placeholder='Enter your email'
          required
          id='emailAddress'
        />
      </Box>
    ),
  },
  {
    id: 'step-3',
    title: 'Preferences Selection',
    subTitle: 'Customize your experience',
    footerText: 'Step 3 of 3',
    status: 'pending',
    options: ['Theme', 'Notifications', 'Privacy'],
    content: (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <Select
          label='Theme'
          options={['Light', 'Dark', 'System Default']}
          placeholder='Choose a theme'
          required
        />
        <NotificationChoice />
      </Box>
    ),
  },
];
