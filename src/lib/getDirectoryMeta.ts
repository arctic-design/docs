import { MetaType } from '@/types';
import fs from 'fs';
import path from 'path';

export async function getDirectoryMeta(
  rootFeatureDir: string,
  featureDir: string,
) {
  const folders = fs.readdirSync(rootFeatureDir);

  const componentsMeta = await Promise.all(
    folders.map(async (folderName) => {
      const metaFilePath = path.join(rootFeatureDir, folderName, 'meta.ts');

      if (fs.existsSync(metaFilePath)) {
        const { meta } = await import(
          `../app/(side-nav)/${featureDir}/${folderName}/meta.ts`
        );

        const metaInfo: MetaType = {
          title: meta.title,
          subTitle: meta.subTitle,
          slug: `${featureDir}/${folderName}`, // Use folder name as slug
        };
        return metaInfo;
      }

      return undefined;
    }),
  );

  return componentsMeta.filter(Boolean);
}
