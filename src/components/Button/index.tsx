import { TouchableOpacity, TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity"
import { Container, Title, ButtonTypeStyleProps } from "./styles"

// igual a todas propriedades que um touchopcity possui
type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export default function Button({ title, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest}>
        <Title>
          {title}
        </Title>
    </Container>
  )
}
