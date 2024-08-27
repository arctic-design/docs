import { CodeConfigType, ComponentPropDefs } from '@/types';

import { Demo as BasicExample } from './BasicExample';
import BasicExampleSrc from './BasicExample.tsx?raw';

import { Demo as ExampleWithIcons } from './ExampleWithIcons';
import CodeWithIconsSrc from './ExampleWithIcons.tsx?raw';

const propDefs: ComponentPropDefs[] = [];

export const codeConfig: CodeConfigType = {
  component: BasicExample,
  centered: true,
  maxWidth: 440,
  code: BasicExampleSrc,
  propDefs,
};

export const withIconsCodeConfig: CodeConfigType = {
  component: ExampleWithIcons,
  centered: true,
  maxWidth: 440,
  code: CodeWithIconsSrc,
  propDefs,
};
