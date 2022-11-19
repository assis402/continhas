import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
`

export const YearList = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const MonthList = styled.View`
    width: 100%;
    justify-items: center;
    margin: 30px 0px;
`

export const Year = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};

`

export const ChangeYear = styled.TouchableOpacity`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
    border-radius: 500px;
    background-color: ${({ theme }) => theme.colors.secondary_super_light_new};
    align-items: center;
    justify-content: center;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.secondary_light_new};
`

export const Month = styled.Text`
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_light};
`

export const Separator = styled.View`
    width: 10px;
    height: 35px;
`