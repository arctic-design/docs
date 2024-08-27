'use client';
import { MagnifyingGlassIcon } from '@arctic-kit/icons';
import { TextInput } from '@arctic-kit/snow';
import styles from './listIcons.module.scss';
import { useState, useEffect } from 'react';

type SearchIconsProps = {
  render: (text: string) => React.ReactNode;
};

export function SearchableIcons({ render }: SearchIconsProps) {
  const [value, setValue] = useState(''); // Current input value
  const [debouncedValue, setDebouncedValue] = useState(''); // Debounced input value

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 300); // Delay of 300ms

    // Cleanup function to clear the timeout if the value changes before the delay
    return () => {
      clearTimeout(handler);
    };
  }, [value]); // Re-run the effect whenever `value` changes

  return (
    <>
      <div className={styles.inputContainer}>
        <TextInput
          placeholder='Search icons'
          prefix={<MagnifyingGlassIcon />}
          size='large'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      {render(debouncedValue)}
    </>
  );
}
