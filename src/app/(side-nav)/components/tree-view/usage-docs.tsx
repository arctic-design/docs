'use client';
import { Usage } from '@/components/Usage';
import { codeConfig, withIconsCodeConfig } from './code-config';

export default function Index() {
  return (
    <>
      <Usage
        code={codeConfig.code}
        component={codeConfig.component}
        propDefs={codeConfig.propDefs}
        title='Basic Usage'
      />
      <Usage
        code={withIconsCodeConfig.code}
        component={withIconsCodeConfig.component}
        propDefs={withIconsCodeConfig.propDefs}
        title='Customizable to use prefix and suffix icons'
      />
    </>
  );
}
