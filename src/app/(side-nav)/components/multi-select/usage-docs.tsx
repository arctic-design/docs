'use client';
import { Usage } from '@/components/Usage';
import { codeConfig, errorStateCodeConfig } from './code-config';

export default function Index() {
  return (
    <>
      <Usage
        code={codeConfig.code}
        component={codeConfig.component}
        propDefs={codeConfig.propDefs}
      />
      <Usage
        code={errorStateCodeConfig.code}
        component={errorStateCodeConfig.component}
        propDefs={errorStateCodeConfig.propDefs}
        title='Error State'
      />
    </>
  );
}
