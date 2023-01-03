import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';


export const Container = styled.View`
    /* background-color: ${({ theme }) => theme.colors.background}; */
    padding: 0 ${RFValue(25)}px;
    padding-top: ${RFValue(25)}px;
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