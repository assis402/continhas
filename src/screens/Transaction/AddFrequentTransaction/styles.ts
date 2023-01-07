import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transaction } from '../../../classes/Transaction';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary_new};
`;

export const Header = styled.View`
    height: ${RFValue(113)}px;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    padding-bottom: ${RFValue(16)}px;
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

export const FrequentList = styled(FlatList as new () => FlatList<Transaction>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 75
    }
})``

export const Separator = styled.View`
    width: ${RFValue(10)}px;
`

export const Footer = styled.View`
    margin-bottom: ${RFValue(55)}px;
`