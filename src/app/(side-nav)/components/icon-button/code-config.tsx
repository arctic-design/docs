import { CodeConfigType, ComponentPropDefs } from '@/types';
import { IconButton, IconButtonProps } from '@arctic-kit/snow';
import { FaceSmileIcon } from '@heroicons/react/20/solid';

const code = `
import { FaceSmileIcon } from '@heroicons/react/20/solid';
import { IconButton } from '@arctic-kit/snow';

function Demo() {
  return (
    <IconButton {{props}}>
      <FaceSmileIcon />
    </IconButton>
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
    name: 'size',
    type: 'ddl',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
  {
    name: 'rounded',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: false,
  },
];

function Demo(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <FaceSmileIcon />
    </IconButton>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
