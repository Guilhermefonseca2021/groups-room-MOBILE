import theme from './../../theme/theme';
//  '/native' para indicar q é para o mobile
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_700};

    padding: 24px;
    color: green;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 32;
`;