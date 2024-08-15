import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Badge, BadgeProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

const code = `
import { Badge } from '@arctic-kit/snow';

function Demo() {
  return (
    <Badge {{props}}>
      {{children}}
    </Badge>
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
    name: 'children',
    type: 'text',
    defaultValue: '5',
  },
];

function Demo({ children, ...props }: PropsWithChildren<BadgeProps>) {
  return <Badge {...props}>{children}</Badge>;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
  title: 'Badge',
  subTitle:
    'Displays a small, contextual indicator to highlight status, count, or other key information associated with an element.',
};
