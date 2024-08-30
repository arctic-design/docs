'use client';
import { motion } from 'framer-motion';
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
  <motion.div
    className={styles.feature}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {href ? (
      <SnowLink href={href}>
        <h2>{title}</h2>
      </SnowLink>
    ) : (
      <h2>{title}</h2>
    )}
    <p>{description}</p>
  </motion.div>
);
