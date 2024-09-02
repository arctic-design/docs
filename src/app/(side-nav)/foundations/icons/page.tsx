import { Suspense } from 'react';
import styles from '@/styles/markdown.module.scss';
import Content from './content.mdx';

import Example from './example';
import ExampleSrc from './example.tsx?raw';

import ExampleTooltip from './exampleWithTooltip';
import ExampleTooltipSrc from './exampleWithTooltip.tsx?raw';

import ExampleButton from './exampleWithButton';
import ExampleButtonSrc from './exampleWithButton.tsx?raw';

import { CodeBlock } from '@/components/CodeBlock';
import { ArcticIcons } from './listIcons';
import { Loading } from '@/components/Usage/Loading';

export default function Index() {
  return (
    <div className={styles.container}>
      <Content />
      <Suspense fallback={<Loading />}>
        <ArcticIcons />
      </Suspense>

      <div className={styles.moreInfo}>
        <CodeBlock render={<Example />} title='Usage with IconButton'>
          {ExampleSrc}
        </CodeBlock>
        <CodeBlock render={<ExampleTooltip />} title='Usage with Tooltips'>
          {ExampleTooltipSrc}
        </CodeBlock>
        <CodeBlock render={<ExampleButton />} title='Usage with Buttons'>
          {ExampleButtonSrc}
        </CodeBlock>
      </div>
    </div>
  );
}
