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
      let metaInfo: MetaType = {
        title: '',
        subTitle: '',
        slug: `${featureDir}/${folderName}`, // Use folder name as slug
      };

      const metaFilePath = path.join(rootFeatureDir, folderName, 'meta.ts');
      const codeConfigPath = path.join(
        rootFeatureDir,
        folderName,
        'code-config.tsx',
      );

      if (fs.existsSync(codeConfigPath)) {
        const { Demo } = await import(
          `../app/(side-nav)/${featureDir}/${folderName}/code-config.tsx`
        );

        metaInfo.component = Demo;
      }

      if (fs.existsSync(metaFilePath)) {
        const { meta } = await import(
          `../app/(side-nav)/${featureDir}/${folderName}/meta.ts`
        );

        metaInfo.title = meta.title;
        metaInfo.subTitle = meta.subTitle;

        return metaInfo;
      }

      return undefined;
    }),
  );

  return componentsMeta.filter(Boolean);
}
