import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
`

export const Picker = styled.View`
    flex: 1;
    justify-content: space-between;
    margin-bottom: ${RFValue(16)}px;
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

interface MonthProps {
    active: boolean
}

export const MonthButton = styled.TouchableOpacity`
    flex-basis: 0;
    flex-grow: 1;
    justify-content: center;
    height: ${RFValue(43)}px;
    /* border: 1px solid ${({ theme }) => theme.colors.secondary_super_light_new}; */
`

export const Month = styled.Text<MonthProps>`
    text-align: center;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme, active }) => active ? theme.fonts.bold : theme.fonts.regular};
    color: ${({ theme, active }) => active ? theme.colors.text : theme.colors.text_light};
`

export const Grid = styled.ScrollView`
    /* flex-direction: row;
    flex-wrap: wrap; */
`

export const GridLine = styled.View`
    flex-direction: row;
`