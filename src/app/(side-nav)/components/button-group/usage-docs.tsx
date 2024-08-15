'use client';
import { Usage } from '@/components/Usage';
import { codeConfig, splitButtonCodeConfig } from './code-config';

export default function Index() {
  return (
    <>
      <Usage
        code={codeConfig.code}
        component={codeConfig.component}
        propDefs={codeConfig.propDefs}
      />
      <Usage
        title='It can be combined with other components to create a SplitButton'
        code={splitButtonCodeConfig.code}
        component={splitButtonCodeConfig.component}
        propDefs={splitButtonCodeConfig.propDefs}
      />
    </>
  );
}
