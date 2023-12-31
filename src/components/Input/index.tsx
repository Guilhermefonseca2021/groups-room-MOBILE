import { Container } from "./styles";
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

export default function Input({...rest}: TextInputProps) {
  const { COLORS }= useTheme();

  return (
    <Container 
      placeHolderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}
