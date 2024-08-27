import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Chip, ChipProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

const code = `
import { Chip } from '@arctic-kit/snow';

function Demo() {
  return (
    <Chip {{props}}>
      {{children}}
    </Chip>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'children',
    type: 'text',
    defaultValue: 'Arctic Design',
  },
  {
    name: 'color',
    type: 'ddl',
    values: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    defaultValue: 'primary',
  },
  {
    name: 'size',
    type: 'segment',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },

  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'readOnly',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'selected',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'interactive',
    type: 'boolean',
    defaultValue: false,
  },
];

function Demo({ children, ...props }: PropsWithChildren<ChipProps>) {
  return <Chip {...props}>{children}</Chip>;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
