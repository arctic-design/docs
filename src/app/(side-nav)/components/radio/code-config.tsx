'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import { OptionType, RadioGroup, RadioGroupProps } from '@arctic-kit/snow';
import { useState } from 'react';

const defaultCode = `
import { useState } from 'react';
import { OptionType, RadioGroup } from '@arctic-kit/snow';

function Demo() {
  const [value, setValue] = useState('');

  const onChange = (val: OptionType['value']) => {
    setValue(val);
  };

  return (
    <RadioGroup
      {{props}}
      id='sample-radio-grp'
      options={[
        { label: 'Ford Mustang', value: 'ford_mustang' },
        { label: 'Chevrolet Camaro', value: 'chevrolet_camaro' },
        { label: 'Porsche 911', value: 'porsche_911' },
        { label: 'Tesla Model S', value: 'tesla_model_s' },
        { label: 'Ferrari F40', value: 'ferrari_f40' },
        { label: 'Lamborghini Aventador', value: 'lamborghini_aventador' },
        { label: 'Audi R8', value: 'audi_r8' },
        { label: 'BMW M3', value: 'bmw_m3' },
      ]}
      value={value}
      onChange={onChange}
    />
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'label',
    type: 'text',
    defaultValue: 'Select an option',
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

  {
    name: 'required',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'errorText',
    type: 'text',
    defaultValue: '',
  },
];

function Demo(props: RadioGroupProps) {
  const [value, setValue] = useState('');

  const onChange = (val: OptionType['value']) => {
    setValue(val);
  };

  return (
    <RadioGroup
      {...props}
      id='sample-radio-grp'
      options={[
        { label: 'Ford Mustang', value: 'ford_mustang' },
        { label: 'Chevrolet Camaro', value: 'chevrolet_camaro' },
        { label: 'Porsche 911', value: 'porsche_911' },
        { label: 'Tesla Model S', value: 'tesla_model_s' },
        { label: 'Ferrari F40', value: 'ferrari_f40' },
        { label: 'Lamborghini Aventador', value: 'lamborghini_aventador' },
        { label: 'Audi R8', value: 'audi_r8' },
        { label: 'BMW M3', value: 'bmw_m3' },
      ]}
      value={value}
      onChange={onChange}
    />
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code: defaultCode,
  propDefs,
  title: 'RadioGroup',
  subTitle:
    'Groups radio buttons, allowing users to select one option from a set of mutually exclusive choices.',
};
