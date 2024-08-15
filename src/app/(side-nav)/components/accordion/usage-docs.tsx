'use client';
import { Usage } from '@/components/Usage';

import { codeConfig } from './code-config';

export default function Index() {
  return (
    <Usage
      code={codeConfig.code}
      component={codeConfig.component}
      propDefs={codeConfig.propDefs}
    />
  );
}
