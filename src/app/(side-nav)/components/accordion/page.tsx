import { Suspense } from 'react';
import UsageDocs from './usage-docs';
import { ComponentMeta } from '@/components/ComponentMeta';
import { codeConfig } from './code-config';
import { Loading } from '@/components/Usage/Loading';

export default function Index() {
  return (
    <ComponentMeta title={codeConfig.title} subTitle={codeConfig.subTitle}>
      <Suspense fallback={<Loading />}>
        <UsageDocs />
      </Suspense>
    </ComponentMeta>
  );
}
