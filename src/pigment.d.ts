import { SnowTheme, SnowThemeArgs } from '@arctic-kit/snow';

declare module '@pigment-css/react/theme' {
  interface ThemeArgs extends SnowThemeArgs {}
}

declare global {
  namespace React {
    interface HTMLAttributes {
      sx?:
        | React.CSSProperties
        | ((theme: SnowTheme) => React.CSSProperties)
        | ReadonlyArray<
            React.CSSProperties | ((theme: SnowTheme) => React.CSSProperties)
          >;
    }
  }
}
