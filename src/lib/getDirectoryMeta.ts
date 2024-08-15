import { MetaType } from '@/types';
import fs from 'fs';
import path from 'path';

export async function getDirectoryMeta(featureDir: string) {
  const folders = fs.readdirSync(featureDir);

  const componentsMeta = await Promise.all(
    folders.map(async (folderName) => {
      const metaFilePath = path.join(featureDir, folderName, 'meta.ts');

      if (fs.existsSync(metaFilePath)) {
        const { meta } = await import(
          `../app/(side-nav)/components/${folderName}/meta.ts`
        );

        const metaInfo: MetaType = {
          title: meta.title,
          subTitle: meta.subTitle,
          slug: folderName, // Use folder name as slug
        };
        return metaInfo;
      }

      return undefined;
    }),
  );

  return componentsMeta.filter(Boolean);
}
