import { ClipboardDocumentIcon } from '@arctic-kit/icons';

import styles from './ActionButton.module.scss';

export function ActionButton({ onClick }: { onClick: () => void }) {
  return (
    <div>
      <button
        aria-label='Copy code'
        onClick={onClick}
        className={styles.actionButton}
      >
        <ClipboardDocumentIcon />
      </button>
    </div>
  );
}
