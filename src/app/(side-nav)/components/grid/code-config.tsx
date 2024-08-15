import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Grid, GridColumn, GridRow, Paper } from '@arctic-kit/snow';

const code = `
import { Grid, GridColumn, GridRow, Paper } from '@arctic-kit/snow';

function Demo() {
  return (
    <Grid {{props}}>
      <GridRow>
        <GridColumn xs={12}>
          <Paper variant='outlined'>xs=12</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={4}>
          <Paper variant='outlined'>xs=12 sm=4</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={8}>
          <Paper variant='outlined'>xs=12 sm=8</Paper>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={6} md={12} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </GridColumn>

        <GridColumn xs={12} sm={8}>
          <Paper variant='outlined'>xs=12 sm=8</Paper>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'spacing',
    type: 'number',
    defaultValue: 1,
  },
];

function Demo(props: { spacing: number }) {
  return (
    <Grid {...props}>
      <GridRow>
        <GridColumn xs={12}>
          <Paper variant='outlined'>xs=12</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={4}>
          <Paper variant='outlined'>xs=12 sm=4</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={8}>
          <Paper variant='outlined'>xs=12 sm=8</Paper>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={6} md={4} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </GridColumn>
        <GridColumn xs={12} sm={6} md={12} lg={3}>
          <Paper variant='outlined'>xs=12 sm=6 md=4 lg=3</Paper>
        </GridColumn>

        <GridColumn xs={12} sm={8}>
          <Paper variant='outlined'>xs=12 sm=8</Paper>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
