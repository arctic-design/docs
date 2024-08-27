'use client';
import * as Icons from '@arctic-kit/icons';
import styles from './listIcons.module.scss';
import { CopyIconButton } from './CopyIconButton';
import { SearchableIcons } from './SearchableIcons';

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
  return (
    <div className={styles.container}>
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
                    <CopyIconButton name={iconName} />
                    <IconComponent />
                    <p>{formatIconName(iconName)}</p>
                  </div>
                ))}
            </div>
          );
        }}
      />
    </div>
  );
}
