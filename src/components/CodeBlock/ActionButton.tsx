import { CheckIcon, ClipboardDocumentIcon } from '@arctic-kit/icons';
import styles from './ActionButton.module.scss';
import { useEffect, useState, useCallback } from 'react';

interface ActionButtonProps {
  onClick: () => void;
  timeout?: number; // Duration to show the "clicked" state (in milliseconds)
  ariaLabel?: string; // Accessible label for the button
}

export function ActionButton({
  onClick,
  timeout = 3000,
  ariaLabel = 'Copy code',
}: ActionButtonProps) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (clicked) {
      timer = setTimeout(() => {
        setClicked(false);
      }, timeout);
    }

    // Cleanup the timeout if the component unmounts or if `clicked` changes
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [clicked, timeout]);

  const handleClick = useCallback(() => {
    setClicked(true);
    onClick();
  }, [onClick]);

  return (
    <button
      type='button'
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`${styles.actionButton} ${clicked ? styles.clicked : ''}`}
      disabled={clicked} // Optional: Disable button while in clicked state
    >
      {/* Render both icons with distinct classes for targeting in CSS */}
      <ClipboardDocumentIcon className={styles.clipboardIcon} />
      <CheckIcon className={styles.checkIcon} />
    </button>
  );
}
