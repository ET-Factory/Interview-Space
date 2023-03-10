import '@emotion/react';
import { ColorsTypes } from './theme';

declare module '@emotion/react' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
  }
}
