import { fetchDirectoryMeta } from '@/app/(side-nav)/action';
import { getAllContentDocuments } from '@/lib/content';
import { SearchableDocument } from '@/types';

import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

const stripMarkdown = async (content: string) => {
  const htmlContent = await marked.parse(content);
  const cleanText = DOMPurify.sanitize(htmlContent, { ALLOWED_TAGS: [] }); // Strip HTML tags
  return cleanText;
};

export async function getSearchContent() {
  const metaInfoFoundations = await fetchDirectoryMeta('foundations');
  const foundationDocs = metaInfoFoundations
    .filter((item) => !!item)
    .map((info) => ({
      id: info.title,
      slug: '/' + info.slug,
      content: info.subTitle,
      parentTitle: 'Foundations',
      parentSlug: '/foundations',
    }));
  const metaInfoComponents = await fetchDirectoryMeta('components');
  const componentDocs = metaInfoComponents
    .filter((item) => !!item)
    .map((info) => ({
      id: info.title,
      slug: '/' + info.slug,
      content: info.subTitle,
      parentTitle: 'Components',
      parentSlug: '/components',
    }));

  const gettingStartedInfo = getAllContentDocuments('getting-started');

  const gettingStartedDocs = await Promise.all(
    gettingStartedInfo
      .filter((item) => !!item)
      .map(async (info) => ({
        id: info.title,
        slug: '/' + info.slug,
        content: await stripMarkdown(info.content), // Strip content here
        parentTitle: 'Getting Started',
        parentSlug: '/getting-started',
      })),
  );

  const mergedContentDocs: SearchableDocument[] = gettingStartedDocs
    .concat(foundationDocs)
    .concat(componentDocs);

  return mergedContentDocs;
}
