'use client';
import { ChevronDownIcon } from '@arctic-kit/icons';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  List,
  ListItem,
  ListItemDescription,
  ListItemTitle,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from '@arctic-kit/snow';
import { styled } from '@pigment-css/react';
import { useState } from 'react';

const UserRoles = [
  { name: 'Member', description: 'Can view resources' },
  { name: 'Viewer', description: 'Can view and comment' },
  { name: 'Editor', description: 'Can view, comment and edit' },
  { name: 'Billing', description: 'Can view, comment and manage billing' },
  { name: 'Owner', description: 'Admin-level access to all resources' },
];

interface TeamMember {
  name: string;
  email: string;
  id: string;
  imgUrl: string;
}

interface UserRole {
  open: boolean;
  role: string;
}

const TeamMembers: TeamMember[] = [
  {
    name: 'Sofia Davis',
    email: 'sdavis@example.com',
    imgUrl: '/avatars/girl1.png',
    id: 'sofia',
  },
  {
    name: 'Jackson Lee',
    email: 'jlee@example.com',
    imgUrl: '/avatars/boy1.png',
    id: 'jackson',
  },
  {
    name: 'Isabella Nguyen',
    email: 'inguyen@example.com',
    imgUrl: '/avatars/girl2.png',
    id: 'isabella',
  },
];

const initialUserRoles: Record<string, UserRole> = TeamMembers.reduce(
  (accumulator, currentValue) => ({
    ...accumulator,
    [currentValue.id]: { open: false, role: UserRoles[0].name },
  }),
  {},
);

const RoleContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  padding: '8px !important',
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
    color: 'var(--snow-colors-grey-800)',
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

export function InviteTeamMembers() {
  const [userRoles, setUserRoles] =
    useState<Record<string, UserRole>>(initialUserRoles);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <List>
          {TeamMembers.map((member) => (
            <ListItem
              key={member.id}
              prefix={
                <Avatar
                  src={member.imgUrl}
                  alt={member.name}
                  bgColor='secondary'
                />
              }
              suffix={
                <UserRolePopover
                  open={userRoles[member.id].open}
                  setOpen={() =>
                    setUserRoles((prevValue) => ({
                      ...prevValue,
                      [member.id]: {
                        ...prevValue[member.id],
                        open: !prevValue[member.id].open,
                      },
                    }))
                  }
                  selectedRole={userRoles[member.id].role}
                  onRoleSelect={(role) =>
                    setUserRoles((prevValue) => ({
                      ...prevValue,
                      [member.id]: {
                        ...prevValue[member.id],
                        open: false,
                        role,
                      },
                    }))
                  }
                />
              }
            >
              <ListItemTitle>{member.name}</ListItemTitle>
              <ListItemDescription>{member.email}</ListItemDescription>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
