export interface Mail {
  id: string;
  sender: {
    name: string;
    email: string;
    profileImgSrc: string;
  };
  subject: string;
  content: string;
  tags: string[];
  date: string; // ISO 8601 date string
  unread: boolean;
}

export enum MailType {
  Inbox = 'Inbox',
  Drafts = 'Drafts',
  Sent = 'Sent',
  Junk = 'Junk',
  Trash = 'Trash',
  Archive = 'Archive',
}

export type MailFilters = {
  unread: boolean;
};

export type MailboxState = {
  selected: MailType;
  onChange: (item: MailType) => void;
  selectedMailIndex: Record<MailType, number>;
  onChangeMailItem: (itemType: MailType, index: number) => void;
  onSetFilters: (filterKey: string, filterValue: boolean) => void;
  filters: MailFilters;
};
