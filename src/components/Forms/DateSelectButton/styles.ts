import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { Platform } from 'react-native';

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
    flex: 2 auto;
    /* width: 100%; */
`;

export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.text };
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${Platform.OS === 'ios' ? RFValue(23) : RFValue(20)}px;
    height: 28px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_light};
`