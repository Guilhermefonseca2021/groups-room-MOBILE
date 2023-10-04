import { ThemeProvider } from 'styled-components/native';
import 'styled-components';
import theme from '../theme/theme'

type ThemeType = typeof theme;
declare module 'styled-components'  {
    export interface DefaultTheme extends ThemeType {  }
};

