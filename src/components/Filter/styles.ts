import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme, css} from 'styled-components/native';

export type FilterStyleProps = {
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    /*  &&  indica se for verdadeiro passa a estilizacao */
    ${({theme, isActive}: DefaultTheme) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `};

    border-radius: 4px;
    margin-right: 12px;

    height: 38px;  
    width: 70px;

    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }: DefaultTheme) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
    `};
`;
