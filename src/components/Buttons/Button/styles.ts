import { TextProps, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps extends TouchableOpacityProps{
    flex: number;
    color: string;
}

interface TitleProps extends TextProps{
    color: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    flex: ${({ flex }) => flex === 0 ? 'none' : flex};
    width: 100%;
    height: ${RFValue(50)}px;
    border-radius: 45px;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => color};
`

export const Title = styled.Text<TitleProps>`
    line-height: 24px;
    color: ${({ color }) => color};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`