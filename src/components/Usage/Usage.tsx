import { PropsWithChildren, useState } from 'react';
import { CodeBlock } from '@/components/CodeBlock';
import { ComponentUsage } from './ComponentUsage';
import { ComponentPropDefs } from '@/types';
import styles from './ComponentUsage.module.scss';

function parseStateProps(propsDefinition: ComponentPropDefs[]) {
  let props: any = {};
  if (propsDefinition.length > 0) {
    for (const def of propsDefinition) {
      if (def.defaultValue) {
        props[def.name] =
          def.defaultValue || (def.type === 'boolean' ? false : '');
      }
    }
  }
  return props;
}

export function Usage({
  code,
  component: Component,
  propDefs,
  title = 'Usage',
}: PropsWithChildren<{
  component: any;
  code: string;
  propDefs: ComponentPropDefs[];
  title?: string;
}>) {
  const [componentProps, setComponentProps] = useState<any>({
    ...parseStateProps(propDefs),
  });

  const propsString = Object.entries(componentProps)
    .map(([key, value]) => {
      if (key === 'children') {
        return '';
      } else if (typeof value === 'string') {
        return `${key}="${value}"`;
      } else if (typeof value === 'boolean') {
        return value ? key : ''; // Only include boolean props if they are true
      } else if (typeof value === 'number') {
        return `${key}={${value}}`;
      } else {
        return '';
      }
    })
    .filter(Boolean) // Remove any empty strings (e.g., for false boolean values)

    .join(' ');

  const updatedCode = code
    .replace('{{props}}', propsString)
    .replace('{{children}}', componentProps.children as string);

  return (
    <>
      <div className={styles.usageContentTitle}>{title}</div>
      <CodeBlock
        render={
          <ComponentUsage
            onChange={(name, value) =>
              setComponentProps((prevProps: any) => ({
                ...prevProps,
                [name]: value,
              }))
            }
            values={componentProps}
            propDefs={propDefs}
          >
            <Component {...componentProps} />
          </ComponentUsage>
        }
      >
        {updatedCode}
      </CodeBlock>
    </>
  );
}
