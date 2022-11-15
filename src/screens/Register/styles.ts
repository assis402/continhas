import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary_new};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    justify-content: center;
    align-items: flex-end;
    flex-direction: row;

    padding-bottom: 16px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_secondary_new};
`

export const Form = styled.View`
    flex: 1;
    height: ${Dimensions.get('window').height - RFValue(113) - RFValue(25)}px;
    padding: ${RFValue(24)}px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
`;

export const Fields = styled.View`
`

export const Buttons = styled.View`
    margin-top: 8px;
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
`

export const Footer = styled.View`
    /* position: absolute;
    width: 100%;
    bottom: 0; */
`