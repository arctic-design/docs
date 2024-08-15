import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  SegmentedControl,
  SegmentedControlButton,
  SegmentedControlProps,
} from '@arctic-kit/snow';

const code = `
import {
  SegmentedControl,
  SegmentedControlButton,
  SegmentedControlProps,
} from '@arctic-kit/snow';

function Demo() {
  return (
    <SegmentedControl {{props}}>
      <SegmentedControlButton>React</SegmentedControlButton>
      <SegmentedControlButton>Angular</SegmentedControlButton>
      <SegmentedControlButton>Vue</SegmentedControlButton>
      <SegmentedControlButton>Preact</SegmentedControlButton>
      <SegmentedControlButton>Svelte</SegmentedControlButton>
    </SegmentedControl>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  { name: 'initialSelectedIndex', type: 'number', defaultValue: 2 },
  {
    name: 'color',
    type: 'ddl',
    values: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
  },
  {
    name: 'size',
    type: 'ddl',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
];

function Demo(props: SegmentedControlProps) {
  return (
    <SegmentedControl {...props}>
      <SegmentedControlButton>React</SegmentedControlButton>
      <SegmentedControlButton>Angular</SegmentedControlButton>
      <SegmentedControlButton>Vue</SegmentedControlButton>
      <SegmentedControlButton>Preact</SegmentedControlButton>
      <SegmentedControlButton>Svelte</SegmentedControlButton>
    </SegmentedControl>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
