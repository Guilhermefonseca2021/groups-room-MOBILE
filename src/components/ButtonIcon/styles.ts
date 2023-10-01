import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconStylesProps = 'PRIMARY' | 'SECONDARY';

type Props= {
    type: ButtonIconStylesProps;
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-left: 12px;
`;

// .attrs para modiifcar propriedades do component da biblioteca
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }: DefaultTheme) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
    weight: 'bold'
}))``;