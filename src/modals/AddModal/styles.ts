import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary_new};
    border-top-left-radius: ${RFValue(20)}px;
    border-top-right-radius: ${RFValue(20)}px;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: ${RFValue(16)}px;
    border-top-color: ${({ theme }) => theme.colors.button_border_light};
    border-top-width: 1px;
    border-top-style: solid;
    border-top-left-radius: ${RFValue(20)}px;
    border-top-right-radius: ${RFValue(20)}px;
`;

export const HeaderButtons = styled.View`
    width: 100%;
    margin-left: ${RFValue(12)}px;
    margin-top: ${RFValue(8)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text_secondary_new};
    line-height: ${RFValue(20)}px;
`

export const Form = styled.View`
    width: 100%;
    flex: 1;
    padding: ${RFValue(24)}px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: ${RFValue(35)}px;
    border-top-right-radius: ${RFValue(35)}px;
`;

export const Fields = styled.View`
    width: 100%;
`

export const DateTimeSelectors = styled.View`
    flex-flow: row nowrap;
    align-items: stretch;
    align-self: stretch;
    margin-top: ${RFValue(16)}px;
    margin-bottom: ${RFValue(16)}px;
`

export const Buttons = styled.View`
    margin-bottom: ${RFValue(16)}px;
    flex-direction: row;
    justify-content: space-between;
`

export const Footer = styled.View`
    display: flex;
    flex-direction: row;
`

export const Separator = styled.View`
    width: ${RFValue(10)}px;
`