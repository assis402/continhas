import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

export const Container = styled(MaskInput).attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.text_place_holder
}))`
    flex: 9;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`