import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Loader, LoaderProps } from '@arctic-kit/snow';

const code = `
import { Loader } from '@arctic-kit/snow';

function Demo() {
  return <Loader {{props}} />;
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
    name: 'type',
    type: 'ddl',
    values: ['spinner', 'dots'],
    defaultValue: 'spinner',
  },
  {
    name: 'size',
    type: 'ddl',
    values: ['extraSmall', 'small', 'medium', 'large'],
    defaultValue: 'medium',
  },
];

function Demo(props: LoaderProps) {
  return <Loader {...props} />;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
  title: 'Loader',
  subTitle:
    'Displays various animated indicators, like spinners and dots, to represent loading or processing states in the interface.',
};
