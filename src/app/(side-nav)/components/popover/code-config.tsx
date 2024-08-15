'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  IconButton,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverOptions,
  PopoverTrigger,
} from '@arctic-kit/snow';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

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
import { useState } from 'react';
import {
  IconButton,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverOptions,
  PopoverTrigger,
} from '@arctic-kit/snow';
 import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Popover {{props}} open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)} asChild>
          <IconButton>
            <EllipsisHorizontalIcon />
          </IconButton>
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

function DefaultDemo(props: PopoverOptions) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Popover {...props} open={open} onOpenChange={setOpen}>
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

function CustomTriggerDemo(props: PopoverOptions) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Popover {...props} open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)} asChild>
          <IconButton>
            <EllipsisHorizontalIcon />
          </IconButton>
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

export const codeConfig: CodeConfigType = {
  component: DefaultDemo,
  centered: true,
  maxWidth: 440,
  code: defaultCode,
  propDefs,
  title: 'Popover',
  subTitle:
    'Displays a floating, contextual overlay anchored to a trigger element, providing additional information or actions.',
};

export const customTriggerCodeConfig: CodeConfigType = {
  component: CustomTriggerDemo,
  centered: true,
  maxWidth: 440,
  code: customTriggerCode,
  propDefs,
  title: 'Popover',
  subTitle:
    'Displays a floating, contextual overlay anchored to a trigger element, providing additional information or actions.',
};
