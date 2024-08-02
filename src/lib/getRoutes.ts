import { FlatRoute, Route, RouteMetadata } from '@/types';
import readMetadata, { flattenRoutes } from './readMetadata';

const getRoutes = (
  dirPath: string,
  basePath = '',
): { tree: RouteMetadata[]; flat: FlatRoute[] } => {
  const tree = readMetadata(dirPath, basePath);
  const flat = flattenRoutes(tree);

  return { tree, flat };
};

export default getRoutes;
