'use client';
import { motion } from 'framer-motion';
import styles from './Feature.module.css';

interface FeatureProps {
  title: string;
  description: string;
}

export const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <motion.div
    className={styles.feature}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>{title}</h2>
    <p>{description}</p>
  </motion.div>
);
