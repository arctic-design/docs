import styles from './Table.module.scss';
import { InformationCircleIcon } from '@arctic-kit/icons';
import { Tooltip, Table } from '@arctic-kit/snow';

export function PropsReference({ componentDoc }: { componentDoc: any }) {
  const componentProps = componentDoc?.props;
  if (!componentProps || Object.keys(componentProps).length === 0) {
    return null;
  }

  const sortedProps = Object.entries(componentProps).sort(([a], [b]) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );

  return (
    <div className={styles.tableContainer}>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Props</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedProps.map(([propName, propInfo]: [string, any], index) => {
            const typeInfo = propInfo?.type;
            const isEnumType = typeInfo?.name === 'enum';
            const enumValues = isEnumType
              ? typeInfo?.value
                  ?.map((val: any) => val.value)
                  .filter((val: any) => val !== 'undefined') || []
              : [];
            const propType = isEnumType
              ? typeInfo?.raw?.replace(' | undefined', '')
              : typeInfo?.name;
            const hasSingleEnumType =
              isEnumType &&
              enumValues.length > 0 &&
              propType?.split(' | ').length === 1;

            const defaultValue = propInfo?.defaultValue?.value || '---';

            return (
              <Table.Row key={`${propName}-${index}`}>
                <Table.Cell>
                  <code>{propName}</code>
                </Table.Cell>
                <Table.Cell>
                  <code className={styles.tableCellData}>
                    {propType || ''}
                    {hasSingleEnumType && (
                      <Tooltip message={enumValues.join(', ')}>
                        <span className={styles.iconContainer}>
                          <InformationCircleIcon className={styles.icon} />
                        </span>
                      </Tooltip>
                    )}
                  </code>
                </Table.Cell>
                <Table.Cell>
                  {defaultValue !== '---' && <code>{defaultValue}</code>}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
