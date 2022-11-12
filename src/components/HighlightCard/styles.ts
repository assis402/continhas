import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

interface TypeProps {
    type: 'income' | 'outcome' | 'balance';
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme, type }) => 
        type === 'balance' ? theme.colors.secondary : theme.colors.shape};
    width: ${RFValue(300)}px;

    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => 
        type === 'balance' ? theme.colors.shape : theme.colors.title};
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(40)}px;

    ${({ type }) => type === 'income' && css`
        color: ${({ theme }) => theme.colors.success};
    `};

    ${({ type }) => type === 'outcome' && css`
        color: ${({ theme }) => theme.colors.attention};
    `};

    ${({ type }) => type === 'balance' && css`
        color: ${({ theme }) => theme.colors.shape};
    `};
`;

export const Content = styled.View`
    
`;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({ theme, type }) => 
        type === 'balance' ? theme.colors.shape : theme.colors.title};
    margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme, type }) => 
        type === 'balance' ? theme.colors.shape : theme.colors.text_light};
`;