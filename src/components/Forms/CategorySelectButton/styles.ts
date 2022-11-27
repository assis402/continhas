import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

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
    height: ${RFValue(50)}px;
`;

export const Category = styled.Text<CategoryProps>`
    color: ${({ theme, text }) => text !== 'Categoria' ? theme.colors.text : theme.colors.text_place_holder};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(17)}px;
    margin-left: ${RFValue(14)}px;
`

export const CategoryWrapper = styled.View`
    flex-direction: row;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_light};
`