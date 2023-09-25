import { DefaultTheme } from './../../theme/styled.d';
//  '/native' para indicar q é para o mobile
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    color: green;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 32;
`;