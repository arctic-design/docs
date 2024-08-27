import { CodeConfigType, ComponentPropDefs } from '@/types';
import { ActionMenu, ActionMenuItem, ActionMenuProps } from '@arctic-kit/snow';

const code = `
import { ActionMenu, ActionMenuItem } from '@arctic-kit/snow';

function Demo() {
  return (
    <ActionMenu {{props}}>
      <ActionMenuItem label='Undo' onClick={() => console.log('Undo')} />
      <ActionMenuItem label='Redo' disabled />
      <ActionMenuItem label='Cut' />
      <ActionMenu label='Copy as' color='success'>
        <ActionMenuItem label='Text' />
        <ActionMenuItem label='Video' />
        <ActionMenu label='Image'>
          <ActionMenuItem label='.png' />
          <ActionMenuItem label='.jpg' />
          <ActionMenuItem label='.svg' />
          <ActionMenuItem label='.gif' />
        </ActionMenu>
        <ActionMenuItem label='Audio' />
      </ActionMenu>
      <ActionMenu label='Share'>
        <ActionMenuItem label='Mail' />
        <ActionMenuItem label='Instagram' />
      </ActionMenu>
      <ActionMenuItem label='Delete' color='error' />
    </ActionMenu>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'itemSize',
    type: 'segment',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
  {
    name: 'variant',
    type: 'segment',
    values: ['outlined', 'filled', 'text'],
    defaultValue: 'outlined',
  },
  {
    name: 'color',
    type: 'ddl',
    values: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    // defaultValue: 'info',
  },
  {
    name: 'label',
    type: 'text',
    defaultValue: 'Edit',
  },
  {
    name: 'disabled',
    type: 'boolean',
  },
];

function Demo(props: ActionMenuProps) {
  return (
    <ActionMenu {...props}>
      <ActionMenuItem label='Undo' onClick={() => console.log('Undo')} />
      <ActionMenuItem label='Redo' disabled />
      <ActionMenuItem label='Cut' />
      <ActionMenu label='Copy as' color='success'>
        <ActionMenuItem label='Text' />
        <ActionMenuItem label='Video' />
        <ActionMenu label='Image'>
          <ActionMenuItem label='.png' />
          <ActionMenuItem label='.jpg' />
          <ActionMenuItem label='.svg' />
          <ActionMenuItem label='.gif' />
        </ActionMenu>
        <ActionMenuItem label='Audio' />
      </ActionMenu>
      <ActionMenu label='Share'>
        <ActionMenuItem label='Mail' />
        <ActionMenuItem label='Instagram' />
      </ActionMenu>
      <ActionMenuItem label='Delete' color='error' />
    </ActionMenu>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
