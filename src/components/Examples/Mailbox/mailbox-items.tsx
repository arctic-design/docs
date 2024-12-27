'use client';
import {
  Box,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  SnowColor,
  Stack,
  Tag,
} from '@arctic-kit/snow';
import { Mail, MailboxState } from './types';
import { Data } from './data';
import { formatRelativeDate } from '@/lib/utils';

function getTagColor(tag: string) {
  // Define logic to assign colors based on tag
  const tagColors: { [key: string]: SnowColor } = {
    Work: 'primary',
    Personal: 'secondary',
    Important: 'error',
    Finance: 'warning',
    IT: 'info',

    // Add more tag-color mappings as needed
  };
  return tagColors[tag] || 'default';
}

export function MailboxItems({
  filters,
  selected,
  selectedMailIndex,
  onChangeMailItem,
}: MailboxState) {
  const items: Mail[] = Data[selected];
  const hasAnyFilters = Object.entries(filters).some(([_, value]) => value);
  return (
    <Stack spacing={2}>
      {items
        .filter((fItem) => !hasAnyFilters || fItem.unread)
        .map((item, index) => (
          <Card
            size='small'
            key={item.id}
            onClick={() => onChangeMailItem(selected, index)}
            selected={selectedMailIndex[selected] === index}
            variant='outlined'
          >
            <CardHeader
              suffix={
                <Box
                  sx={{ fontSize: 12, color: 'var(--snow-colors-grey-700)' }}
                >
                  {formatRelativeDate(item.date)}
                </Box>
              }
            >
              <CardTitle>
                <div
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 6,
                  }}
                >
                  <span>{item.sender.name}</span>
                  {item.unread && (
                    <div
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'var(--snow-colors-primary-main)',
                      }}
                    />
                  )}
                </div>
              </CardTitle>
              <CardDescription>{item.subject}</CardDescription>
            </CardHeader>
            <CardContent
              style={{ fontSize: 12, color: 'var(--snow-colors-grey-700)' }}
            >
              {item.content.substring(0, 200) + '...'}
            </CardContent>
            <CardFooter
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: 4,
              }}
            >
              {item.tags.map((tag) => (
                <Tag key={tag} size='small' color={getTagColor(tag)}>
                  {tag}
                </Tag>
              ))}
            </CardFooter>
          </Card>
        ))}
    </Stack>
  );
}
