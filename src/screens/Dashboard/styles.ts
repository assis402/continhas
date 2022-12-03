import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { Transaction } from '../../classes/Transaction';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary_new};
`;

export const Header = styled.View`
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(18)}px;
    margin-top: ${getStatusBarHeight() + RFValue(18)}px;
    margin-bottom: ${RFValue(22)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const MonthYearWrapper = styled.View`
    width: 100%;
    padding-right: ${RFValue(18)}px;
    padding-left: ${RFValue(18)}px;
    margin-bottom: ${RFValue(25)}px;
`

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const User = styled.View`
    margin-left: ${RFValue(10)}px;
    height: ${RFValue(20)}px;
`

export const UserGreeting = styled.Text`
    color: ${({theme}) => theme.colors.text_secondary_new};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.text_secondary_new};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Power = styled(Feather)`
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(24)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 24 } 
})`
    width: 100%;
`
export const Transactions = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 ${RFValue(22)}px;
    padding-top: ${RFValue(18)}px;
    margin-top: ${RFValue(25)}px;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: ${RFValue(35)}px;
    border-top-right-radius: ${RFValue(35)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.title};
    margin-bottom: ${RFValue(15)}px;
`

export const NoTransactions = styled.View`
    margin-top: ${RFValue(25)}px;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: ${RFValue(35)}px;
    border-top-right-radius: ${RFValue(35)}px;
`

export const NoTransactionsTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.secondary_new};
    font-size: ${RFValue(18)}px;
    width: 80%;
    text-align: center;
`

export const NoTransactionsText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.secondary_light_new};
    font-size: ${RFValue(12)}px;
    width: 70%;
    text-align: center;
`

export const NoTransactionsImg = styled.Image`
    color: ${({theme}) => theme.colors.secondary_light_new};
    margin-top: ${RFValue(20)}px;
    height: ${RFValue(60)}px;
    width: ${RFValue(60)}px;
`

export const MiniIcon = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary_light_new};
    font-size: ${RFValue(12)}px;
`

export const TransactionList = styled(FlatList as new () => FlatList<Transaction>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})``

export const LoadContainer = styled.View`
    justify-content: center;
    align-items: center;
`