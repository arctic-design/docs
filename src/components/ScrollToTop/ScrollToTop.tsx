'use client';
import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.scss';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label='Scroll to top'
      className={`${styles.scrollToTop} ${!isVisible ? styles.hidden : ''}`}
    >
      <span className={styles.icon}>↑</span>
    </button>
  );
}
