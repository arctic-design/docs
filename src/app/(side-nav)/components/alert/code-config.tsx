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

const defaultChildren =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis.';

const propDefs: ComponentPropDefs[] = [
  {
    name: 'severity',
    type: 'segment',
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
    name: 'title',
    type: 'text',
    defaultValue: 'Arctic Design Kit',
  },
  {
    name: 'children',
    type: 'text',
    defaultValue: defaultChildren,
  },
];

export function Demo({ children, ...props }: PropsWithChildren<AlertProps>) {
  return <Alert {...props}>{children || defaultChildren}</Alert>;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
