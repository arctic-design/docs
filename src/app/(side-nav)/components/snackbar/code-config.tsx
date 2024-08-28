'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  SnackbarProvider,
  EnqueueSnackbarProps,
  useSnackbar,
  Button,
  Center,
} from '@arctic-kit/snow';

const defaultCode = `
import {
  SnackbarProvider,
  EnqueueSnackbarProps,
  useSnackbar,
  Button,
  Center,
} from '@arctic-kit/snow';

function Demo({ enqueueProps }: { enqueueProps: EnqueueSnackbarProps }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <Center>
      <Button onClick={() => enqueueSnackbar(enqueueProps)}>
        Show notification
      </Button>
      <Button color='secondary' onClick={() => closeSnackbar()}>
        Close all
      </Button>
    </Center>
  );
}

function RootApp(props: EnqueueSnackbarProps) {
  return (
    <SnackbarProvider>
      <Demo
        enqueueProps={{
          {{props}}
        }}
      />
    </SnackbarProvider>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'variant',
    type: 'segment',
    values: ['success', 'error', 'warning', 'info'],
    defaultValue: 'info',
  },
  {
    name: 'title',
    type: 'text',
    defaultValue: 'Notification received',
  },
  {
    name: 'message',
    type: 'text',
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

function Demo({ enqueueProps }: { enqueueProps: EnqueueSnackbarProps }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <Center>
      <Button onClick={() => enqueueSnackbar(enqueueProps)}>
        Show notification
      </Button>
      <Button color='secondary' onClick={() => closeSnackbar()}>
        Close all
      </Button>
    </Center>
  );
}

function RootApp(props: EnqueueSnackbarProps) {
  return (
    <SnackbarProvider>
      <Demo enqueueProps={props} />
    </SnackbarProvider>
  );
}

export const codeConfig: CodeConfigType = {
  component: RootApp,
  centered: true,
  maxWidth: 440,
  code: defaultCode,
  propDefs,
};
