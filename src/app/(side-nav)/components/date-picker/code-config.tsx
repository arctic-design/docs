'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Box, DatePicker } from '@arctic-kit/snow';
import { useState } from 'react';

const code = `
import { useState } from 'react';
import { Box, DatePicker } from '@arctic-kit/snow';

function Demo() {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return (
    <Box sx={{ display: 'flex' }}>
      <DatePicker value={value} onChange={setValue} />
    </Box>
  );
}
`;

const propDefs: ComponentPropDefs[] = [];

function Demo() {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return (
    <Box sx={{ display: 'flex' }}>
      <DatePicker value={value} onChange={setValue} />
    </Box>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
