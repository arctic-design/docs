'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Calendar, CalendarProps } from '@arctic-kit/snow';
import { useState } from 'react';

const code = `
import { useState } from 'react';
import { Calendar } from '@arctic-kit/snow';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Calendar selected={value} onSelect={setValue} />;
}
`;

const propDefs: ComponentPropDefs[] = [];

function Demo(props: CalendarProps) {
  const [value, setValue] = useState(new Date());
  return <Calendar {...props} selected={value} onSelect={setValue} />;
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
