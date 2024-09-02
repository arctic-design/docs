'use client';
import { MagnifyingGlassIcon } from '@arctic-kit/icons';
import { IconButton, TextInput, Modal, Box } from '@arctic-kit/snow';
import styles from './Searchbar.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Index as LunrIndex } from 'lunr';
import { SearchableDocument } from '@/types';
import { List } from './List';

type SearchbarProps = {
  docs: SearchableDocument[];
  searchIndex: string;
};
export function Searchbar({ searchIndex, docs }: SearchbarProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchableDocument[]>([]);
  const lunrIndexRef = useRef<LunrIndex | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!lunrIndexRef.current) {
      lunrIndexRef.current = LunrIndex.load(JSON.parse(searchIndex));
    }
  }, [searchIndex]);

  const debounce = (func: (...args: any[]) => void, timeout = 300) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, timeout);
    };
  };

  useEffect(() => {
    if (!open) {
      setResults(docs);
      setQuery('');
    }
  }, [open, docs]);

  useEffect(() => {
    const handleSearchInputClick = (event: MouseEvent) => {
      event.preventDefault();

      setOpen((prevState) => !prevState);
    };

    searchInputRef.current?.addEventListener('click', handleSearchInputClick);

    return () => {
      searchInputRef.current?.removeEventListener(
        'click',
        handleSearchInputClick,
      );
    };
  }, []);

  const handleSearch = useCallback(
    debounce((query: string) => {
      if (query) {
        const searchResults = lunrIndexRef.current!.search(query);
        setResults(
          searchResults.map(
            ({ ref }) =>
              docs.find((doc) => doc.id === ref) as SearchableDocument,
          ),
        );
      } else {
        setResults(docs);
      }
    }, 300),
    [],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setQuery(query);
    handleSearch(query);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === 'k') {
        event.preventDefault();

        setOpen((prevState) => !prevState);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <TextInput
        placeholder='Search the docs'
        prefix={<MagnifyingGlassIcon />}
        suffix={
          <IconButton size='small' onClick={() => setOpen(true)}>
            <span className={styles.shortcut}>
              <span className='textIcon'>⌘</span>
              <span>K</span>
            </span>
          </IconButton>
        }
        readOnly
        ref={searchInputRef}
        containerClassName={styles.searchBarInputDesktop}
      />
      <IconButton
        className={styles.searchBarInputMobile}
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon />
      </IconButton>
      <Modal
        hideHeader
        hideFooter
        open={open}
        onOpenChange={setOpen}
        size='medium'
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            minHeight: 200,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 8,
              borderBottom: '0.5px solid var(--snow-colors-grey-300)',
            }}
          >
            <input
              //   as='input'
              type='text'
              style={{
                height: 28,
                fontSize: 16,
                color: 'var(--snow-colors-grey-700)',
                border: 'none',
                outline: 'none',
                padding: 0,
                background: 'transparent',
                flex: 1,
              }}
              placeholder='Search the docs'
              value={query}
              onChange={handleInputChange}
            />
            <IconButton
              style={{ width: 'auto', padding: '2px 4px' }}
              onClick={() => setOpen(false)}
            >
              esc
            </IconButton>
          </Box>

          <List items={results} query={query} onToggle={() => setOpen(!open)} />
        </Box>
      </Modal>
    </>
  );
}
