import { CodeBlockSection } from '@/components/CodeBlock';

const codeBlock = `
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
`;

export default function Index() {
  return <CodeBlockSection>{codeBlock}</CodeBlockSection>;
}
