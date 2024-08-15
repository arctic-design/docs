import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Autocomplete, AutocompleteProps } from '@arctic-kit/snow';

const code = `
import { Autocomplete } from '@arctic-kit/snow';

function Demo() {
  return (
    <Autocomplete
      {{props}}
      options={[
        'Alfalfa Sprouts',
        'Apple',
        'Apricot',
        'Artichoke',
        'Asian Pear',
        'Asparagus',
        'Atemoya',
        'Avocado',
        'Bamboo Shoots',
        'Banana',
        'Bean Sprouts',
        'Beans',
        'Beets',
        'Belgian Endive',
        'Bell Peppers',
        'Bitter Melon',
        'Blackberries',
        'Blueberries',
      ]}
    />
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'size',
    type: 'ddl',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
  {
    name: 'label',
    type: 'text',
    defaultValue: 'Fruit name',
  },
  {
    name: 'placeholder',
    type: 'text',
    defaultValue: 'Enter fruit name',
  },
  {
    name: 'required',
    type: 'boolean',
  },
  {
    name: 'disabled',
    type: 'boolean',
  },
  {
    name: 'readOnly',
    type: 'boolean',
  },
  {
    name: 'errorText',
    type: 'text',
  },
];

function Demo(props: AutocompleteProps) {
  return (
    <Autocomplete
      {...props}
      options={[
        'Alfalfa Sprouts',
        'Apple',
        'Apricot',
        'Artichoke',
        'Asian Pear',
        'Asparagus',
        'Atemoya',
        'Avocado',
        'Bamboo Shoots',
        'Banana',
        'Bean Sprouts',
        'Beans',
        'Beets',
        'Belgian Endive',
        'Bell Peppers',
        'Bitter Melon',
        'Blackberries',
        'Blueberries',
      ]}
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
