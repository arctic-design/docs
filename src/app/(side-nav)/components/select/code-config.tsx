import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Select, SelectProps } from '@arctic-kit/snow';

const code = `
import { Select } from '@arctic-kit/snow';

function Demo() {
  return (
    <Select
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
    type: 'segment',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },

  {
    name: 'disabled',
    type: 'boolean',
    defaultValue: false,
  },
];

export function Demo(props: SelectProps) {
  return <DefaultDemo value={{ label: 'Red', value: 'red' }} {...props} />;
}

function DefaultDemo(props: SelectProps) {
  return (
    <Select
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
  component: DefaultDemo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs: propDefs.filter(
    (def) => !['errorText', 'required'].includes(def.name),
  ),
};

export const errorStateCodeConfig: CodeConfigType = {
  component: DefaultDemo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs: propDefs.filter((def) =>
    ['errorText', 'required', 'label', 'placeholder'].includes(def.name),
  ),
};
