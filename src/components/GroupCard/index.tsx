import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';

// seja igual a  touchopaciteprops E meu objeto
type Props = TouchableOpacityProps & {
    title: string;
}

// ...rest faz entender que qualquer outra tipagem automica
export function GroupCard({ title, ...rest}: Props) {
    return(
        <Container {...rest}>
            <Icon />

            <Title>
                {title}
            </Title>
        </Container>
    )
}