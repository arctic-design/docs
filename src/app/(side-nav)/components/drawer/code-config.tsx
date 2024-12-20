'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  Autocomplete,
  Box,
  Button,
  Drawer,
  DrawerProps,
  Grid,
  GridColumn,
  GridRow,
  SegmentedControl,
  SegmentedControlButton,
  Select,
  TextInput,
} from '@arctic-kit/snow';
import { useState } from 'react';

const code = `
import { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Drawer,
  DrawerProps,
  Grid,
  GridColumn,
  GridRow,
  SegmentedControl,
  SegmentedControlButton,
  Select,
  TextInput,
} from '@arctic-kit/snow';

function Demo() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Button onClick={toggleDrawer}>Toggle Drawer</Button>
      <Drawer
        {{props}}
        open={isDrawerOpen}
        onOpenChange={toggleDrawer}
        onCancel={toggleDrawer}
        onAction={toggleDrawer}
        onClose={toggleDrawer}
      >
        <Grid spacing={1}>
          <GridRow>
            <GridColumn xs={12} lg={6}>
              <SegmentedControl>
                <SegmentedControlButton>React</SegmentedControlButton>
                <SegmentedControlButton>Angular</SegmentedControlButton>
                <SegmentedControlButton>Vue</SegmentedControlButton>
              </SegmentedControl>
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <TextInput label='First name' />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <TextInput label='Second name' />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <Select
                label='Fruit'
                options={[
                  'Apple',
                  'Banana',
                  'Orange',
                  'Mango',
                  'Pineapple',
                  'Grapes',
                  'Strawberry',
                  'Watermelon',
                  'Kiwi',
                  'Peach',
                  'Plum',
                ]}
                placeholder='Select a fruit'
              />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <Autocomplete
                label='Car'
                options={['Audi', 'BMW', 'Chevrolet', 'Dodge']}
                placeholder='Select a car'
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Drawer>
    </Box>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  { name: 'title', type: 'text', defaultValue: 'Drawer Title' },
  { name: 'titleFooter', type: 'text', defaultValue: 'Title Footer section' },
  {
    name: 'position',
    type: 'segment',
    values: ['left', 'right', 'top', 'bottom'],
    defaultValue: 'left',
  },
  {
    name: 'size',
    type: 'ddl',
    values: ['small', 'medium', 'large', 'extraSmall', 'fullWidth'],
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

export function Demo(props: DrawerProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Button onClick={toggleDrawer}>Toggle Drawer</Button>
      <Drawer
        {...props}
        open={isDrawerOpen}
        onOpenChange={toggleDrawer}
        onCancel={toggleDrawer}
        onAction={toggleDrawer}
        onClose={toggleDrawer}
      >
        <Grid spacing={1}>
          <GridRow>
            <GridColumn xs={12} lg={6}>
              <SegmentedControl>
                <SegmentedControlButton>React</SegmentedControlButton>
                <SegmentedControlButton>Angular</SegmentedControlButton>
                <SegmentedControlButton>Vue</SegmentedControlButton>
              </SegmentedControl>
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <TextInput label='First name' />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <TextInput label='Second name' />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <Select
                label='Fruit'
                options={[
                  'Apple',
                  'Banana',
                  'Orange',
                  'Mango',
                  'Pineapple',
                  'Grapes',
                  'Strawberry',
                  'Watermelon',
                  'Kiwi',
                  'Peach',
                  'Plum',
                ]}
                placeholder='Select a fruit'
              />
            </GridColumn>
            <GridColumn xs={12} lg={6}>
              <Autocomplete
                label='Car'
                options={['Audi', 'BMW', 'Chevrolet', 'Dodge']}
                placeholder='Select a car'
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Drawer>
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
