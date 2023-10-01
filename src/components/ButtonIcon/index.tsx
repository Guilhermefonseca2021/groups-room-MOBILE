import { TouchableOpacityProps, View } from "react-native";
import { ButtonIconStylesProps, Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'


type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconStylesProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest}: Props) {
    return(
        <Container {...rest}>
            <Icon 
                name={icon}
                type={type} 
            />
        </Container>
    )
}