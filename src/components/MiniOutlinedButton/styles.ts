import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(90)}px;
    height: ${RFValue(35)}px;
    border-radius: 45px;
    padding: 0 ${RFValue(13)}px;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.button_border_light};
    /* border: solid 1.5px ${({ theme }) => theme.colors.button_border}; */
    flex-direction: row;
    opacity: 0.8;
`

export const Title = styled.Text`
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12)}px;
`

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary_new};
    font-size: ${RFValue(16)}px;
`