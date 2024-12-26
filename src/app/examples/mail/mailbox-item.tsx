'use client';

import {
  Card,
  CardHeader,
  Avatar,
  Box,
  CardTitle,
  CardDescription,
  Stack,
  Separator,
  CardContent,
  CardFooter,
  TextArea,
  Button,
  Switch,
} from '@arctic-kit/snow';
import { useState } from 'react';
import { Mail, MailboxState } from './types';
import { Data } from './data';
import { formatDate } from '@/lib/utils';

function MuteThreadSwitch() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      id='muteThread'
      label='Mute this thread'
      checked={checked}
      onToggle={() => setChecked((prevState) => !prevState)}
    />
  );
}

export function MailboxItem({
  selected,
  selectedMailIndex,
  filters,
}: Pick<MailboxState, 'selected' | 'selectedMailIndex' | 'filters'>) {
  const hasAnyFilters = Object.entries(filters).some(([_, value]) => value);
  const filteredData = !hasAnyFilters
    ? Data[selected]
    : Data[selected].filter((item) => item.unread);
  if (filteredData.length === 0) {
    return null;
  }
  const item: Mail = filteredData[selectedMailIndex[selected]];
  return (
    <Card>
      <CardHeader
        prefix={<Avatar src={item.sender.profileImgSrc} bgColor='secondary' />}
        suffix={
          <Box sx={{ fontSize: 12, color: 'var(--snow-colors-grey-700)' }}>
            {formatDate(item.date)}
          </Box>
        }
      >
        <CardTitle>{item.sender.name}</CardTitle>
        <CardDescription>
          <Stack>
            <span>{`Re: ${item.subject}`}</span>
            <span>{`Reply-To: ${item.sender.email}`}</span>
          </Stack>
        </CardDescription>
      </CardHeader>
      <Separator sx={{ marginBottom: '16px !important' }} />

      <CardContent>
        <Box sx={{ fontSize: 14, lineHeight: '20px' }}>
          <Stack spacing={4}>
            <span>{item.content}</span>
            <Stack spacing={1}>
              <span>Best regards,</span>
              <span>John</span>
            </Stack>
          </Stack>
        </Box>
      </CardContent>
      <Separator sx={{ marginBottom: '16px !important' }} />
      <CardFooter>
        <Stack spacing={6}>
          <Box>
            <TextArea id='sendMessageText' placeholder='Reply John Smith...' />
          </Box>
          <Stack direction='horizontal' spacing={3} justifyBetween>
            <MuteThreadSwitch />
            <Button>Send</Button>
          </Stack>
        </Stack>
      </CardFooter>
    </Card>
  );
}
