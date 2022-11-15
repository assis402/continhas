import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    width: 100%;
    height: ${RFValue(56)}px;
    border-radius: 45px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.success_secundary_light};
`

export const Title = styled.Text`
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`