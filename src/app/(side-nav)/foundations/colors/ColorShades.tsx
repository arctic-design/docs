import React from 'react';
import * as colors from '@arctic-kit/colors';
import styles from './ColorShades.module.scss';

interface ColorShades {
  [shade: string]: string;
}

export const ColorShades: React.FC = () => {
  const colorEntries: [string, ColorShades][] = Object.entries(colors);

  return (
    <div className={styles.colorPalette}>
      <h2>Color Shades</h2>
      <h4>
        The <code>@arctic-kit/colors</code> package offers a variety of
        additional color shades. Below is a list of the available shades.
      </h4>

      {colorEntries.map(([colorName, shades]) => (
        <div key={colorName} className={styles.colorCategory}>
          <h2 className={styles.colorCategoryTitle}>{colorName}</h2>
          <div className={styles.colorShades}>
            {Object.entries(shades).map(([shadeKey, hex]) => (
              <div key={shadeKey} className={styles.colorShade}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: hex }}
                  title={`${colorName} ${shadeKey}: ${hex}`}
                ></div>
                <div className={styles.colorInfo}>
                  <span className={styles.shadeKey}>{shadeKey}</span>
                  <span className={styles.hexValue}>{hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
