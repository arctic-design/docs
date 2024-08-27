import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Tag, TagProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

const code = `
import { Tag } from '@arctic-kit/snow';

function Demo() {
  return (
    <Tag {{props}}>
      {{children}}
    </Tag>
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
    name: 'noFill',
    type: 'boolean',
    defaultValue: false,
  },
];

function Demo({ children, ...props }: PropsWithChildren<TagProps>) {
  return <Tag {...props}>{children}</Tag>;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
