import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps{
    title: string;
    flex: number;
}

export function BodilessButton({ title, flex = 0, ...rest }: Props){
    return(
        <Container 
            {...rest}
            flex={flex}
            activeOpacity={0.6}
        >
            <Title>
                { title }
            </Title>
        </Container>
    )
}