import { CodeConfigType, ComponentPropDefs } from '@/types';
import { IconButton, IconButtonProps } from '@arctic-kit/snow';
import { Square3Stack3dIcon } from '@arctic-kit/icons';

const code = `
import { Square3Stack3dIcon } from '@arctic-kit/icons';
import { IconButton } from '@arctic-kit/snow';

function Demo() {
  return (
    <IconButton {{props}}>
      <Square3Stack3dIcon />
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
    type: 'segment',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
  {
    name: 'rounded',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'noBorder',
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
      <Square3Stack3dIcon />
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
