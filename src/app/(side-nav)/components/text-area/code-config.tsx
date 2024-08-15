import { CodeConfigType, ComponentPropDefs } from '@/types';
import { TextArea, TextAreaProps } from '@arctic-kit/snow';
import { useState } from 'react';

const code = `
import { useState } from 'react';
import { TextArea } from '@arctic-kit/snow';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <TextArea
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
    defaultValue: 'Description',
  },
  {
    name: 'placeholder',
    type: 'text',
    defaultValue: 'Enter your description here',
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

function Demo(props: TextAreaProps) {
  const [value, setValue] = useState('');

  return (
    <TextArea
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
