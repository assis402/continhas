import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import Checkbox from 'expo-checkbox';

export const CheckboxComponent = styled(Checkbox)`
    border: solid 2px ${({ theme }) => theme.colors.text_light};
`;

interface Props {
    isActive: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    border: 1.5px solid ${({ theme }) => theme.colors.button_border};
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
    padding: 0 16px;
    padding-left: ${RFValue(16)}px;
    height: ${RFValue(50)}px;

    ${({ isActive }) => isActive && css<Props>`
        background-color: ${({ theme }) => theme.colors.shape};
        border: 1.5px solid rgba(0,0,0,0);
    `};

    ${({ isActive }) => !isActive && css<Props>`
        opacity: 0.5;
    `};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text };
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(20)}px;
    margin-left: ${RFValue(20)}px;
`;