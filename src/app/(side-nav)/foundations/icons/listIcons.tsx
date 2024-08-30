'use client';
import * as OutlineIcons from '@arctic-kit/icons';
import * as SolidIcons from '@arctic-kit/icons/solid';

import styles from './listIcons.module.scss';
import { CopyIconButton } from './CopyIconButton';
import { SearchableIcons } from './SearchableIcons';
import {
  Box,
  SegmentedControl,
  SegmentedControlButton,
  Grid,
  GridRow,
  GridColumn,
} from '@arctic-kit/snow';
import { useMemo, useState } from 'react';

// Function to format the icon name by removing "Icon" and splitting based on casing
const formatIconName = (iconName: string): string => {
  // Remove "Icon" from the name
  let nameWithoutIcon = iconName.replace(/Icon$/, '');

  // Handle special cases with numbers and patterns like 'x2', '3d'
  nameWithoutIcon = nameWithoutIcon.replace(/(\d+)([a-zA-Z])/g, '$1 $2'); // Add space between numbers and letters
  nameWithoutIcon = nameWithoutIcon.replace(/([a-zA-Z])(\d+)/g, '$1 $2'); // Add space between letters and numbers

  // Split the name based on uppercase letters and join them with a space
  return nameWithoutIcon.replace(/([a-z])([A-Z])/g, '$1 $2');
};

export function ArcticIcons() {
  const [iconVariant, setIconVariant] = useState<'outline' | 'solid'>(
    'outline',
  );

  const [color, setColor] = useState<string | undefined>();

  const Icons = useMemo(
    () => (iconVariant === 'solid' ? SolidIcons : OutlineIcons),
    [iconVariant],
  );
  return (
    <div className={styles.container}>
      <Box
        sx={{
          maxWidth: 400,
        }}
      >
        <Grid>
          <GridRow>
            <GridColumn xs={12} sm={6}>
              <SegmentedControl
                initialSelectedIndex={0}
                label='Variants'
                size='large'
              >
                <SegmentedControlButton
                  onClick={() => setIconVariant('outline')}
                >
                  Outline
                </SegmentedControlButton>
                <SegmentedControlButton onClick={() => setIconVariant('solid')}>
                  Solid
                </SegmentedControlButton>
              </SegmentedControl>
            </GridColumn>

            <GridColumn xs={12} sm={6}>
              <SegmentedControl
                initialSelectedIndex={0}
                label='Color'
                size='large'
              >
                <SegmentedControlButton onClick={() => setColor(undefined)}>
                  None
                </SegmentedControlButton>
                <SegmentedControlButton onClick={() => setColor('primary')}>
                  Primary
                </SegmentedControlButton>
                <SegmentedControlButton onClick={() => setColor('secondary')}>
                  Secondary
                </SegmentedControlButton>
                <SegmentedControlButton onClick={() => setColor('success')}>
                  Success
                </SegmentedControlButton>
                <SegmentedControlButton onClick={() => setColor('error')}>
                  Error
                </SegmentedControlButton>
              </SegmentedControl>
            </GridColumn>
          </GridRow>
        </Grid>
      </Box>

      <Box
        style={{ color: color ? `var(--snow-colors-${color}-main` : 'inherit' }}
      >
        <SearchableIcons
          render={(filterText) => {
            const filterWords = filterText.trim().toLowerCase().split(/\s+/); // Split the filterText into words

            return (
              <div className={styles.cardContainer}>
                {Object.entries(Icons)
                  .filter(
                    ([iconName]) =>
                      filterWords.some((word) =>
                        iconName.toLowerCase().includes(word),
                      ), // Ensure every word is found in the iconName
                  )
                  .map(([iconName, IconComponent]) => (
                    <div className={styles.card} key={iconName}>
                      <CopyIconButton name={iconName} variant={iconVariant} />
                      <IconComponent />
                      <p>{formatIconName(iconName)}</p>
                    </div>
                  ))}
              </div>
            );
          }}
        />
      </Box>
    </div>
  );
}
