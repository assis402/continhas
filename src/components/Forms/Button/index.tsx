import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps{
    title: string;
    flex: number;
    color: string;
    textColor: string;
}

export function Button({ title, color, textColor, flex = 0, ...rest }: Props){
    const theme = useTheme(); 

    if (color === '') color = theme.colors.success_secundary_light
    if (textColor === '') textColor = theme.colors.text

    return(
        <Container 
            {...rest}
            flex={flex}
            activeOpacity={0.6}
            color={color}
        >
            <Title color={textColor}>
                { title }
            </Title>
        </Container>
    )
}