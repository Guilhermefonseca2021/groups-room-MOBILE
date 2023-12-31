import { TouchableOpacity } from 'react-native'
import theme from 'src/theme/theme';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native'
import  { UsersThree } from 'phosphor-react-native'

// entre ( ) pq vou precisar das propriedades dele (para funcionar a tipagem no nosso .tsx)
export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;

    background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    padding: 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    ${({ theme}: DefaultTheme)  => css`
        font-size:  ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
        font-family:  ${theme.FONT_FAMILY.REGULAR};
    `};
`;

// .attrs  manipular a estilizacao da biblioteca 
export const Icon = styled(UsersThree).attrs(({ theme }: DefaultTheme) => ({
    size: 32,
    color: theme.COLORS.GREEN_700,
    weight: 'fill'
}))`
    margin-right: 20px;
`;