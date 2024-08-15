import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Checkbox, CheckboxProps } from '@arctic-kit/snow';

const code = `
import { Checkbox } from '@arctic-kit/snow';

function Demo() {
  return <Checkbox {{props}} />;
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'label',
    type: 'text',
    defaultValue: 'Checkbox Label',
  },
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
    name: 'checked',
    type: 'boolean',
    defaultValue: false,
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
    name: 'error',
    type: 'boolean',
    defaultValue: false,
  },
];

function Demo(props: CheckboxProps) {
  return <Checkbox {...props} />;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
