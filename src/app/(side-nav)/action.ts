import path from 'path';
import getRoutes from '../../lib/getRoutes';
import { getDirectoryMeta } from '@/lib/getDirectoryMeta';

export async function fetchRoutes() {
  const routesDir = path.join(process.cwd(), 'src', 'app', '(side-nav)');
  const { tree, flat } = getRoutes(routesDir);
  return { tree, flat };
}

export async function fetchDirectoryMeta(directory: string) {
  const metaDir = path.join(
    process.cwd(),
    'src',
    'app',
    '(side-nav)',
    directory,
  );

  const directoryMeta = await getDirectoryMeta(metaDir, directory);
  return directoryMeta;
}
