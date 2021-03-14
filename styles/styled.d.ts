import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      primary: string;
      red: string;
      grey: string;
      orange: string;
      yellow: string;
      purple: string;
      white: string;
      blue: string;
      black: string;
      cardBg: string;
    },
    fontSizes: {
      default: string;
      huge: string;
      small: string;
      tiny: string;
    },
    spacing: {
      default: string;
      vertical: string;
      horizontal: string;
      huge: string;
    }
  }
}