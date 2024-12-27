import styles from './Feature.module.css';
import { SnowLink } from '../SnowLink';

interface FeatureProps {
  title: string;
  description: string;
  href?: string;
}

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  href,
}) => (
  <div className={styles.feature}>
    {href ? (
      <SnowLink href={href}>
        <h2>{title}</h2>
      </SnowLink>
    ) : (
      <h2>{title}</h2>
    )}
    <p>{description}</p>
  </div>
);
