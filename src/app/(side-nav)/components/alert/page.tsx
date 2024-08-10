import { CodeBlock } from '@/components/CodeBlock';
import Example from './example';
import ExampleSource from './example.tsx?raw';

export default function Index() {
  return (
    <div>
      <CodeBlock render={<Example />}>{ExampleSource}</CodeBlock>
    </div>
  );
}
