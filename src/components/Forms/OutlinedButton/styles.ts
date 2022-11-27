import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps{
    flex: number;
}

export const Container = styled.TouchableOpacity<Props>`
    flex: ${({ flex }) => flex};
    width: 100%;
    height: ${RFValue(50)}px;
    border-radius: 45px;
    align-items: center;
    justify-content: center;
    border: solid 2px ${({ theme }) => theme.colors.button_border};
`

export const Title = styled.Text`
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
`