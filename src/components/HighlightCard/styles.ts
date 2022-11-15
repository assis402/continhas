import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

interface TypeProps {
    type: 'income' | 'outcome' | 'balance';
}

// interface GradientProps extends LinearGradientProps {
//     gradientColor: string[]
// }

export const Container = styled(LinearGradient).attrs(
    {
        start: { x: -1, y: 0 },
        end: { x: 1, y: 0 }
    }
)`
    width: ${RFValue(300)}px;
    flex: 1;

    border-radius: 10px;
    padding: 19px 23px;
    /* padding-bottom: ${RFValue(10)}px; */
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
    font-size: ${RFValue(40)}px;

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