import { MetaCards } from '@/components/MetaCards';
import { fetchDirectoryMeta } from '../action';

export default async function Index() {
  const metaInfo = await fetchDirectoryMeta('components');

  return <MetaCards metaInfo={metaInfo} />;
}
