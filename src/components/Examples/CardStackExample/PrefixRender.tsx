'use client';
import {
  CodeBracketIcon,
  CssIcon,
  DocumentIcon,
  FolderIcon,
  FolderOpenIcon,
  GithubIcon,
  NpmIcon,
  TypeScriptCircleIcon,
  YarnIcon,
} from '@arctic-kit/icons';

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
    return <DocumentIcon />;
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

export default PrefixRender;
