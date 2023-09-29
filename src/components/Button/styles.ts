import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme, css } from 'styled-components/native'

// export aqui para manter a consistencia no component
export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}

//  IMPORTANTE: aqui inferi o props para no component declarar qual o tipo 
export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;
    /* nosso tema definido com base nas props */
    background-color: ${({ theme, type }: DefaultTheme) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    
    width: 100%;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme }: DefaultTheme) => css`
        font-size: ${theme.FONT_SIZE.MD};
        color: ${ theme.COLORS.WHITE};
        font-family: ${ theme.FONT_FAMILY.BOLD};
    `};


    align-items: center;
    justify-content: center;
`;



