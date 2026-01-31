/* eslint-disable @typescript-eslint/naming-convention */

import 'styled-components';

import { Theme } from '../assets/styles/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
