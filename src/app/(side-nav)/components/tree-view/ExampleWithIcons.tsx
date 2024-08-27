import {
  CssIcon,
  DocumentIcon,
  FolderArrowDownIcon,
  FolderIcon,
  FolderOpenIcon,
  GithubIcon,
  NpmIcon,
  TypeScriptCircleIcon,
  YarnIcon,
} from '@arctic-kit/icons';
import { TreeItem, Box, TreeView } from '@arctic-kit/snow';

function PrefixRender({
  expanded,
  type,
  name,
}: {
  expanded?: boolean;
  type: 'file' | 'folder';
  name: string;
}) {
  if (name.endsWith('package.json')) {
    return <NpmIcon />;
  }

  if (
    name.endsWith('.ts') ||
    name.endsWith('.tsx') ||
    name.endsWith('tsconfig.json')
  ) {
    return <TypeScriptCircleIcon />;
  }

  if (name.endsWith('.css')) {
    return <CssIcon />;
  }

  if (name.endsWith('.git')) {
    return <GithubIcon />;
  }

  if (name === 'yarn.lock') {
    return <YarnIcon />;
  }

  if (type === 'file') {
    return <DocumentIcon />;
  }

  if (type === 'folder') {
    return expanded ? (
      <FolderOpenIcon fill='var(--snow-colors-warning-500)' />
    ) : (
      <FolderIcon fill='var(--snow-colors-warning-500)' />
    );
  }

  return null;
}

const data: TreeItem[] = [
  {
    id: '1',
    label: 'src',
    prefix: (expanded) => (
      <PrefixRender expanded={expanded} type='folder' name='src' />
    ),
    suffix: () => <FolderArrowDownIcon />,
    items: [
      {
        id: '1-1',
        label: 'components',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='components' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '1-1-1',
            label: 'Accordion.tsx',
            prefix: () => <PrefixRender type='file' name='Accordion.tsx' />,
          },
          {
            id: '1-1-2',
            label: 'Tree.tsx',
            prefix: () => <PrefixRender type='file' name='Tree.tsx' />,
          },
          {
            id: '1-1-3',
            label: 'Button.tsx',
            prefix: () => <PrefixRender type='file' name='Button.tsx' />,
          },
          {
            id: '1-1-4',
            label: 'Button.module.css',
            prefix: () => <PrefixRender type='file' name='Button.module.css' />,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'node_modules',
    prefix: (expanded) => (
      <PrefixRender expanded={expanded} type='folder' name='node_modules' />
    ),
    suffix: () => <FolderArrowDownIcon />,
    items: [
      {
        id: '2-1',
        label: 'react',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='react' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '2-1-1',
            label: 'index.d.ts',
            prefix: () => <PrefixRender type='file' name='index.d.ts' />,
          },
          {
            id: '2-1-2',
            label: 'package.json',
            prefix: () => <PrefixRender type='file' name='package.json' />,
          },
        ],
      },
      {
        id: '2-2',
        label: '@arctic-kit',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='@arctic-kit' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '2-2-1',
            label: 'colors',
            prefix: (expanded) => (
              <PrefixRender expanded={expanded} type='folder' name='core' />
            ),
            suffix: () => <FolderArrowDownIcon />,
            items: [
              {
                id: '2-2-1-1',
                label: 'index.d.ts',
                prefix: () => <PrefixRender type='file' name='index.d.ts' />,
              },
              {
                id: '2-2-1-2',
                label: 'package.json',
                prefix: () => <PrefixRender type='file' name='package.json' />,
              },
            ],
          },
          {
            id: '2-2-2',
            label: 'icons',
            suffix: () => <FolderArrowDownIcon />,
            prefix: (expanded) => (
              <PrefixRender expanded={expanded} type='folder' name='hooks' />
            ),
            items: [
              {
                id: '2-2-2-1',
                label: 'index.d.ts',
                prefix: () => <PrefixRender type='file' name='index.d.ts' />,
              },
              {
                id: '2-2-2-2',
                label: 'package.json',
                prefix: () => <PrefixRender type='file' name='package.json' />,
              },
            ],
          },
          {
            id: '2-2-3',
            label: 'snow',
            prefix: (expanded) => (
              <PrefixRender expanded={expanded} type='folder' name='form' />
            ),
            suffix: () => <FolderArrowDownIcon />,
            items: [
              {
                id: '2-2-3-1',
                label: 'index.d.ts',
                prefix: () => <PrefixRender type='file' name='index.d.ts' />,
              },
              {
                id: '2-2-3-2',
                label: 'package.json',
                prefix: () => <PrefixRender type='file' name='package.json' />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'package.json',
    prefix: () => <PrefixRender type='file' name='package.json' />,
  },
  {
    id: '4',
    label: 'tsconfig.json',
    prefix: () => <PrefixRender type='file' name='tsconfig.json' />,
  },
  {
    id: '5',
    label: 'yarn.lock',
    prefix: () => <PrefixRender type='file' name='yarn.lock' />,
  },
  {
    id: '6',
    label: '.git',
    prefix: () => <PrefixRender type='file' name='.git' />,
  },
];

export function Demo() {
  return (
    <Box sx={{ minHeight: 600, minWidth: 250 }}>
      <TreeView items={data} />
    </Box>
  );
}
