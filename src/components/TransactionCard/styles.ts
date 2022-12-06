import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import Swiper from 'react-native-swiper'


interface TypeProps {
    type: 'income' | 'outcome';
}

export const Container = styled(Swiper).attrs({
    showsButtons: false,
    loop: false,
    showsPagination: false
})`
    height: ${RFValue(47)}px;    
`

export const TransactionComponent = styled.View`
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-bottom: ${RFValue(22.5)}px;
    flex-direction: row;
`

export const First = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`

export const Second = styled.View`
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-left: ${RFValue(9)}px;
`

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme, type }) => 
        type === 'income' ? theme.colors.success : theme.colors.attention};
    font-size: ${RFValue(15)}px;
`

export const Category = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary_new};
    border-radius: 1000px;
    height: ${RFValue(47)}px;
    width: ${RFValue(47)}px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.text_secondary_new};
`

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_light};
`

export const Options = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: ${RFValue(22.5)}px;
`