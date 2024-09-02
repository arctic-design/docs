import { DocumentTextIcon } from '@arctic-kit/icons';
import styles from './List.module.scss';
import { SearchableDocument } from '@/types';
import { SnowLink } from '../SnowLink';

const highlightText = (text: string, query: string) => {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  const index = lowerText.indexOf(lowerQuery);
  if (index === -1) return text.substring(0, 80);

  const contextLength = 30;

  // Calculate start and end indices for the surrounding text
  const start = Math.max(0, index - contextLength);
  const end = Math.min(text.length, index + query.length + contextLength);

  const before = text.substring(start, index);
  const matchedText = text.substring(index, index + query.length);
  const after = text.substring(index + query.length, end);

  return (
    <span>
      {before}
      <span style={{ backgroundColor: 'yellow' }}>{matchedText}</span>
      {after}
    </span>
  );
};

export function List({
  items,
  query,
  onToggle,
}: {
  items: SearchableDocument[];
  query: string;
  onToggle: () => void;
}) {
  if (items.length === 0) {
    return <div>No results found</div>;
  }

  const onClickHandler = () => {
    setTimeout(() => {
      onToggle();
    }, 500);
  };

  return (
    <ul className={styles.container}>
      {items.map((item, index) => (
        <li key={index}>
          <SnowLink
            href={item.slug}
            className={`${styles.row} ${styles.title}`}
            onClick={onClickHandler}
          >
            <DocumentTextIcon strokeWidth={1} /> {item.id}
          </SnowLink>
          {query.trim() && (
            <SnowLink
              href={item.slug}
              className={`${styles.row} ${styles.content}`}
              onClick={onClickHandler}
            >
              {highlightText(item.content, query.trim() ? query : item.id)}
            </SnowLink>
          )}
        </li>
      ))}
    </ul>
  );
}
