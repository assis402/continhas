import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.text_light
}))`
    width: 100%;
    height: ${RFValue(56)}px;
    padding: 18px;
    font-size: ${RFValue(14)}px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
    background-color: ${({ theme }) => theme.colors.shape};
    margin-bottom: 8px;
`