import { DefaultTheme } from './styled.d';
import 'styled-components';
import theme from './theme'


declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType { }
}









// declare module 'styled-components' {
//     type ThemeType = typeof theme;

//     export interface DefaultTheme extends ThemeType { }
// }

// type ThemeType = typeof defaultTheme

// declare module 'styled-components' {
//     export interface DefaultTheme extends ThemeType {}
// }