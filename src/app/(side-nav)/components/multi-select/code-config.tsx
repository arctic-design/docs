import { CodeConfigType, ComponentPropDefs } from '@/types';
import { MultiSelect, MultiSelectProps } from '@arctic-kit/snow';

const code = `
import { MultiSelect } from '@arctic-kit/snow';

function Demo() {
  return (
    <MultiSelect
      {{props}}
      options={[
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
        { label: 'Red', value: 'red' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Orange', value: 'orange' },
        { label: 'Pink', value: 'pink' },
        { label: 'Purple', value: 'purple' },
        { label: 'Grey', value: 'grey' },
      ]}
    />
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'label',
    type: 'text',
    defaultValue: 'Colors',
  },
  {
    name: 'placeholder',
    type: 'text',
    defaultValue: 'Pick a value',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: true,
  },
  {
    name: 'searchable',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'clearable',
    type: 'boolean',
    defaultValue: true,
  },
  {
    name: 'required',
    type: 'boolean',
    defaultValue: true,
  },
  {
    name: 'errorText',
    type: 'text',
    defaultValue: 'Required field',
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
];

function Demo(props: MultiSelectProps) {
  return (
    <MultiSelect
      {...props}
      options={[
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
        { label: 'Red', value: 'red' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Orange', value: 'orange' },
        { label: 'Pink', value: 'pink' },
        { label: 'Purple', value: 'purple' },
        { label: 'Grey', value: 'grey' },
      ]}
    />
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs: propDefs.filter(
    (def) => !['errorText', 'required'].includes(def.name),
  ),
  title: 'MultiSelect',
  subTitle:
    'Enables users to select multiple options from a dropdown or list, with the ability to display selected choices.',
};

export const errorStateCodeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs: propDefs.filter((def) =>
    ['errorText', 'required', 'label', 'placeholder'].includes(def.name),
  ),
  title: 'MultiSelect',
  subTitle:
    'Enables users to select multiple options from a dropdown or list, with the ability to display selected choices.',
};
