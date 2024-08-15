import { Box, IconButton } from '@arctic-kit/snow';
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
      <IconButton>
        <ChevronDoubleDownIcon />
      </IconButton>
      <IconButton>
        <CheckCircleIcon />
      </IconButton>
      <IconButton>
        <ArrowDownLeftIcon />
      </IconButton>
      <IconButton>
        <CloudArrowUpIcon />
      </IconButton>
    </Box>
  );
}
