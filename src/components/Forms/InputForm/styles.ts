import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
`

// export const Error = styled.Text`
//     color: ${({ theme }) => theme.colors.attention};
//     font-size: ${RFValue(12)}px;
//     font-family: ${({ theme }) => theme.fonts.regular};

//     margin: 0px 0;
//     margin-left: 5px;
// `

export const Error = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    width: ${RFValue(1)}px;
    opacity: 0.8;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.attention};
`

export const InputWrapper = styled.View`
    flex-direction: row;
    height: ${RFValue(50)}px;
    padding: ${RFValue(10)}px;
    font-size: ${RFValue(14)}px;
    border-radius: 15px;
    font-family: ${({ theme }) => theme.fonts.regular};
    background-color: ${({ theme }) => theme.colors.shape};
    margin-bottom: ${RFValue(16)}px;
`