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
    padding-left: ${RFValue(3)}px;
`

export const Header = styled.View.attrs({
})`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-bottom: ${RFValue(1)}px;
    padding: 0 ${RFValue(3)}px;
    position: absolute;
    width: 100%;
    z-index: 11;
    background-color: ${({ theme }) => theme.colors.background}
`

export const WhiteShadow = styled(LinearGradient).attrs(
    {
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 }
    }
)`
    width: 100%;
    height: ${RFValue(15)}px;
    position: absolute;
    top: ${RFValue(35)}px;
    z-index: 10;
    /* border: solid 1px black; */
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
        paddingBottom: getBottomSpace() + 70,
        paddingTop: RFValue(45)
    }
})`
    position: relative;
    z-index: 0;
`

