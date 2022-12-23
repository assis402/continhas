import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    /* margin-top: ${RFValue(25)}px;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: ${RFValue(35)}px;
    border-top-right-radius: ${RFValue(35)}px; */
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.secondary_new};
    font-size: ${RFValue(17.5)}px;
    width: 82%;
    text-align: center;
`

export const Text = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.secondary_light_new};
    font-size: ${RFValue(12)}px;
    width: 70%;
    text-align: center;
`

export const Img = styled.Image`
    color: ${({theme}) => theme.colors.secondary_light_new};
    margin-top: ${RFValue(20)}px;
    height: ${RFValue(60)}px;
    width: ${RFValue(60)}px;
`

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary_light_new};
    font-size: ${RFValue(12)}px;
`