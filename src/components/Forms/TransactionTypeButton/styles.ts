import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

interface Props {
    type: 'income' | 'outcome' ;
    isActive: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 48.5%;
    height: ${RFValue(56)}px;
    border: 1.5px solid ${({ theme }) => theme.colors.button_border};
    border-radius: 5px;

    ${({ type, isActive }) => type === 'income' && isActive && css<Props>`
        background-color: ${({ theme }) => theme.colors.success_light};
        border: none;
    `};

    ${({ type, isActive }) => type === 'outcome' && isActive && css<Props>`
        background-color: ${({ theme }) => theme.colors.attention_light};
        border: none;
    `};

    ${({ isActive }) => !isActive && css<Props>`
        opacity: 0.5;
    `};
`

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const Icon = styled(Feather)<Props>`
    margin-right: ${RFValue(14)}px;
    font-size: ${RFValue(20)}px;

    ${({ type }) => type === 'income' && css`
        color: ${({ theme }) => theme.colors.success};
    `};

    ${({ type }) => type === 'outcome' && css`
        color: ${({ theme }) => theme.colors.attention};
    `};
`