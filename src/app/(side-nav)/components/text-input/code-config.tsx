import { CodeConfigType, ComponentPropDefs } from '@/types';
import { TextInput, TextInputProps } from '@arctic-kit/snow';
import { useState } from 'react';

const code = `
import { useState } from 'react';
import { TextInput } from '@arctic-kit/snow';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <TextInput
      {{props}}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'label',
    type: 'text',
    defaultValue: 'Name',
  },
  {
    name: 'placeholder',
    type: 'text',
    defaultValue: 'Enter your name here',
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

function Demo(props: TextInputProps) {
  const [value, setValue] = useState('');

  return (
    <TextInput
      {...props}
      value={value}
      onChange={(event) => setValue(event.target.value)}
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
