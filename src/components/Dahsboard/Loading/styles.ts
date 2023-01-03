import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';
const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    position: absolute;
    width: ${windowWidth}px;
    height: ${RFValue(385)}px;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background_loading};
    top: ${RFValue(55)}px;
    z-index: 10;
`
