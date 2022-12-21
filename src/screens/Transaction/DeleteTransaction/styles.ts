import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    width: 78%;
    height: 30%;
    padding: 25px;
    border-radius: 45px;
    flex-direction: column;
    justify-content: space-between;
`;

export const ModalTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const TransactionTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title};
`

export const ButtonsWrapper = styled.View`
    flex-direction: column;
    height: 60%;
    margin-top: ${RFValue(20)}px;
`

export const Separator = styled.View`
    width: ${RFValue(1)}px;
    height: ${RFValue(10)}px;
`