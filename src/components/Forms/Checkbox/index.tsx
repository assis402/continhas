import React from "react";
import { CheckboxComponent, Container, Title } from "./styles";
import { formatDateToRegister } from '../../../utils/helper';
import { CheckboxProps } from "expo-checkbox";
import { StyleProp, ViewStyle } from "react-native";

interface Props extends CheckboxProps {
    title: string
    containerStyle?: StyleProp<ViewStyle>
    onPress: () => void
}

export function Checkbox({ title, containerStyle, onPress, value, ...rest } : Props){
    return(
        <Container style={containerStyle} isActive={value} onPress={onPress}>
            <CheckboxComponent value={value} {...rest}/>
            <Title>{title}</Title>
        </Container>
    )
}