import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    padding: 0 30px;
    height: ${RFValue(44)}px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.mood_text};
`;

export const Category = styled.Text`
    color: ${({ theme }) => theme.colors.secondary_light_new};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.secondary_light_new};
`