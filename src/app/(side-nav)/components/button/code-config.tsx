import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Box, Button, ButtonProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';
import {
  CloudArrowDownIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

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
import { CloudArrowDownIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { Button } from '@arctic-kit/snow';

function Demo() {
  return (
    <Button
      {{props}}
      leadingSection={<CloudArrowDownIcon />}
      trailingSection={<CloudArrowUpIcon />}
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
    type: 'ddl',
    values: ['filled', 'outlined', 'text'],
    defaultValue: 'filled',
  },
  {
    name: 'size',
    type: 'ddl',
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

function Demo({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Button>Default Button</Button>
      <Button {...props}>{children}</Button>
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
      leadingSection={<CloudArrowDownIcon />}
      trailingSection={<CloudArrowUpIcon />}
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
  title: 'Button',
  subTitle:
    'Triggers an action or event in response to user interaction, with customizable styles and behaviors.',
};

export const sectionCodeConfig: CodeConfigType = {
  component: DemoWithSections,
  centered: true,
  maxWidth: 440,
  code: codeWithSections,
  propDefs,
};
