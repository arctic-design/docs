'use client';
import { Usage } from '@/components/Usage';
import {
  codeConfig,
  withAccordionCodeConfig,
  withLoadingCodeConfig,
  withErrorCodeConfig,
} from './code-config';

export default function Index() {
  return (
    <>
      <Usage
        code={codeConfig.code}
        component={codeConfig.component}
        propDefs={codeConfig.propDefs}
      />
      <Usage
        code={withErrorCodeConfig.code}
        component={withErrorCodeConfig.component}
        propDefs={withErrorCodeConfig.propDefs}
        title='With Error text'
      />
      <Usage
        code={withLoadingCodeConfig.code}
        component={withLoadingCodeConfig.component}
        propDefs={withLoadingCodeConfig.propDefs}
        title='With Loading text'
      />
      <Usage
        code={withAccordionCodeConfig.code}
        component={withAccordionCodeConfig.component}
        propDefs={withAccordionCodeConfig.propDefs}
        title='With Accordion children'
      />
    </>
  );
}
