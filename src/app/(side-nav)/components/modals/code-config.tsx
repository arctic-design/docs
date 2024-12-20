'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Box, Button, Modal, ModalProps } from '@arctic-kit/snow';
import { useState } from 'react';

const code = `
import { useState } from 'react';
import { Box, Button, Modal, ModalProps } from '@arctic-kit/snow';

function Demo() {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal
        {{props}}
        open={open}
        onOpenChange={toggleModal}
        onCancel={toggleModal}
        onAction={toggleModal}
      >
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vehicula odio at efficitur fringilla. Duis vel urna eu elit congue
            dapibus et sit amet justo. Quisque ac mi sed metus sagittis
            elementum. Sed sed urna vel elit cursus sodales ac non mauris.
          </p>
          <p>
            Vestibulum rhoncus sapien in sem cursus, id consectetur justo
            sodales. Aliquam erat volutpat. In hac habitasse platea dictumst.
            Integer gravida odio in volutpat facilisis. Quisque non semper
            augue. Duis vel libero nec eros facilisis fermentum.
          </p>
          <p>
            Curabitur vel cursus odio. Nullam imperdiet massa in purus commodo
            luctus. Etiam et massa et metus volutpat imperdiet. Integer in nunc
            eu dui feugiat hendrerit. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </>
      </Modal>
    </Box>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  { name: 'title', type: 'text', defaultValue: 'Drawer Title' },
  { name: 'titleFooter', type: 'text', defaultValue: 'Title Footer section' },
  {
    name: 'size',
    type: 'ddl',
    values: ['small', 'medium', 'large', 'extraSmall', 'extraLarge'],
    defaultValue: 'medium',
  },
  { name: 'cancelLabel', type: 'text', defaultValue: 'Cancel' },
  { name: 'actionLabel', type: 'text', defaultValue: 'Save' },
  {
    name: 'actionSize',
    type: 'segment',
    values: ['small', 'medium', 'large'],
    defaultValue: 'medium',
  },
  {
    name: 'hideHeader',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'hideFooter',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'disableOutsidePressAndEscape',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'loading',
    type: 'boolean',
    defaultValue: false,
  },
];

export function Demo(props: ModalProps) {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal
        {...props}
        open={open}
        onOpenChange={toggleModal}
        onCancel={toggleModal}
        onAction={toggleModal}
      >
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vehicula odio at efficitur fringilla. Duis vel urna eu elit congue
            dapibus et sit amet justo. Quisque ac mi sed metus sagittis
            elementum. Sed sed urna vel elit cursus sodales ac non mauris.
          </p>
          <p>
            Vestibulum rhoncus sapien in sem cursus, id consectetur justo
            sodales. Aliquam erat volutpat. In hac habitasse platea dictumst.
            Integer gravida odio in volutpat facilisis. Quisque non semper
            augue. Duis vel libero nec eros facilisis fermentum.
          </p>
          <p>
            Curabitur vel cursus odio. Nullam imperdiet massa in purus commodo
            luctus. Etiam et massa et metus volutpat imperdiet. Integer in nunc
            eu dui feugiat hendrerit. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </>
      </Modal>
    </Box>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
