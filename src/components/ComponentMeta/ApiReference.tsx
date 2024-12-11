import { fetchComponentDocs } from '@/app/(side-nav)/action';
import { PropsReference } from './PropsReference';

export async function ApiReference({ name }: { name: string }) {
  const data = await fetchComponentDocs();

  // Cast the result to `any` to avoid type conflicts
  const componentDoc = data.find((item: any) => item.displayName === name);

  return <PropsReference componentDoc={componentDoc} />;
}
