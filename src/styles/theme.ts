import { DefaultTheme } from '@emotion/react';

const colors = {
  primary: '#C5F277',
  secondary: '#F5F5F0',

  black1: '#000000',
  black2: '#191919',
  black3: '#333333',

  gray1: '#4c4c4c',
  gray2: '#666666',
  gray3: '#7f7f7f',
  gray4: '#999999',
  gray5: '#b2b2b2',
  gray6: '#cccccc',
  gray7: '#dcdbda',
  gray8: '#e5e5e5',
  gray9: '#e6e5e5',
  gray10: '#f4f4f3',

  green1: '#a7eb31',
  green2: '#b1ee48',
  green3: '#bbf060',
  green4: '#c5f277', // primary
  green5: '#cff48e',
  green6: '#e3f9bd',

  white: '#FFFFFF',
};

const fontSize = {
  xl: '24px',
  lg: '20px',
  md: '16px',
  sm: '14px',
  xs: '12px',
};

export type ColorsTypes = typeof colors;
export type FontTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
