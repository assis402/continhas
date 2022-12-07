import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps{
    title: string;
    flex: number;
    iconName: string;
}

export function MiniOutlinedButton({ title, iconName, flex = 1, ...rest }: Props){
    return(
        <Container 
            {...rest}
            flex={flex}
            activeOpacity={0.2}
        >
            <Title>
                { title }
            </Title>
            <Icon name={iconName}/>
        </Container>
    )
}