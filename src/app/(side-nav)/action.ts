import path from 'path';
import getRoutes from '../../lib/getRoutes';
import { getDirectoryMeta } from '@/lib/getDirectoryMeta';
import { readFileSync } from 'fs';

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

export async function fetchComponentDocs() {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');
  const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
  const packageJson = JSON.parse(packageJsonContent);

  const snowVersionRaw = packageJson.dependencies['@arctic-kit/snow'];
  ('latest');

  // Clean the version string to remove any non-numeric prefix (e.g., "^4.2.0" -> "4.2.0")
  const cleanedSnowVersion = snowVersionRaw.replace(/^[^\d]+/, '');

  // Construct the CDN URL using the extracted version
  const url = `https://cdn.jsdelivr.net/npm/@arctic-kit/docs@${cleanedSnowVersion}/src/snow-component-docs.json`;

  try {
    const response = await fetch(url, { cache: 'force-cache' });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}
