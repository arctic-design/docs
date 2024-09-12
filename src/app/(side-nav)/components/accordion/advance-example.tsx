import { EllipsisVerticalIcon, GithubIcon } from '@arctic-kit/icons';
import {
  Accordion,
  AccordionItem,
  ActionMenu,
  ActionMenuItem,
  Box,
  Stack,
  Tag,
} from '@arctic-kit/snow';

function RepoDetails({ label }: { label: string }) {
  return (
    <Stack direction='horizontal' inline spacing={2}>
      <Tag>
        <GithubIcon
          style={{ width: 12, color: 'var(--snow-colors-grey-900)' }}
        />
      </Tag>
      <Box as='strong' sx={{ color: 'var(--snow-colors-grey-900)' }}>
        {label}
      </Box>
    </Stack>
  );
}

function SeverityDetails({
  critical,
  high,
  medium,
  low,
}: {
  critical: number;
  high: number;
  medium: number;
  low: number;
}) {
  return (
    <Stack direction='horizontal' inline spacing={4}>
      <Stack direction='horizontal' inline spacing={4}>
        <Tag color='error'>{critical}</Tag>
        <Tag color='warning'>{high}</Tag>
        <Tag color='info'>{medium}</Tag>
        <Tag>{low}</Tag>
      </Stack>

      <ActionMenu renderContent={<EllipsisVerticalIcon />}>
        <ActionMenuItem label='Undo' onClick={() => console.log('Undo')} />
        <ActionMenuItem label='Redo' disabled />
        <ActionMenuItem label='Cut' />
      </ActionMenu>
    </Stack>
  );
}

export function AdvanceExample() {
  return (
    <Box sx={{ overflowX: 'auto', minWidth: 650 }}>
      <Accordion spacing={12}>
        <AccordionItem
          trailingExpandSection={
            <RepoDetails label='arctic-design/arctic-kit' />
          }
          reverse
          titleComponent={
            <SeverityDetails critical={1} high={4} medium={2} low={7} />
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquet dolor vitae orci aliquam, vel vulputate ipsum tincidunt.
          Praesent nec tortor ut eros tristique blandit.
        </AccordionItem>
        <AccordionItem
          trailingExpandSection={<RepoDetails label='arctic-design/docs' />}
          reverse
          titleComponent={
            <SeverityDetails critical={3} high={1} medium={4} low={1} />
          }
        >
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Integer scelerisque, massa non auctor
          efficitur, ligula nunc gravida erat, sit amet viverra elit arcu ut
          arcu.
        </AccordionItem>
        <AccordionItem
          trailingExpandSection={<RepoDetails label='arctic-design/iceberg' />}
          reverse
          titleComponent={
            <SeverityDetails critical={2} high={1} medium={4} low={1} />
          }
        >
          Suspendisse potenti. Cras sollicitudin, neque sed faucibus consequat,
          est nunc ultricies nunc, nec ullamcorper arcu orci non purus. Nam vel
          magna nec turpis ullamcorper venenatis.
        </AccordionItem>
        <AccordionItem
          trailingExpandSection={
            <RepoDetails label='arctic-design/react-icon-builder' />
          }
          reverse
          titleComponent={
            <SeverityDetails critical={2} high={1} medium={4} low={1} />
          }
        >
          Suspendisse potenti. Cras sollicitudin, neque sed faucibus consequat,
          est nunc ultricies nunc, nec ullamcorper arcu orci non purus. Nam vel
          magna nec turpis ullamcorper venenatis.
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
