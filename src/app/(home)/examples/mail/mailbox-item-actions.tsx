import {
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  TrashIcon,
} from '@arctic-kit/icons';
import { Tooltip, IconButton } from '@arctic-kit/snow';

export function MailboxAItemActions() {
  return (
    <>
      <Tooltip message='Archive'>
        <IconButton noBorder>
          <ArchiveBoxIcon />
        </IconButton>
      </Tooltip>
      <Tooltip message='Move to junk'>
        <IconButton noBorder>
          <ArchiveBoxXMarkIcon />
        </IconButton>
      </Tooltip>
      <Tooltip message='Move to trash'>
        <IconButton noBorder>
          <TrashIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
