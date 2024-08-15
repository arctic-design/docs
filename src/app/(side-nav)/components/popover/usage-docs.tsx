'use client';
import { Usage } from '@/components/Usage';
import { codeConfig, customTriggerCodeConfig } from './code-config';

export default function Index() {
  return (
    <>
      <Usage
        code={codeConfig.code}
        component={codeConfig.component}
        propDefs={codeConfig.propDefs}
      />
      <Usage
        code={customTriggerCodeConfig.code}
        component={customTriggerCodeConfig.component}
        propDefs={customTriggerCodeConfig.propDefs}
        title='Custom Trigger'
      />
    </>
  );
}
