'use client';
import { Usage } from '@/components/Usage';
import { codeConfig, sectionCodeConfig } from './code-config';

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
        code={sectionCodeConfig.code}
        component={sectionCodeConfig.component}
        propDefs={sectionCodeConfig.propDefs}
        title='Usage with leading and trailing sections'
      />
    </>
  );
}
