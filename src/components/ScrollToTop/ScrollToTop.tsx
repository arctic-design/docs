'use client';
import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.scss';
import { ArrowLongUpIcon } from '@arctic-kit/icons';

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
      <ArrowLongUpIcon />
    </button>
  );
}
