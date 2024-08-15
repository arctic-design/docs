import { Box, Button } from '@arctic-kit/snow';
import {
  ChevronDoubleDownIcon,
  CheckCircleIcon,
  ArrowDownLeftIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/20/solid';

export default function Example() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        padding: 8,
      }}
    >
      <Button leadingSection={<ChevronDoubleDownIcon />}>Double Down</Button>
      <Button leadingSection={<CheckCircleIcon />}>Check Circle</Button>
      <Button leadingSection={<ArrowDownLeftIcon />}>Arrow Down Left</Button>
      <Button leadingSection={<CloudArrowUpIcon />}>Cloud Arrow Up</Button>
    </Box>
  );
}
