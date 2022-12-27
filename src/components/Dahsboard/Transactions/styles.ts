import { LinearGradient } from 'expo-linear-gradient';
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

export const Header = styled.View.attrs({
})`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: ${RFValue(1)}px;
`

export const WhiteShadow = styled(LinearGradient).attrs(
    {
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 }
    }
)`
    width: 100%;
    height: ${RFValue(30)}px;
    position: absolute;
    top: ${RFValue(35)}px;
    z-index: 10;
`;

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
})`
    position: relative;
    z-index: 0;
`

