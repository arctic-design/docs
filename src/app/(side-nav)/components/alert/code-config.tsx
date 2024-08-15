import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Alert, AlertProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

const code = `
import { Alert } from '@arctic-kit/snow';

function Demo() {
  return (
    <Alert {{props}}>
      {{children}}
    </Alert>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'severity',
    type: 'ddl',
    values: ['success', 'error', 'warning', 'info'],
    defaultValue: 'info',
  },
  {
    name: 'hideIcon',
    type: 'boolean',
  },
  {
    name: 'shadow',
    type: 'boolean',
  },
  {
    name: 'children',
    type: 'text',
    defaultValue:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.',
  },
];

function Demo({ children, ...props }: PropsWithChildren<AlertProps>) {
  return <Alert {...props}>{children}</Alert>;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
