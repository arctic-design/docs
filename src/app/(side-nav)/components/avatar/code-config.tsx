import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Avatar, AvatarProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

const code = `
import { Avatar } from '@arctic-kit/snow';

function Demo() {
  return (
    <Avatar {{props}}>
      {{children}}
    </Avatar>
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
    defaultValue: 'A',
  },
];

function Demo({ children, ...props }: PropsWithChildren<AvatarProps>) {
  return <Avatar {...props}>{children}</Avatar>;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
  title: 'Avatar',
  subTitle:
    'Displays a visual representation, often as an image or initials, to identify a user or entity within an interface.',
};
