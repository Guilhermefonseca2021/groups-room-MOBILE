import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity"
import { Container, Title, ButtonTypeStyleProps } from "./styles"

// Onde eu for usar esse component declaro o tipo e o type
type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

// por type ser opcional vou deixar por default primary
export default function Button({ title, type = 'PRIMARY', ...rest}: Props) {
  return (
    // O container por ser um butao to deicando o resto das nossas propriedades
    <Container 
      type={type}
      {...rest}
     >
        <Title>
          {title}
        </Title>
    </Container>
  )
}
