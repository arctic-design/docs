import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FlatRoute, RouteMetadata } from '@/types';

const readDirectoryMetadata = (
  dirPath: string,
): { label?: string; order?: number } => {
  const metaPathMd = path.join(dirPath, '_meta.md');
  const metaPathMdx = path.join(dirPath, '_meta.mdx');
  let metadata: any = {};

  if (fs.existsSync(metaPathMd)) {
    const fileContents = fs.readFileSync(metaPathMd, 'utf8');
    if (matter.test(fileContents)) {
      const { data } = matter(fileContents);
      metadata = data;
    }
  } else if (fs.existsSync(metaPathMdx)) {
    const fileContents = fs.readFileSync(metaPathMdx, 'utf8');
    if (matter.test(fileContents)) {
      const { data } = matter(fileContents);
      metadata = data;
    }
  }

  return metadata;
};

const hasPageFile = (dirPath: string): boolean => {
  const pageFiles = ['page.tsx', 'page.mdx', 'page.md'];
  return pageFiles.some((file) => fs.existsSync(path.join(dirPath, file)));
};

const readMetadata = (dirPath: string, basePath = ''): RouteMetadata[] => {
  const results: RouteMetadata[] = [];
  const items = fs.readdirSync(dirPath);

  items.forEach((item) => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const routePath = path.join(basePath, item).replace(/\\/g, '/');
      const dirMetadata = readDirectoryMetadata(fullPath);

      // const pathUrl = hasPageFile(fullPath) ? `/${routePath}` : '';
      results.push({
        path: `/${routePath}`,
        clickable: hasPageFile(fullPath),
        label:
          dirMetadata.label ||
          item
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase()),
        order: dirMetadata.order,
        children: readMetadata(fullPath, routePath),
      });
    }
  });

  return results.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
};

// Flatten the route tree for easier pagination
export const flattenRoutes = (routes: RouteMetadata[]): FlatRoute[] => {
  const flatRoutes: FlatRoute[] = [];

  const traverseRoutes = (route: RouteMetadata) => {
    flatRoutes.push({
      path: route.path,
      label: route.label,
      clickable: route.clickable,
    });
    if (route.children) {
      route.children.forEach(traverseRoutes);
    }
  };

  routes.forEach(traverseRoutes);
  return flatRoutes;
};

export default readMetadata;
