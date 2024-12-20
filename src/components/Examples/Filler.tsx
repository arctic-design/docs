'use client';
import { MinusIcon, PlusIcon } from '@arctic-kit/icons';
import {
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Center,
  IconButton,
  SegmentedControl,
  SegmentedControlButton,
  Stack,
  Typography,
} from '@arctic-kit/snow';
import { useState } from 'react';

export function GoalSetter() {
  const [goal, setGoal] = useState(350);
  return (
    <Card sx={{ flex: 1 }}>
      <CardHeader>
        <CardTitle>Move Goal</CardTitle>
        <CardDescription>Set your daily activity goal.</CardDescription>
      </CardHeader>
      <CardContent>
        <Stack direction='horizontal' justifyBetween>
          <IconButton
            size='large'
            noBorder
            onClick={() => setGoal((prev) => prev + 10)}
            rounded
          >
            <MinusIcon />
          </IconButton>
          <Typography style={{ fontSize: 24, fontWeight: 700 }}>
            {goal}
          </Typography>

          <IconButton
            size='large'
            noBorder
            onClick={() => setGoal((prev) => prev - 10)}
            rounded
          >
            <PlusIcon />
          </IconButton>
        </Stack>
      </CardContent>
      <CardFooter>
        <Button sx={{ width: '100%' }}>Set Goal</Button>
      </CardFooter>
    </Card>
  );
}

export function CalendarExample() {
  const [value, setValue] = useState(new Date());
  return <Calendar selected={value} onSelect={setValue} />;
}

export function SegmentedControlExample() {
  return (
    <SegmentedControl label='JS Stacks'>
      <SegmentedControlButton>React</SegmentedControlButton>
      <SegmentedControlButton>Angular</SegmentedControlButton>
      <SegmentedControlButton>Vue</SegmentedControlButton>
    </SegmentedControl>
  );
}

export function FillerExample() {
  return (
    <Center>
      <GoalSetter />
      <CalendarExample />
    </Center>
  );
}
