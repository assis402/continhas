import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
    type: 'income' | 'outcome';
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.medium};
    /* padding: 19px 24px; */
    margin-bottom: 20px;
    flex-direction: row;
    padding: 10px 0px;
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
    margin-left: 12px;
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
    border-radius: 100px;
    height: 65px;
    width: 65px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.text_secondary_new};
`

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.text_light};
`