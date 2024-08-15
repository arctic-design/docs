import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Switch, SwitchProps } from '@arctic-kit/snow';
import { useState } from 'react';

const code = `
import { useState } from 'react';
import { Switch } from '@arctic-kit/snow';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      {{props}}
      onToggle={() => setChecked(!checked)}
      checked={checked}
    />
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'label',
    type: 'text',
    defaultValue: 'Enable Arctic Design',
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
    name: 'disabled',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'readOnly',
    type: 'boolean',
    defaultValue: false,
  },
];

function Demo(props: SwitchProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      {...props}
      onToggle={() => setChecked(!checked)}
      checked={checked}
    />
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
