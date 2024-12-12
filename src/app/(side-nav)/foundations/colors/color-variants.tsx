'use client';
import React from 'react';
import {
  DEFAULT_THEME,
  SnowColorType,
  Box,
  Tooltip,
  getContrastText,
} from '@arctic-kit/snow';
import { styled } from '@pigment-css/react';

const ColorCode = styled.span({
  fontWeight: 'inherit',
  fontSize: '0.75rem',
  lineHeight: 1.66,
  letterSpacing: '0.03333em',
  '&:hover': {
    cursor: 'pointer',
  },
});

const ColorPalette = (props: { color: SnowColorType; name: string }) => {
  const { color, name } = props;
  const handleCopyToClipboard = (colorCode: string) => {
    navigator.clipboard
      .writeText(colorCode)
      .then(
        () => {
          // alert(`Copied ${colorCode} to clipboard`);
        },
        (err) => {
          console.error('Error copying color to clipboard: ', err);
        },
      )
      .catch((err) => {
        console.error('Error copying color to clipboard: ', err);
      });
  };

  const mainTextColor = getContrastText(color.main);

  return (
    <>
      <Box
        as='li'
        style={{
          backgroundColor: color.main,
          color: 'var(--snow-colors-white)',
        }}
      >
        <Box style={{ marginBottom: 60 }}>{name}</Box>
        <div className='color-swatch'>
          <Box
            style={{
              color: mainTextColor,
            }}
          >
            main
          </Box>
          <ColorCode
            onClick={() => handleCopyToClipboard(color.main)}
            style={{
              color: mainTextColor,
            }}
          >
            {color.main}
          </ColorCode>
        </div>
      </Box>
      {Object.keys(color)
        .filter((key) => key !== 'main')
        .map((colorKey) => {
          const variantTextColor = getContrastText((color as any)[colorKey]);

          return (
            <Box
              key={colorKey}
              as='li'
              style={{
                backgroundColor: (color as any)[colorKey],
                color: 'var(--snow-colors-neutral-0)',
              }}
            >
              <div className='color-swatch'>
                <Box
                  style={{
                    color: variantTextColor,
                  }}
                >
                  {colorKey}
                </Box>
                <Tooltip message='Copy color'>
                  <ColorCode
                    color={(color as any)[colorKey]}
                    onClick={() =>
                      handleCopyToClipboard((color as any)[colorKey])
                    }
                    style={{
                      color: variantTextColor,
                    }}
                  >
                    {(color as any)[colorKey]}
                  </ColorCode>
                </Tooltip>
              </div>
            </Box>
          );
        })}
    </>
  );
};

const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',

  ul: {
    padding: 0,
    margin: '0 16px 16px 0',
    flexGrow: 1,
    listStyle: 'none',

    '@media (min-width: 600px)': {
      flexGrow: 0,
      width: '30%',
    },

    li: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
      padding: '15px !important',

      '.color-swatch': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
  },
});

export function ColorVariants() {
  const { colors } = DEFAULT_THEME;
  return (
    <Container>
      <ul>
        <ColorPalette color={colors.primary} name='Primary' />
      </ul>
      <ul>
        <ColorPalette color={colors.success} name='Success' />
      </ul>
      <ul>
        <ColorPalette color={colors.info} name='Info' />
      </ul>
      <ul>
        <ColorPalette color={colors.warning} name='Warning' />
      </ul>
      <ul>
        <ColorPalette color={colors.error} name='Error' />
      </ul>
      <ul>
        <ColorPalette color={colors.grey} name='Grey' />
      </ul>
    </Container>
  );
}
