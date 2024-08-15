import { Suspense } from 'react';
import UsageDocs from './usage-docs';
import { ComponentMeta } from '@/components/ComponentMeta';
import { meta } from './meta';
import { Loading } from '@/components/Usage/Loading';

export default function Index() {
  return (
    <ComponentMeta title={meta.title} subTitle={meta.subTitle}>
      <Suspense fallback={<Loading />}>
        <UsageDocs />
      </Suspense>
    </ComponentMeta>
  );
}
