import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps{
    title: string;
    iconName: string;
    iconColor: string;
    flex: number;
}

export function BodilessButton({ title, iconName, iconColor, flex = 0, ...rest }: Props){
    return(
        <Container 
            {...rest}
            flex={flex}
            activeOpacity={0.4}
        >
            <Icon 
                name={iconName}
                iconColor={iconColor}
            />
            <Title>
                { title }
            </Title>
        </Container>
    )
}