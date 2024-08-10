import { Alert, Box } from '@arctic-kit/snow';

export default function Example() {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12 }}
    >
      <Alert>This is the default alert</Alert>
      <Alert severity='success'>This is the success alert</Alert>
      <Alert severity='info'>This is the info alert</Alert>
      <Alert severity='warning'>This is the warning alert</Alert>
    </Box>
  );
}
