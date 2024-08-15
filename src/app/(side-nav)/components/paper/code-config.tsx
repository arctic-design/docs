import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Paper, PaperProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';

const code = `
import { Paper } from '@arctic-kit/snow';

function Demo() {
  return (
    <Paper {{props}}>
      {{children}}
    </Paper>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'children',
    type: 'text',
    defaultValue: `Curabitur vel cursus odio. Nullam imperdiet massa in purus commodo
            luctus. Etiam et massa et metus volutpat imperdiet. Integer in nunc
            eu dui feugiat hendrerit. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.`,
  },
  {
    name: 'variant',
    type: 'ddl',
    values: ['elevation', 'outlined'],
    defaultValue: 'elevation',
  },
  { name: 'elevation', type: 'number', defaultValue: 1 },
  {
    name: 'color',
    type: 'ddl',
    values: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
  },
  {
    name: 'square',
    type: 'boolean',
    defaultValue: false,
  },
];

function Demo({ children, ...props }: PropsWithChildren<PaperProps>) {
  return <Paper {...props}>{children}</Paper>;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
  title: 'Paper',
  subTitle:
    'Provides a customizable surface with elevation or outlined variants to visually distinguish content with depth or borders.',
};
