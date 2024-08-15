'use client';
import React, { useState } from 'react';
import { Language } from 'prism-react-renderer';
import styles from './CodeBlock.module.scss';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { ActionButton } from './ActionButton';
import { CodeBlockSection } from './CodeBlockSection';

interface CodeBlockProps {
  children: string;
  language?: Language;
  render?: React.ReactNode;
  title?: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = 'tsx',
  title,
  render,
  showLineNumbers = false,
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const handleToggle = () => {
    setIsCodeVisible((prev) => !prev);
  };

  const handleCopy = (text: any) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Code copied to clipboard!');
    });
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <div className={styles.fullWidth}>
          <div className={styles.headerContent}>
            {title && (
              <div className={styles.titleHeader}>
                <div className={styles.title}>{title}</div>
                <div className={styles.action}>
                  <ActionButton onClick={() => handleCopy(children.trim())} />
                </div>
              </div>
            )}
            {render}
          </div>
        </div>
      </section>
      <section className={`${styles.content}`}>
        <button className={`${styles.fullWidth}`} onClick={handleToggle}>
          <ChevronRightIcon
            className={`${isCodeVisible ? styles.rotate : ''}`}
          />
          {isCodeVisible ? 'Hide Code' : 'Show Code'}
        </button>
      </section>

      <CodeBlockSection
        onCopy={handleCopy}
        language={language}
        showLineNumbers={showLineNumbers}
        visible={isCodeVisible}
      >
        {children}
      </CodeBlockSection>
    </div>
  );
};

export { CodeBlock };
