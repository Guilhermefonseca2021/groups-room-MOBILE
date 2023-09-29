import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native'

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
    
    width: 90%;
    border-radius: 6px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.MD};
    color: ${({ theme }: DefaultTheme) => theme.COLORS.WHITE};
    font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.BOLD};

    align-items: center;
    justify-content: center;
`;



