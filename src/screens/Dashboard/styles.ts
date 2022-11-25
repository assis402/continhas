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
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(18)}px;
    margin-bottom: 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const MonthYearWrapper = styled.View`
    width: 100%;
    padding-right: 24px;
    padding-left: 24px;
    margin-bottom: 25px;
`

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const User = styled.View`
    margin-left: 17px;
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
    padding: 0 30px;
    padding-top: 20px;
    margin-top: 25px;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.title};
    margin-bottom: 35px;
`

export const NoTransactions = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const NoTransactionsTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.mood_text};
    text-align: right;
    font-size: ${RFValue(18)}px;
    width: ${RFValue(180)}px;
`

export const NoTransactionsIcon = styled(MaterialIcons)`
    color: ${({theme}) => theme.colors.mood_icon};
    font-size: ${RFValue(70)}px;
    margin-left: 20px;
`

export const TransactionList = styled(FlatList as new () => FlatList<Transaction>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 60
    }
})``

export const LoadContainer = styled.View`
    justify-content: center;
    align-items: center;
`