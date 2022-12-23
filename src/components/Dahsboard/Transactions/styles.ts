import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Transaction } from '../../../classes/Transaction';

export const Container = styled.View`
    flex: 1;
    width: 100%;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.title};
`

export const Header = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: ${RFValue(15)}px;
`

export const Options = styled.View`
    flex-direction: row;
`

export const Separator = styled.View`
    width: ${RFValue(9)}px;
    height: 1px;
`

export const TransactionList = styled(FlatList as new () => FlatList<Transaction>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 75
    }
})``

