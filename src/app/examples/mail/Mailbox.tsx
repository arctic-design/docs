'use client';
import {
  ActionMenu,
  ActionMenuItem,
  Box,
  IconButton,
  SegmentedControl,
  SegmentedControlButton,
} from '@arctic-kit/snow';
import styles from './Mailbox.module.scss';
import { CogIcon, EllipsisVerticalIcon } from '@arctic-kit/icons';
import { MailboxItemTypes } from './mailbox-item-types';
import { MailboxItems } from './mailbox-items';
import { useMail } from './useMail';
import { MailboxItem } from './mailbox-item';
import { MailboxAItemActions } from './mailbox-item-actions';

export function Mailbox() {
  const {
    selected,
    onChange,
    selectedMailIndex,
    onChangeMailItem,
    filters,
    onSetFilters,
  } = useMail();
  return (
    <div className={styles.mailBox}>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <ActionMenu label='John Wick' prefix={<CogIcon />} fullWidth>
            <ActionMenuItem label='john.wick@example.com' />
            <ActionMenuItem label='john.wick@gmail.com' />
            <ActionMenuItem label='john.wick@me.com' />
          </ActionMenu>
        </div>
        <div className={styles.content}>
          <MailboxItemTypes selected={selected} onChange={onChange} />
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.header}>
          <Box sx={{ fontWeight: 700, fontSize: 20 }}>{selected}</Box>
          <SegmentedControl>
            <SegmentedControlButton
              onClick={() => onSetFilters('unread', false)}
            >
              All mail
            </SegmentedControlButton>
            <SegmentedControlButton
              onClick={() => onSetFilters('unread', true)}
            >
              Unread
            </SegmentedControlButton>
          </SegmentedControl>
        </div>
        <div className={styles.content}>
          <MailboxItems
            selected={selected}
            onChange={onChange}
            selectedMailIndex={selectedMailIndex}
            onChangeMailItem={onChangeMailItem}
            filters={filters}
            onSetFilters={onSetFilters}
          />
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.header}>
          <div className={styles.itemActions}>
            <MailboxAItemActions />
          </div>
          <ActionMenu
            renderContent={
              <IconButton noBorder>
                <EllipsisVerticalIcon />
              </IconButton>
            }
            noBorder
          >
            <ActionMenuItem label='Marks as unread' />
            <ActionMenuItem label='Star thread' />
            <ActionMenuItem label='Add label' />
            <ActionMenuItem label='Mute thread' />
          </ActionMenu>
        </div>
        <div className={styles.content}>
          <MailboxItem
            selected={selected}
            selectedMailIndex={selectedMailIndex}
            filters={filters}
          />
        </div>
      </div>
    </div>
  );
}
