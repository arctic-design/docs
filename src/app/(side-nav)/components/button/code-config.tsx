import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Box, Button, ButtonProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';
import { CloudArrowDownIcon, CloudArrowUpIcon } from '@arctic-kit/icons';

const code = `
import { Box, Button } from '@arctic-kit/snow';

function Demo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Button>Default Button</Button>
      <Button {{props}}>{{children}}</Button>
    </Box>
  );
}
`;

const codeWithSections = `
import { CloudArrowDownIcon, CloudArrowUpIcon } from '@arctic-kit/icons';
import { Button } from '@arctic-kit/snow';

function Demo() {
  return (
    <Button
      {{props}}
      prefix={<CloudArrowDownIcon />}
      suffix={<CloudArrowUpIcon />}
    >
      {{children}}
    </Button>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'color',
    type: 'ddl',
    values: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    defaultValue: 'primary',
  },
  {
    name: 'variant',
    type: 'segment',
    values: ['filled', 'outlined', 'text'],
    defaultValue: 'filled',
  },
  {
    name: 'size',
    type: 'segment',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },

  {
    name: 'loading',
    type: 'boolean',
  },
  {
    name: 'disabled',
    type: 'boolean',
  },
  {
    name: 'children',
    type: 'text',
    defaultValue: 'Button',
  },
];

export function Demo({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Button>Default Button</Button>
      {children && <Button {...props}>{children}</Button>}
    </Box>
  );
}

function DemoWithSections({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <Button
      {...props}
      prefix={<CloudArrowDownIcon />}
      suffix={<CloudArrowUpIcon />}
    >
      {children}
    </Button>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};

export const sectionCodeConfig: CodeConfigType = {
  component: DemoWithSections,
  centered: true,
  maxWidth: 440,
  code: codeWithSections,
  propDefs,
};
