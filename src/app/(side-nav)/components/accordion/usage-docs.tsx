'use client';
import { Usage } from '@/components/Usage';

import { codeConfig, advanceCodeConfig } from './code-config';

export default function Index() {
  return (
    <>
      <Usage
        code={codeConfig.code}
        component={codeConfig.component}
        propDefs={codeConfig.propDefs}
        title='Simple use case'
      />
      <Usage
        code={advanceCodeConfig.code}
        component={advanceCodeConfig.component}
        propDefs={advanceCodeConfig.propDefs}
        title='With custom components'
      />
    </>
  );
}
