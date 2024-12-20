'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  Button,
  Paper,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverOptions,
  PopoverTrigger,
  Stack,
} from '@arctic-kit/snow';
import { useCallback, useState } from 'react';
import { ChevronDownIcon } from '@arctic-kit/icons';
import { styled } from '@pigment-css/react';

const defaultCode = `
import { useState } from 'react';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverOptions,
  PopoverTrigger,
} from '@arctic-kit/snow';

function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Popover {{props}} open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          My Trigger
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeading>My popover heading</PopoverHeading>
          <PopoverDescription>My popover description</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}
`;

const customTriggerCode = `
import {
  Button,
  Paper,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from '@arctic-kit/snow';
import { useCallback, useState } from 'react';
import { ChevronDownIcon } from '@arctic-kit/icons';
import { styled } from '@pigment-css/react';

 const UserRoles = [
  { name: 'Member', description: 'Can view resources' },
  { name: 'Viewer', description: 'Can view and comment' },
  { name: 'Developer', description: 'Can view, comment and edit' },
  { name: 'Billing', description: 'Can view, comment and manage billing' },
  { name: 'Owner', description: 'Admin-level access to all resources' },
];

const RoleContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: 8,
  fontSize: 12,
  '&:hover': {
    backgroundColor: 'var(--snow-colors-grey-100)',
    cursor: 'default',
  },

  '.title': {
    fontWeight: 500,
  },
  '.description': {
    fontWeight: 400,
    color: 'var(--snow-colors-grey-700)',
  },

  '&.active': {
    backgroundColor: 'var(--snow-colors-primary-50)',
  },
}));

function UserRolePopover({
  setOpen,
  open,
  selectedRole,
  onRoleSelect,
}: {
  setOpen: (value: boolean) => void;
  open?: boolean;
  selectedRole: string;
  onRoleSelect: (role: string) => void;
}) {
  return (
    <Popover placement='bottom-start' open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={() => setOpen(!open)} asChild>
        <Button
          variant='outlined'
          style={{ fontSize: 12 }}
          suffix={<ChevronDownIcon style={{ width: 14 }} />}
          noHighlights
        >
          {selectedRole}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Stack
          style={{ maxHeight: 500, overflowY: 'auto', padding: 4 }}
          spacing={2}
        >
          {UserRoles.map((role) => (
            <RoleContainer
              key={role.name}
              onClick={() => onRoleSelect(role.name)}
              className={role.name === selectedRole ? 'active' : ''}
            >
              <div className='title'>{role.name}</div>
              <div className='description'>{role.description}</div>
            </RoleContainer>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  );
}

function Demo() {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(UserRoles[0].name);
  const onRoleSelect = useCallback((roleName: string) => {
    setSelectedRole(roleName);
    setOpen(false);
  }, []);

  return (
    <UserRolePopover
      open={open}
      setOpen={setOpen}
      selectedRole={selectedRole}
      onRoleSelect={onRoleSelect}
    />
  );
}
`;

const propDefs: ComponentPropDefs[] = [
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
    defaultValue: 'bottom-start',
  },
];

export function Demo(props: PopoverOptions) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Popover {...props} open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          Open popover
        </PopoverTrigger>
        <PopoverContent>
          <Paper elevation={0}>
            <PopoverHeading>My popover heading</PopoverHeading>
            <PopoverDescription>My popover description</PopoverDescription>
            <PopoverClose>Close</PopoverClose>
          </Paper>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const UserRoles = [
  { name: 'Member', description: 'Can view resources' },
  { name: 'Viewer', description: 'Can view and comment' },
  { name: 'Developer', description: 'Can view, comment and edit' },
  { name: 'Billing', description: 'Can view, comment and manage billing' },
  { name: 'Owner', description: 'Admin-level access to all resources' },
];

const RoleContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: 8,
  fontSize: 12,
  '&:hover': {
    backgroundColor: 'var(--snow-colors-grey-100)',
    cursor: 'default',
  },

  '.title': {
    fontWeight: 500,
  },
  '.description': {
    fontWeight: 400,
    color: 'var(--snow-colors-grey-700)',
  },

  '&.active': {
    backgroundColor: 'var(--snow-colors-grey-200)',
  },
}));

function UserRolePopover({
  setOpen,
  open,
  selectedRole,
  onRoleSelect,
}: {
  setOpen: (value: boolean) => void;
  open?: boolean;
  selectedRole: string;
  onRoleSelect: (role: string) => void;
}) {
  return (
    <Popover placement='bottom-start' open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={() => setOpen(!open)} asChild>
        <Button
          variant='outlined'
          style={{ fontSize: 12 }}
          suffix={<ChevronDownIcon style={{ width: 14 }} />}
          noHighlights
        >
          {selectedRole}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Stack
          style={{ maxHeight: 500, overflowY: 'auto', padding: 4 }}
          spacing={2}
        >
          {UserRoles.map((role) => (
            <RoleContainer
              key={role.name}
              onClick={() => onRoleSelect(role.name)}
              className={role.name === selectedRole ? 'active' : ''}
            >
              <div className='title'>{role.name}</div>
              <div className='description'>{role.description}</div>
            </RoleContainer>
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  );
}

function CustomTriggerDemo() {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(UserRoles[0].name);
  const onRoleSelect = useCallback((roleName: string) => {
    setSelectedRole(roleName);
    setOpen(false);
  }, []);

  return (
    <UserRolePopover
      open={open}
      setOpen={setOpen}
      selectedRole={selectedRole}
      onRoleSelect={onRoleSelect}
    />
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code: defaultCode,
  propDefs,
};

export const customTriggerCodeConfig: CodeConfigType = {
  component: CustomTriggerDemo,
  centered: true,
  maxWidth: 440,
  code: customTriggerCode,
  propDefs: [],
};
