import { CodeBlockSection } from '@/components/CodeBlock';

const codeBlock = `
import { Button } from '@arctic-kit/snow';

function App() {
  return <Button>Click Me</Button>;
}

export default App;
`;

export default function Index() {
  return <CodeBlockSection language='tsx'>{codeBlock}</CodeBlockSection>;
}
