import { MetaCards } from '@/components/MetaCards';
import { fetchDirectoryMeta } from '../action';

export default async function Index() {
  const metaInfo = await fetchDirectoryMeta();

  return <MetaCards metaInfo={metaInfo} />;
}
