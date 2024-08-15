import { Tooltip } from '@arctic-kit/snow';
import {
  ChevronDoubleDownIcon,
  CheckCircleIcon,
  ArrowDownLeftIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/20/solid';
import { styled } from '@pigment-css/react';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,
  padding: 8,
  '& svg': {
    width: '24px',
  },
});

export default function Example() {
  return (
    <Container>
      <Tooltip message='Chevron double down icon'>
        <ChevronDoubleDownIcon />
      </Tooltip>
      <Tooltip message='Check circle icon'>
        <CheckCircleIcon />
      </Tooltip>
      <Tooltip message='Arrow down left icon'>
        <ArrowDownLeftIcon />
      </Tooltip>
      <Tooltip message='Cloud arrow up icon'>
        <CloudArrowUpIcon />
      </Tooltip>
    </Container>
  );
}
