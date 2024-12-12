'use client';
import React from 'react';
import { DEFAULT_THEME } from '@arctic-kit/snow';
import { styled } from '@pigment-css/react';
import { ColorPalette } from './ColorPalette';

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
