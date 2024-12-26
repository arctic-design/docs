import {
  InboxIcon,
  EnvelopeOpenIcon,
  EnvelopeIcon,
  TrashIcon,
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
} from '@arctic-kit/icons';
import { List, ListItem, ListItemTitle } from '@arctic-kit/snow';
import { MailboxState, MailType } from './types';
import { Data } from './data';

const MailTypeIcon: Record<MailType, React.ReactNode> = {
  [MailType.Inbox]: <InboxIcon />,
  [MailType.Drafts]: <EnvelopeOpenIcon />,
  [MailType.Sent]: <EnvelopeIcon />,
  [MailType.Trash]: <TrashIcon />,
  [MailType.Archive]: <ArchiveBoxIcon />,
  [MailType.Junk]: <ArchiveBoxXMarkIcon />,
};

export function MailboxItemTypes({
  selected,
  onChange,
}: Pick<MailboxState, 'selected' | 'onChange'>) {
  return (
    <List spacing={1}>
      {Object.entries(MailType).map(([_, value]) => (
        <ListItem
          prefix={MailTypeIcon[value]}
          suffix={Data[value].length}
          selected={selected === value}
          onClick={() => onChange(value)}
          key={value}
        >
          <ListItemTitle>{value}</ListItemTitle>
        </ListItem>
      ))}
    </List>
  );
}
