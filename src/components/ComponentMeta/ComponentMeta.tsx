import Image from 'next/image';
import { PropsWithChildren } from 'react';
import styles from './ComponentMeta.module.scss';
import { SnowLink } from '../SnowLink';
const gitSourceBasePath =
  'https://github.com/arctic-design/arctic-kit/tree/main/packages/snow/src/lib';

const storybookBasePath =
  'https://main--6698d2827829aaad6dc5d14f.chromatic.com/?path=/docs';

const basePath = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

type ComponentMetaProps = {
  title: string;
  subTitle: string;
};
export function ComponentMeta({
  title,
  subTitle,
  children,
}: PropsWithChildren<ComponentMetaProps>) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subTitle}>{subTitle}</h2>
      <div className={styles.meta}>
        <div className={styles.row}>
          <Image
            alt='npm logo'
            src={`https://raw.githubusercontent.com/npm/logos/master/npm%20square/n.svg`}
            width={16}
            height={16}
            priority
          />
          <SnowLink
            href='https://www.npmjs.com/package/@arctic-kit/snow'
            target='_blank'
          >
            @arctic-kit/snow
          </SnowLink>
        </div>
        <div className={styles.row}>
          <Image
            alt='github-mark logo'
            src={`${basePath}/images/github-mark.png`}
            width={16}
            height={16}
            priority
          />
          <SnowLink href={`${gitSourceBasePath}/${title}`} target='_blank'>
            View source code
          </SnowLink>
        </div>
        <div className={styles.row}>
          <Image
            alt='icon-storybook-default logo'
            src={`https://raw.githubusercontent.com/storybookjs/brand/main/icon/icon-storybook-default.svg`}
            width={16}
            height={16}
            priority
          />
          <SnowLink
            href={`${storybookBasePath}/${title?.toLocaleLowerCase()}`}
            target='_blank'
          >
            View storybook
          </SnowLink>
        </div>
      </div>
      <div className={styles.usageContent}>{children}</div>
    </div>
  );
}
