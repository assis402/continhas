import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

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
    overScrollMode: 'never',
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: RFValue(18), paddingRight: RFValue(18) },
    disableIntervalMomentum: true, 
    snapToInterval: RFValue(305)
})`
    width: 100%;
`

export const Add = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const AddText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.secondary_light_new};
    font-size: ${RFValue(12)}px;
    margin-right: ${RFValue(10)}px;
`

export const AddIcon = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary_light_new};
    font-size: ${RFValue(28)}px;
    margin-right: ${RFValue(2)}px;
`

export const TransactionListContainer = styled.View`
    flex: 1;
    width: 100%;
    padding: 0 ${RFValue(22)}px;
    padding-top: ${RFValue(21)}px;
    margin-top: ${RFValue(25)}px;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: ${RFValue(35)}px;
    border-top-right-radius: ${RFValue(35)}px;
`