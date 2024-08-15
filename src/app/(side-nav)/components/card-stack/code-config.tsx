import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  Accordion,
  AccordionItem,
  Box,
  CardStack,
  CardStackProps,
  Chip,
} from '@arctic-kit/snow';

const code = `
import { Box, CardStack } from '@arctic-kit/snow';

function Demo() {
  return (
    <Box sx={{ width: '100%' }}>
      <CardStack totalItems={5} completedItems={2} {{props}}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={index}
            sx={{ padding: '12px 8px', backgroundColor: '#fff', margin: 4 }}
            as='p'
          >
            This could be a section {index + 1} element
          </Box>
        ))}
      </CardStack>
    </Box>
  );
}
`;

const accordionCode = `
import { Accordion, AccordionItem, Box, CardStack, Chip } from '@arctic-kit/snow';

function AccordionChild({
  activeIndex = 0,
  indexes,
  onClick,
}: {
  activeIndex?: number;
  indexes: number[];
  onClick?: (index: number) => void;
}) {
  return (
    <Accordion>
      <AccordionItem
        title='Title 1'
        subTitle='Sub-title1 text can be put here'
        active={indexes[0] === activeIndex}
        onToggle={() => onClick && onClick(indexes[0])}
        defaultExpanded={indexes[0] === activeIndex}
        titleFooter='Footer text1'
        leadingExpandSection={
          <Chip color='success' size='small'>
            Success
          </Chip>
        }
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          <Chip size='small'>Option 1</Chip>
          <Chip size='small'>Option 2</Chip>
          <Chip size='small'>Option 3</Chip>
        </Box>
      </AccordionItem>
      <AccordionItem
        title='Title 2'
        subTitle='Sub-title2 text can be put here'
        titleFooter='Footer text2'
        active={indexes[1] === activeIndex}
        onToggle={() => onClick && onClick(indexes[1])}
        defaultExpanded={indexes[1] === activeIndex}
      >
        <Box
          sx={{
            padding: 12,
          }}
        >
          This is the content of the second section
        </Box>
      </AccordionItem>
      <AccordionItem
        title='Title 3'
        subTitle='Sub-title3 text can be put here'
        titleFooter='Footer text3'
        active={indexes[2] === activeIndex}
        onToggle={() => onClick && onClick(indexes[2])}
        defaultExpanded={indexes[2] === activeIndex}
      >
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

function Demo() {
  return (
    <Box sx={{ width: '100%' }}>
      <CardStack totalItems={5} completedItems={2} {{props}}>
        <AccordionChild indexes={[0, 1, 2]} />
      </CardStack>
    </Box>
  );
}
`;

const propDefs: ComponentPropDefs[] = [
  {
    name: 'title',
    type: 'text',
    defaultValue: 'Group Header Title',
  },

  {
    name: 'loading',
    type: 'boolean',
  },
  {
    name: 'active',
    type: 'boolean',
  },
  {
    name: 'initialCollapsed',
    type: 'boolean',
    defaultValue: true,
  },
  {
    name: 'loadingText',
    type: 'text',
    defaultValue: 'Updating records',
  },
  {
    name: 'errorText',
    type: 'text',
    defaultValue: 'Last action failed',
  },
];

function AccordionChild({
  activeIndex = 0,
  indexes,
  onClick,
}: {
  activeIndex?: number;
  indexes: number[];
  onClick?: (index: number) => void;
}) {
  return (
    <Accordion>
      <AccordionItem
        title='Title 1'
        subTitle='Sub-title1 text can be put here'
        active={indexes[0] === activeIndex}
        onToggle={() => onClick && onClick(indexes[0])}
        defaultExpanded={indexes[0] === activeIndex}
        titleFooter='Footer text1'
        leadingExpandSection={
          <Chip color='success' size='small'>
            Success
          </Chip>
        }
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          <Chip size='small'>Option 1</Chip>
          <Chip size='small'>Option 2</Chip>
          <Chip size='small'>Option 3</Chip>
        </Box>
      </AccordionItem>
      <AccordionItem
        title='Title 2'
        subTitle='Sub-title2 text can be put here'
        titleFooter='Footer text2'
        active={indexes[1] === activeIndex}
        onToggle={() => onClick && onClick(indexes[1])}
        defaultExpanded={indexes[1] === activeIndex}
      >
        <Box
          sx={{
            padding: 12,
          }}
        >
          This is the content of the second section
        </Box>
      </AccordionItem>
      <AccordionItem
        title='Title 3'
        subTitle='Sub-title3 text can be put here'
        titleFooter='Footer text3'
        active={indexes[2] === activeIndex}
        onToggle={() => onClick && onClick(indexes[2])}
        defaultExpanded={indexes[2] === activeIndex}
      >
        This is the content of section 3.
      </AccordionItem>
    </Accordion>
  );
}

function Demo({ children, totalItems, ...props }: CardStackProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <CardStack totalItems={5} completedItems={2} {...props}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={index}
            sx={{ padding: '12px 8px', backgroundColor: '#fff', margin: 4 }}
            as='p'
          >
            This could be a section {index + 1} element
          </Box>
        ))}
      </CardStack>
    </Box>
  );
}

function DemoWithAccordion({ children, totalItems, ...props }: CardStackProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <CardStack totalItems={5} completedItems={2} {...props}>
        <AccordionChild indexes={[0, 1, 2]} />
      </CardStack>
    </Box>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs: propDefs.filter(
    (item) => !['loadingText', 'errorText'].includes(item.name),
  ),
};

export const withLoadingCodeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs: propDefs.filter((item) =>
    ['title', 'loadingText', 'loading'].includes(item.name),
  ),
};

export const withErrorCodeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs: propDefs.filter((item) =>
    ['title', 'errorText'].includes(item.name),
  ),
};

export const withAccordionCodeConfig: CodeConfigType = {
  component: DemoWithAccordion,
  centered: true,
  maxWidth: 440,
  code: accordionCode,
  propDefs: propDefs.filter(
    (item) => !['loadingText', 'errorText'].includes(item.name),
  ),
};
