import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
`

export const Body = styled.View`
    justify-content: center;
    align-items: center;
    height: 78%;
    width: 100%;
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

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;

`

export const Options = styled.View`
    flex-direction: row;
`

export const Separator = styled.View`
    width: ${RFValue(9)}px;
    height: 1px;
`