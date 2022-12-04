import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps{
    title: string;
    flex: number;
}

export function OutlinedButton({ title, flex = 1, ...rest }: Props){
    return(
        <Container 
            {...rest}
            flex={flex}
            activeOpacity={0.4}
        >
            <Title>
                { title }
            </Title>
        </Container>
    )
}