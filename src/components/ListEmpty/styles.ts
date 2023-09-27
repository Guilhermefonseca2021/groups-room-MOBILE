import styled, { DefaultTheme } from 'styled-components/native'

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
   text-align: center;

   font-size: ${({ theme }: DefaultTheme) => theme.FONT_SIZE.SM}px;
   font-family: ${({ theme }: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
   color: ${({ theme }: DefaultTheme) => theme.GRAY_300}
`;
