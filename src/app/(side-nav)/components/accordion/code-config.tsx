import { CodeConfigType, ComponentPropDefs } from '@/types';
import { Accordion, AccordionItem, AccordionProps } from '@arctic-kit/snow';
import { PropsWithChildren } from 'react';
import { AdvanceExample } from './advance-example';
import AdvanceExampleSrc from './advance-example.tsx?raw';

const code = `
import { Accordion, AccordionItem } from '@arctic-kit/snow';

function Demo() {
  return (
    <Accordion {{props}}>
      <AccordionItem title='Section 1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet
        dolor vitae orci aliquam, vel vulputate ipsum tincidunt. Praesent nec
        tortor ut eros tristique blandit.
      </AccordionItem>
      <AccordionItem title='Section 2'>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Integer scelerisque, massa non auctor efficitur, ligula
        nunc gravida erat, sit amet viverra elit arcu ut arcu.
      </AccordionItem>
      <AccordionItem title='Section 3'>
        Suspendisse potenti. Cras sollicitudin, neque sed faucibus consequat,
        est nunc ultricies nunc, nec ullamcorper arcu orci non purus. Nam vel
        magna nec turpis ullamcorper venenatis.
      </AccordionItem>
    </Accordion>
  );
}
`;

const propDefs: ComponentPropDefs[] = [];

function Demo(props: PropsWithChildren<AccordionProps>) {
  return (
    <Accordion {...props}>
      <AccordionItem title='Section 1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet
        dolor vitae orci aliquam, vel vulputate ipsum tincidunt. Praesent nec
        tortor ut eros tristique blandit.
      </AccordionItem>
      <AccordionItem title='Section 2'>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Integer scelerisque, massa non auctor efficitur, ligula
        nunc gravida erat, sit amet viverra elit arcu ut arcu.
      </AccordionItem>
      <AccordionItem title='Section 3'>
        Suspendisse potenti. Cras sollicitudin, neque sed faucibus consequat,
        est nunc ultricies nunc, nec ullamcorper arcu orci non purus. Nam vel
        magna nec turpis ullamcorper venenatis.
      </AccordionItem>
    </Accordion>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};

export const advanceCodeConfig: CodeConfigType = {
  component: AdvanceExample,
  centered: true,
  maxWidth: 440,
  code: AdvanceExampleSrc,
  propDefs,
};
