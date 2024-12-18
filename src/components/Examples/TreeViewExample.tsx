'use client';
import {
  CodeBracketIcon,
  CssIcon,
  DocumentIcon,
  DocumentTextIcon,
  FolderArrowDownIcon,
  FolderIcon,
  FolderOpenIcon,
  GithubIcon,
  NpmIcon,
  TypeScriptCircleIcon,
  YarnIcon,
} from '@arctic-kit/icons';
import {
  TreeItem,
  TreeView,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Box,
} from '@arctic-kit/snow';

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

  if (name.endsWith('.gitignore')) {
    return <GithubIcon />;
  }

  if (name === 'yarn.lock') {
    return <YarnIcon />;
  }

  if (name.endsWith('.md')) {
    return <DocumentTextIcon />;
  }

  if (name.endsWith('.json')) {
    return <CodeBracketIcon />;
  }

  if (name.endsWith('.test.tsx') || name.endsWith('.spec.ts')) {
    return <TypeScriptCircleIcon />;
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
    label: 'public',
    prefix: (expanded) => (
      <PrefixRender expanded={expanded} type='folder' name='public' />
    ),
    suffix: () => <FolderArrowDownIcon />,
    items: [
      {
        id: '1-1',
        label: 'index.html',
        prefix: () => <PrefixRender type='file' name='index.html' />,
      },
      {
        id: '1-2',
        label: 'favicon.ico',
        prefix: () => <PrefixRender type='file' name='favicon.ico' />,
      },
    ],
  },
  {
    id: '2',
    label: 'src',
    prefix: (expanded) => (
      <PrefixRender expanded={expanded} type='folder' name='src' />
    ),
    suffix: () => <FolderArrowDownIcon />,
    items: [
      {
        id: '2-1',
        label: 'components',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='components' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '2-1-1',
            label: 'Button.tsx',
            prefix: () => <PrefixRender type='file' name='Button.tsx' />,
          },
          {
            id: '2-1-2',
            label: 'Button.module.css',
            prefix: () => <PrefixRender type='file' name='Button.module.css' />,
          },
          {
            id: '2-1-3',
            label: 'Accordion.tsx',
            prefix: () => <PrefixRender type='file' name='Accordion.tsx' />,
          },
          {
            id: '2-1-4',
            label: 'Accordion.module.css',
            prefix: () => (
              <PrefixRender type='file' name='Accordion.module.css' />
            ),
          },
        ],
      },
      {
        id: '2-2',
        label: 'hooks',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='hooks' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '2-2-1',
            label: 'useToggle.ts',
            prefix: () => <PrefixRender type='file' name='useToggle.ts' />,
          },
          {
            id: '2-2-2',
            label: 'useFetch.tsx',
            prefix: () => <PrefixRender type='file' name='useFetch.tsx' />,
          },
        ],
      },
      {
        id: '2-3',
        label: 'utils',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='utils' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '2-3-1',
            label: 'formatDate.ts',
            prefix: () => <PrefixRender type='file' name='formatDate.ts' />,
          },
          {
            id: '2-3-2',
            label: 'calculateSum.ts',
            prefix: () => <PrefixRender type='file' name='calculateSum.ts' />,
          },
        ],
      },
      {
        id: '2-4',
        label: 'assets',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='assets' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '2-4-1',
            label: 'logo.svg',
            prefix: () => <PrefixRender type='file' name='logo.svg' />,
          },
          {
            id: '2-4-2',
            label: 'background.png',
            prefix: () => <PrefixRender type='file' name='background.png' />,
          },
        ],
      },
      {
        id: '2-5',
        label: 'pages',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='pages' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '2-5-1',
            label: 'Home.tsx',
            prefix: () => <PrefixRender type='file' name='Home.tsx' />,
          },
          {
            id: '2-5-2',
            label: 'About.tsx',
            prefix: () => <PrefixRender type='file' name='About.tsx' />,
          },
          {
            id: '2-5-3',
            label: 'Contact.tsx',
            prefix: () => <PrefixRender type='file' name='Contact.tsx' />,
          },
        ],
      },
      {
        id: '2-6',
        label: '__tests__',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='__tests__' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '2-6-1',
            label: 'Button.test.tsx',
            prefix: () => <PrefixRender type='file' name='Button.test.tsx' />,
          },
          {
            id: '2-6-2',
            label: 'useToggle.test.ts',
            prefix: () => <PrefixRender type='file' name='useToggle.test.ts' />,
          },
        ],
      },
      {
        id: '2-7',
        label: 'App.tsx',
        prefix: () => <PrefixRender type='file' name='App.tsx' />,
      },
      {
        id: '2-8',
        label: 'index.tsx',
        prefix: () => <PrefixRender type='file' name='index.tsx' />,
      },
      {
        id: '2-9',
        label: 'setupTests.ts',
        prefix: () => <PrefixRender type='file' name='setupTests.ts' />,
      },
    ],
  },
  {
    id: '3',
    label: 'node_modules',
    prefix: (expanded) => (
      <PrefixRender expanded={expanded} type='folder' name='node_modules' />
    ),
    suffix: () => <FolderArrowDownIcon />,
    items: [
      {
        id: '3-1',
        label: 'react',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='react' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '3-1-1',
            label: 'index.d.ts',
            prefix: () => <PrefixRender type='file' name='index.d.ts' />,
          },
          {
            id: '3-1-2',
            label: 'package.json',
            prefix: () => <PrefixRender type='file' name='package.json' />,
          },
        ],
      },
      {
        id: '3-2',
        label: '@arctic-kit',
        prefix: (expanded) => (
          <PrefixRender expanded={expanded} type='folder' name='@arctic-kit' />
        ),
        suffix: () => <FolderArrowDownIcon />,
        items: [
          {
            id: '3-2-1',
            label: 'colors',
            prefix: (expanded) => (
              <PrefixRender expanded={expanded} type='folder' name='colors' />
            ),
            suffix: () => <FolderArrowDownIcon />,
            items: [
              {
                id: '3-2-1-1',
                label: 'index.d.ts',
                prefix: () => <PrefixRender type='file' name='index.d.ts' />,
              },
              {
                id: '3-2-1-2',
                label: 'package.json',
                prefix: () => <PrefixRender type='file' name='package.json' />,
              },
            ],
          },
          {
            id: '3-2-2',
            label: 'icons',
            prefix: (expanded) => (
              <PrefixRender expanded={expanded} type='folder' name='icons' />
            ),
            suffix: () => <FolderArrowDownIcon />,
            items: [
              {
                id: '3-2-2-1',
                label: 'index.d.ts',
                prefix: () => <PrefixRender type='file' name='index.d.ts' />,
              },
              {
                id: '3-2-2-2',
                label: 'package.json',
                prefix: () => <PrefixRender type='file' name='package.json' />,
              },
            ],
          },
          {
            id: '3-2-3',
            label: 'snow',
            prefix: (expanded) => (
              <PrefixRender expanded={expanded} type='folder' name='snow' />
            ),
            suffix: () => <FolderArrowDownIcon />,
            items: [
              {
                id: '3-2-3-1',
                label: 'index.d.ts',
                prefix: () => <PrefixRender type='file' name='index.d.ts' />,
              },
              {
                id: '3-2-3-2',
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
    id: '4',
    label: '.eslintrc.json',
    prefix: () => <PrefixRender type='file' name='.eslintrc.json' />,
  },
  {
    id: '5',
    label: '.prettierrc',
    prefix: () => <PrefixRender type='file' name='.prettierrc' />,
  },
  {
    id: '6',
    label: 'README.md',
    prefix: () => <PrefixRender type='file' name='README.md' />,
  },
  {
    id: '7',
    label: 'package.json',
    prefix: () => <PrefixRender type='file' name='package.json' />,
  },
  {
    id: '8',
    label: 'tsconfig.json',
    prefix: () => <PrefixRender type='file' name='tsconfig.json' />,
  },
  {
    id: '9',
    label: 'yarn.lock',
    prefix: () => <PrefixRender type='file' name='yarn.lock' />,
  },
  {
    id: '10',
    label: '.gitignore',
    prefix: () => <PrefixRender type='file' name='.gitignore' />,
  },
];

export function FolderStructure() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Directory</CardTitle>
        <CardDescription>
          Explore the comprehensive structure of your React application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Box
          sx={{ maxHeight: 400, overflowY: 'auto', padding: 4, paddingTop: 0 }}
        >
          <TreeView items={data} />
        </Box>
      </CardContent>
    </Card>
  );
}
