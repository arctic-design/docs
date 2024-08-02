import path from 'path';
import getRoutes from '../../lib/getRoutes';

export async function fetchRoutes() {
  const routesDir = path.join(process.cwd(), 'src', 'app', '(side-nav)');
  const { tree, flat } = getRoutes(routesDir);
  return { tree, flat };
}
