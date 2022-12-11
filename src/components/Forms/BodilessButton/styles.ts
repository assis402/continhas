import { TouchableHighlightProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

interface Props extends TouchableHighlightProps{
    flex: number;
}

export const Container = styled.TouchableOpacity<Props>`
    flex: ${({ flex }) => flex === 0 ? 'none' : flex};
    width: 100%;
    height: ${RFValue(47)}px;
    border-radius: 45px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const Title = styled.Text`
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    line-height: ${RFValue(19)}px;
`

interface IconProps {
    iconColor: string;
}

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(14)}px;
    color: ${({ iconColor }) => iconColor};
    margin-right: ${RFValue(8)}px;
`