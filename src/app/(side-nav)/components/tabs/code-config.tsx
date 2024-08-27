import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  Box,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProps,
} from '@arctic-kit/snow';
import { useState } from 'react';

const code = `
import { useState } from 'react';
import {
  Box,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProps,
} from '@arctic-kit/snow';

function Demo() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box sx={{ marginBottom: 20, width: '100%', overflowX: 'auto' }}>
      <Tabs {{props}}>
        <Tab
          label='Drafts'
          selectedTabIndex={selectedTab}
          index={0}
          onClick={setSelectedTab}
        />
        <Tab
          label='In Progress'
          selectedTabIndex={selectedTab}
          index={1}
          onClick={setSelectedTab}
        />
        <Tab
          label='Ready for Review'
          selectedTabIndex={selectedTab}
          index={2}
          onClick={setSelectedTab}
        />
        <Tab
          label='On Hold'
          selectedTabIndex={selectedTab}
          index={3}
          onClick={setSelectedTab}
        />
        <Tab
          label='Complete'
          selectedTabIndex={selectedTab}
          index={4}
          onClick={setSelectedTab}
        />
      </Tabs>
      <TabPanels>
        <TabPanel label='Tab3' selected={selectedTab === 2}>
          Content for Tab3
        </TabPanel>
        <TabPanel label='Tab1' selected={selectedTab === 0}>
          Content for Tab1
        </TabPanel>
        <TabPanel label='Tab2' selected={selectedTab === 1}>
          Content for Tab2
        </TabPanel>
        <TabPanel label='Tab4' selected={selectedTab === 3}>
          Content for Tab4
        </TabPanel>
        <TabPanel label='Tab5' selected={selectedTab === 4}>
          Content for Tab5
        </TabPanel>
      </TabPanels>
    </Box>
  );
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
    name: 'fullWidth',
    type: 'boolean',
    defaultValue: false,
  },
];

function Demo(props: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box sx={{ marginBottom: 20, width: '100%', overflowX: 'auto' }}>
      <Tabs {...props}>
        <Tab
          label='Drafts'
          selectedTabIndex={selectedTab}
          index={0}
          onClick={setSelectedTab}
        />
        <Tab
          label='In Progress'
          selectedTabIndex={selectedTab}
          index={1}
          onClick={setSelectedTab}
        />
        <Tab
          label='In Review'
          selectedTabIndex={selectedTab}
          index={2}
          onClick={setSelectedTab}
        />
        <Tab
          label='On Hold'
          selectedTabIndex={selectedTab}
          index={3}
          onClick={setSelectedTab}
        />
        <Tab
          label='Complete'
          selectedTabIndex={selectedTab}
          index={4}
          onClick={setSelectedTab}
        />
      </Tabs>
      <TabPanels>
        <TabPanel label='Tab3' selected={selectedTab === 2}>
          Content for Tab3
        </TabPanel>
        <TabPanel label='Tab1' selected={selectedTab === 0}>
          Content for Tab1
        </TabPanel>
        <TabPanel label='Tab2' selected={selectedTab === 1}>
          Content for Tab2
        </TabPanel>
        <TabPanel label='Tab4' selected={selectedTab === 3}>
          Content for Tab4
        </TabPanel>
        <TabPanel label='Tab5' selected={selectedTab === 4}>
          Content for Tab5
        </TabPanel>
      </TabPanels>
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
