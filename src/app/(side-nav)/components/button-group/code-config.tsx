import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  ActionMenu,
  ActionMenuItem,
  Button,
  ButtonGroup,
  ButtonGroupProps,
} from '@arctic-kit/snow';

const code = `
import { ButtonGroup } from '@arctic-kit/snow';

function Demo() {
  return (
    <ButtonGroup {{props}}>
      <Button>First</Button>
      <Button>Second</Button>
      <Button disabled>Third</Button>
      <Button>Fourth</Button>
    </ButtonGroup>
  );
}
`;

const splitButtonCode = `
import { ActionMenu, ActionMenuItem, Button, ButtonGroup } from '@arctic-kit/snow';

function Demo() {
  return (
    <ButtonGroup {{props}}>
      <Button onClick={() => console.log('button')}>Button</Button>
      <ActionMenu placement='bottom-end'>
        <ActionMenuItem label='Undo' onClick={() => console.log('Undo')} />
        <ActionMenuItem
          label='Redo'
          disabled
          onClick={() => console.log('Redo')}
        />
        <ActionMenuItem label='Cut' onClick={() => console.log('Cut')} />
      </ActionMenu>
    </ButtonGroup>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'color',
    type: 'ddl',
    values: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
  },
  {
    name: 'variant',
    type: 'segment',
    values: ['filled', 'outlined', 'text'],
    defaultValue: 'outlined',
  },
  {
    name: 'size',
    type: 'segment',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
  {
    name: 'orientation',
    type: 'segment',
    values: ['horizontal', 'vertical'],
    defaultValue: 'horizontal',
  },

  {
    name: 'disabled',
    type: 'boolean',
  },
];

function Demo(props: ButtonGroupProps) {
  return (
    <ButtonGroup {...props}>
      <Button>First</Button>
      <Button>Second</Button>
      <Button disabled>Third</Button>
      <Button>Fourth</Button>
    </ButtonGroup>
  );
}

function SplitButton(props: ButtonGroupProps) {
  return (
    <ButtonGroup {...props}>
      <Button onClick={() => console.log('button')}>Button</Button>
      <ActionMenu placement='bottom-end'>
        <ActionMenuItem label='Undo' onClick={() => console.log('Undo')} />
        <ActionMenuItem
          label='Redo'
          disabled
          onClick={() => console.log('Redo')}
        />
        <ActionMenuItem label='Cut' onClick={() => console.log('Cut')} />
      </ActionMenu>
    </ButtonGroup>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  code,
  propDefs,
};

export const splitButtonCodeConfig: CodeConfigType = {
  component: SplitButton,
  code: splitButtonCode,
  propDefs: propDefs.filter((item) => item.name !== 'disabled'),
};
