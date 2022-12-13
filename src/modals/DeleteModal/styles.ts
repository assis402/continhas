import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    width: 80%;
    height: 45%;
    padding: 25px;
    border-radius: 45px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`