'use client';
import { DocumentDuplicateIcon, CheckIcon } from '@arctic-kit/icons';
import { IconButton } from '@arctic-kit/snow';
import styles from './listIcons.module.scss';
import { useState } from 'react';

export function CopyIconButton({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);
  const onCopyHandler = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Show the tick for 2 seconds
  };
  return (
    <IconButton
      onClick={() =>
        onCopyHandler(`import { ${name} } from '@arctic-kit/icons';`)
      }
      size='small'
      className={styles.copyButton}
    >
      {copied ? <CheckIcon color='green' /> : <DocumentDuplicateIcon />}
    </IconButton>
  );
}
