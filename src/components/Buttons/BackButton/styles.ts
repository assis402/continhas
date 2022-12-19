import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
    width: ${RFValue(55)}px;
    height: ${RFValue(35)}px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(16)}px;
    opacity: 0.6;
`