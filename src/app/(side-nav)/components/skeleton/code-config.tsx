import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Box, Skeleton } from '@arctic-kit/snow';

const code = `
import { Box, Skeleton } from '@arctic-kit/snow';

function Demo() {
  return (
    <Box
      sx={{
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <Skeleton height={50} circle />
      <Box height={100}>
        <Skeleton height={'100%'} />
      </Box>

      <Skeleton height={8} />
      <Skeleton height={8} />
      <Skeleton height={8} width='70%' />
      <Skeleton height={8} width='50%' />
      <Skeleton height={8} width='25%' />
    </Box>
  );
}
`;

const propDefs: ComponentPropDefs[] = [];

function Demo() {
  return (
    <Box
      sx={{
        width: 600,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <Skeleton height={50} circle />
      <Box height={100}>
        <Skeleton height={'100%'} />
      </Box>

      <Skeleton height={8} />
      <Skeleton height={8} />
      <Skeleton height={8} width='70%' />
      <Skeleton height={8} width='50%' />
      <Skeleton height={8} width='25%' />
    </Box>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
