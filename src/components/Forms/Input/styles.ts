import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.text_place_holder
}))`
    width: 100%;
    height: ${RFValue(56)}px;
    padding: 18px;
    font-size: ${RFValue(14)}px;
    border-radius: 15px;
    font-family: ${({ theme }) => theme.fonts.regular};
    background-color: ${({ theme }) => theme.colors.shape};
    margin-bottom: 8px;
`