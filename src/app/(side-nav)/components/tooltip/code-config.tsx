import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Button, PopoverPlacement, Tooltip } from '@arctic-kit/snow';

const code = `
import { Button, Tooltip } from '@arctic-kit/snow';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Tooltip {{props}}>
      <Button variant='outlined'>Trigger Element</Button>,
    </Tooltip>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'message',
    type: 'text',
    defaultValue: 'This is Button content of tooltip',
  },
  {
    name: 'placement',
    type: 'ddl',
    values: [
      'top',
      'right',
      'bottom',
      'left',
      'top-start',
      'top-end',
      'right-start',
      'right-end',
      'bottom-start',
      'bottom-end',
      'left-start',
      'left-end',
    ],
    defaultValue: 'top',
  },
];

function Demo(props: { message: string; placement?: PopoverPlacement }) {
  return (
    <Tooltip {...props}>
      <Button>Trigger Element</Button>
    </Tooltip>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
