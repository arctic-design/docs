import { Box, Button } from '@arctic-kit/snow';
import {
  ChevronDoubleDownIcon,
  CheckCircleIcon,
  ArrowDownLeftIcon,
  CloudArrowUpIcon,
} from '@arctic-kit/icons';

export default function Example() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        padding: 8,
        flexWrap: 'wrap',
      }}
    >
      <Button prefix={<ChevronDoubleDownIcon />}>Double Down</Button>
      <Button prefix={<CheckCircleIcon />}>Check Circle</Button>
      <Button prefix={<ArrowDownLeftIcon />}>Arrow Down Left</Button>
      <Button prefix={<CloudArrowUpIcon />}>Cloud Arrow Up</Button>
    </Box>
  );
}
