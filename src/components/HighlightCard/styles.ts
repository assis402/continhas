import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

interface TypeProps {
    type: 'income' | 'outcome' | 'balance';
}

interface GradientProps extends LinearGradientProps {
    type: 'income' | 'outcome' | 'balance';
}

export const Container = styled(LinearGradient).attrs(
    {
        start: { x: -1, y: 0 },
        end: { x: 1, y: 0 }
    }
)<GradientProps>`
    width: ${RFValue(300)}px;
    height: ${RFValue(136)}px;
    flex: 1;
    /* border: ${({ type, theme }) => type === 'balance' && `solid 10px ${theme.colors.button_border_super_light}`}; */
    border-radius: 10px;
    padding: 19px 23px;
    /* padding-bottom: ${RFValue(10)}px; */
    /* background-color: ${({ type, theme }) => type === 'balance' && theme.colors.secondary_full}; */
    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => 
        type === 'balance' ? theme.colors.text_secondary_new : theme.colors.secondary_new};
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`
    color: ${({ theme }) => theme.colors.success};
    font-size: ${({ type }) => type === 'balance' ? RFValue(30) : RFValue(35)}px;

    /* ${({ type }) => type === 'income' && css`
        color: ${({ theme }) => theme.colors.success};
    `};

    ${({ type }) => type === 'outcome' && css`
        color: ${({ theme }) => theme.colors.attention};
    `}; */

    color: ${({ theme }) => theme.colors.secondary_new};

    ${({ type }) => type === 'balance' && css`
        color: ${({ theme }) => theme.colors.text_secondary_new};
    `};
`;

export const Content = styled.View`
    
`;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({ theme, type }) => 
        type === 'balance' ? theme.colors.text_secondary_new : theme.colors.secondary_new};
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme, type }) => 
        type === 'balance' ? theme.colors.shape : theme.colors.text_light};
`;