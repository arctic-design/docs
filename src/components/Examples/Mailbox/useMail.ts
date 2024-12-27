'use client';
import { useCallback, useState } from 'react';
import { MailFilters, MailType, MailboxState } from './types';

const initialSeletedItemIndex: Record<MailType, number> = {
  [MailType.Inbox]: 0,
  [MailType.Drafts]: 0,
  [MailType.Sent]: 0,
  [MailType.Archive]: 0,
  [MailType.Trash]: 0,
  [MailType.Junk]: 0,
};

export function useMail(): MailboxState {
  const [selectedItemType, setSelectedItemType] = useState<MailType>(
    MailType.Inbox,
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState<
    Record<MailType, number>
  >(initialSeletedItemIndex);

  const [filters, setFilters] = useState<MailFilters>({ unread: false });

  const onChange = useCallback((item: MailType) => {
    setSelectedItemType(item);
  }, []);

  const onSetFilters = useCallback(
    (filterKey: string, filterValue: boolean) => {
      setFilters((prevState) => ({
        ...prevState,
        [filterKey]: filterValue,
      }));

      setSelectedItemIndex(initialSeletedItemIndex);
    },
    [],
  );

  const onChangeMailItem = useCallback((itemType: MailType, index: number) => {
    setSelectedItemIndex((prevState) => ({
      ...prevState,
      [itemType]: index,
    }));
  }, []);

  return {
    filters,
    selected: selectedItemType,
    selectedMailIndex: selectedItemIndex,
    onChange,
    onChangeMailItem,
    onSetFilters,
  };
}
