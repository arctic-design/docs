import { Grid, GridColumn, GridRow, Stack } from '@arctic-kit/snow';
import { CreateEventExample } from './CardExample';
import { CookieSettingsExample } from './ListExample';
import { InviteTeamMembers } from './PopoverExample';
import { SubscriptionExample } from './ToggleGroupExample';
import { FolderStructure } from './TreeViewExample';
import { FAQAccordion } from './AccordionExample';
import { DemoWithAccordion } from './CardStackExample/DemoWithAccordion';

export function Examples() {
  return (
    <Grid spacing={3}>
      <GridRow>
        <GridColumn xs={12} md={6} xl={4}>
          <Stack spacing={3}>
            <InviteTeamMembers />
            <CookieSettingsExample />
            <CreateEventExample />
          </Stack>
        </GridColumn>
        <GridColumn xs={12} md={6} xl={4} xxl={4}>
          <Stack spacing={3}>
            <SubscriptionExample />
            <FolderStructure />
          </Stack>
        </GridColumn>
        <GridColumn xs={12} md={6} xl={4} xxl={4}>
          <Stack spacing={3}>
            <FAQAccordion />
            <DemoWithAccordion />
          </Stack>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
