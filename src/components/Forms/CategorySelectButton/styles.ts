import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { Platform } from 'react-native';

interface CategoryProps {
    text: string;
}

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    background-color: ${({ theme }) => theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    padding: 0 16px;
    padding-left: ${RFValue(16)}px;
    height: ${RFValue(50)}px;
`;

export const Category = styled.Text<CategoryProps>`
    color: ${({ theme, text }) => text !== 'Categoria' ? theme.colors.text : theme.colors.text_place_holder};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${Platform.OS === 'ios' ? RFValue(23) : RFValue(20)}px;
    margin-left: ${({ text }) => text !== 'Categoria' ? RFValue(14) : 0}px;
`

export const CategoryWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_light};
`